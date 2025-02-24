import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { RegisterUserDto } from './dtos';
import { JwtAuthGuard, LocalAuthGuard } from './guards';
import type { AuthRequest } from './types';
import { MessagePattern } from '@nestjs/microservices';
import { ValidateUserEvent } from '@app/common';
import { CurrentUser } from './decorators';
import type { Users } from '../../users/src/schemas';

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
