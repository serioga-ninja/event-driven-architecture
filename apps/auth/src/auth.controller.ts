import { ValidateUserEvent } from '@app/common';
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import type { Users } from '../../users/src/mongo-schemas';
import { CurrentUser } from './decorators';
import type { RegisterUserDto } from './dtos';
import { JwtAuthGuard, LocalAuthGuard } from './guards';
import { AuthService } from './services';
import type { AuthRequest } from './types';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  handleLoginRequest(@Request() req: AuthRequest) {
    return this.authService.login(req.user);
  }

  @Post('register')
  handleRegisterRequest(@Body() body: RegisterUserDto) {
    return this.authService.createUser(body);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  handleLogOut() {
    return this.authService.logout();
  }

  @UseGuards(JwtAuthGuard)
  @MessagePattern(ValidateUserEvent.type)
  validateUser(@CurrentUser() user: Users) {
    return user;
  }
}
