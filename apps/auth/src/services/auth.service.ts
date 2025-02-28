import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { pick } from 'lodash';
import { RegisterUserCommand } from '../commands';
import LoginUserCommand from '../commands/login-user.command';
import type { RegisterUserDto } from '../dtos';
import { UserLoggedOutEvent } from '../events';
import { AuthRepository } from '../repositories';
import { AuthUser } from '../types';
import AuthCacheService from './auth-cache.service';
import PasswordService from './passwords.service';

@Injectable()
export default class AuthService {
  constructor(
    private readonly _authRepository: AuthRepository,
    private readonly _passwordService: PasswordService,
    private readonly _commandBus: CommandBus,
    private readonly _authCacheService: AuthCacheService,
    private readonly _eventBus: EventBus,
  ) {}

  registerUser(createUserRequest: RegisterUserDto) {
    return this._commandBus.execute(new RegisterUserCommand(createUserRequest));
  }

  login(user: AuthUser) {
    return this._commandBus.execute(new LoginUserCommand(user));
  }

  async logout(user: AuthUser) {
    await this._authCacheService.removeAuthUserCache(user._id);

    this._eventBus.publish(new UserLoggedOutEvent(user));
  }

  async validateUser(email: string, password: string) {
    const user = await this._authRepository.findOneBy({ email });
    const passwordIsValid = this._passwordService.comparePasswords(
      password,
      user?.password || '',
    );

    if (!passwordIsValid || !user) {
      throw new UnauthorizedException('Credentials are not valid.');
    }

    return pick(user.toObject(), '_id', 'email');
  }
}
