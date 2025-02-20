import { Inject, Injectable } from '@nestjs/common';
import type { CreateUserRequest } from './dtos';
import type { ClientProxy } from '@nestjs/microservices';
import { COMMUNICATION_SERVICE } from '../../../src/constants';
import { CreateUserEvent } from './events';

@Injectable()
export class UsersService {
  private readonly users: any[] = [];

  constructor(
    @Inject(COMMUNICATION_SERVICE)
    private readonly communicationClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserRequest: CreateUserRequest) {
    this.users.push(createUserRequest);
    this.communicationClient.emit(
      CreateUserEvent.type,
      new CreateUserEvent(createUserRequest.email),
    );
  }
}
