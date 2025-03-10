import { TokenPayload, ValidateUserEvent } from '@app/common';
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CurrentUser } from './decorators';
import type { RegisterUserDto } from './dtos';
import { JwtAuthGuard, LocalAuthGuard } from './guards';
import { AuthService } from './services';
import { AuthRequest, LoginRequest } from './types';
import LoginUserDto from './dtos/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  handleLoginRequest(@Request() req: LoginRequest, @Body() body: LoginUserDto) {
    return this.authService.login(body, req.user);
  }

  @Post('register')
  handleRegisterRequest(@Body() body: RegisterUserDto) {
    return this.authService.registerUser(body);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  handleLogOut(@Request() req: AuthRequest) {
    return this.authService.logout(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @MessagePattern(ValidateUserEvent.type)
  validateUser(@CurrentUser() user: TokenPayload) {
    return user;
  }
}
