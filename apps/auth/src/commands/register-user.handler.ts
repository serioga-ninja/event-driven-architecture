import { Logger, UnprocessableEntityException } from '@nestjs/common';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import type { Users } from '../../../users/src/mongo-schemas';
import type { RegisterUserDto } from '../dtos';
import UserRegisteredEvent from '../events/user-registered.event';
import { AuthRepository } from '../repositories';
import PasswordService from '../services/passwords.service';
import RegisterUserCommand from './register-user.command';

@CommandHandler(RegisterUserCommand)
export default class RegisterUserHandler
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
    const user = await this._authRepository.create(createUserRequest);
    this._eventBus.publish(new UserRegisteredEvent(user.email));

    return {
      id: user._id,
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
