import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import type { CreateUserRequest } from './dtos';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserRequest: CreateUserRequest) {
    this.usersService.createUser(createUserRequest);
  }
}
