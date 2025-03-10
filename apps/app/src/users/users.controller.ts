import { JwtAuthGuard } from '@app/common';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import type { CreateUserDto } from './dtos';
import { UsersService } from './users.service';

@Controller()
export default class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  createUser(@Body() createUserRequest: CreateUserDto) {
    return this.usersService.createUser(createUserRequest);
  }
}
