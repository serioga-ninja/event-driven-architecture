import { Inject, Injectable } from '@nestjs/common';
import type { CreateUserRequest } from './dtos';
import UsersRepository from './users.repository';
import { EMAILS_SERVICE } from './constants';
import type { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CreateUserEvent } from './events';

@Injectable()
export class UsersService {
  private readonly users: any[] = [];

  constructor(
    private readonly usersRepository: UsersRepository,
    @Inject(EMAILS_SERVICE) private readonly emailsService: ClientProxy,
  ) {}

  async createUser(createUserRequest: CreateUserRequest) {
    const order = await this.usersRepository.create(createUserRequest);
    await lastValueFrom(
      this.emailsService.emit(
        CreateUserEvent.type,
        new CreateUserEvent(createUserRequest.email),
      ),
    );

    return order;
  }
}
