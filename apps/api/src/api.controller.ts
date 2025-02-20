import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiService } from './api.service';
import { CreateUserRequest } from './dtos';

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  getHello(): string {
    return this.apiService.getHello();
  }

  @Post()
  createUser(@Body() CreateUserRequest: CreateUserRequest) {
    this.apiService.createUser(CreateUserRequest);
  }
}
