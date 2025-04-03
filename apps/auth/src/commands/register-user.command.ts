import {
  Command,
  CommandHandler,
  EventBus,
  ICommandHandler,
} from '@nestjs/cqrs';
import type { RegisterUserDto } from '../dtos';
import { Logger, UnprocessableEntityException } from '@nestjs/common';
import { AuthRepository } from '../repositories';
import PasswordService from '../services/passwords.service';
import { EntityStatus } from '@app/common';
import UserRegisteredEvent from '../events/user-registered.event';
import { Users } from '@app/prisma';

export class RegisterUserCommand extends Command<{
  id: string;
  email: string;
}> {
  constructor(public readonly createUserRequest: RegisterUserDto) {
    super();
  }
}

@CommandHandler(RegisterUserCommand)
export class RegisterUserHandler
  implements ICommandHandler<RegisterUserCommand>
{
  private readonly _logger = new Logger(RegisterUserHandler.name);

  constructor(
    private readonly _authRepository: AuthRepository,
    private readonly _passwordService: PasswordService,
    private readonly _eventBus: EventBus,
  ) {}

  async execute({ createUserRequest }: RegisterUserCommand) {
    await this.validateCreateUserRequest(createUserRequest);

    createUserRequest.password = this._passwordService.generatePassword(
      createUserRequest.password,
    );
    const user = await this._authRepository.create({
      ...createUserRequest,
      entityStatus: EntityStatus.ACTIVE,
    });
    this._eventBus.publish(new UserRegisteredEvent(user.id, user.email));

    return {
      id: user.id,
      email: user.email,
    };
  }

  private async validateCreateUserRequest(request: RegisterUserDto) {
    let user: Users | null = null;

    try {
      user = await this._authRepository.findOneBy({
        email: request.email,
      });
    } catch (err) {
      this._logger.error(err);
    }

    if (user) {
      throw new UnprocessableEntityException('Email already exists.');
    }
  }
}
