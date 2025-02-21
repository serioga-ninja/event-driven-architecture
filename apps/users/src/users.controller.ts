import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import type { CreateUserRequest } from './dtos';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserRequest: CreateUserRequest) {
    return this.usersService.createUser(createUserRequest);
  }
}
