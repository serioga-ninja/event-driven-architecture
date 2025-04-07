import { JwtAuthGuard } from '@app/common';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import type { CreateUserDto } from './dtos';
import { UsersService } from './users.service';
import { FastifyRequest } from 'fastify';

@Controller()
@UseGuards(JwtAuthGuard)
export default class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserRequest: CreateUserDto) {
    return this.usersService.createUser(createUserRequest);
  }

  @Get('current')
  handleGetCurrentUser(@Req() req: FastifyRequest) {
    return req.user;
  }
}
