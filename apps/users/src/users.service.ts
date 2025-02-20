import { Inject, Injectable } from '@nestjs/common';
import { USERS_EVENTS } from './constants';
import type { CreateUserRequest } from './dtos';
import type UsersRepository from './users.repository';

@Injectable()
export class UsersService {
  private readonly users: any[] = [];

  constructor(
    @Inject(USERS_EVENTS)
    private readonly usersRepository: UsersRepository,
  ) {}

  createUser(createUserRequest: CreateUserRequest) {
    this.usersRepository.createUser(createUserRequest);
  }
}
