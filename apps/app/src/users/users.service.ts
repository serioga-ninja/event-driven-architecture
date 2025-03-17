import { EMAILS_SERVICE } from '@app/common';
import {
  Inject,
  Injectable,
  Logger,
  UnprocessableEntityException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CreateUserDto } from './dtos';
import { CreateUserEvent } from './events';
import { Users } from './mongo-schemas';
import MongoUsersRepository from './repositories/mongo-users.repository';

@Injectable()
export class UsersService {
  private readonly _logger = new Logger(UsersService.name);

  constructor(
    private readonly usersRepository: MongoUsersRepository,
    @Inject(EMAILS_SERVICE) private readonly emailsService: ClientProxy,
  ) {}

  async createUser(createUserRequest: CreateUserDto) {
    await this.validateCreateUserRequest(createUserRequest);

    const order = await this.usersRepository.create(createUserRequest);

    await lastValueFrom(
      this.emailsService.emit(
        CreateUserEvent.type,
        new CreateUserEvent(createUserRequest.email),
      ),
    );

    return order;
  }

  getUserById(id: string) {
    return this.usersRepository.findOneById(id);
  }

  private async validateCreateUserRequest(request: CreateUserDto) {
    let user: Users | null = null;

    try {
      user = await this.usersRepository.findOneBy({
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
