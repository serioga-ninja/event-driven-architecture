import { Inject, Injectable } from '@nestjs/common';
import type { CreateUserRequest } from './dtos';
import type { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './events';
import { COMMUNICATION_SERVICE } from '../../../src/constants';

@Injectable()
export class ApiService {
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
    this.communicationClient
      .emit(CreateUserEvent.type, new CreateUserEvent(createUserRequest.email))
      .subscribe({
        error: (err) => console.error('Error emitting event:', err),
        complete: () => console.log('Event emitted successfully'),
      });
  }
}
