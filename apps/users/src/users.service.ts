import { Inject, Injectable } from '@nestjs/common';
import type { CreateUserRequest } from './dtos';
import type { ClientProxy } from '@nestjs/microservices';
import { USERS_EVENTS } from './constants';
import { CreateUserEvent } from './events';

@Injectable()
export class UsersService {
  private readonly users: any[] = [];

  constructor(
    @Inject(USERS_EVENTS)
    private readonly communicationClient: ClientProxy,
  ) {}

  createUser(createUserRequest: CreateUserRequest) {
    this.users.push(createUserRequest);
    this.communicationClient.emit(
      CreateUserEvent.type,
      new CreateUserEvent(createUserRequest.email),
    );
  }
}
