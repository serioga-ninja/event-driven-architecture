import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { pick } from 'lodash';
import { LoginUserCommand, RegisterUserCommand } from '../commands';
import type { RegisterUserDto } from '../dtos';
import { UserLoggedOutEvent } from '../events';
import { AuthRepository } from '../repositories';
import { AuthUser, ValidateUserReturn } from '../types';
import AuthCacheService from './auth-cache.service';
import PasswordService from './passwords.service';
import LoginUserDto from '../dtos/login-user.dto';
import { authenticator } from 'otplib';

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

  async login(user: LoginUserDto) {
    const authUser = await this.validateUserPassword(user.email, user.password);

    if (authUser.isTfaEnabled) {
      if (!user.tfaCode) {
        return {
          isTfaEnabled: true,
        };
      } else {
        const isValid = authenticator.verify({
          secret: authUser.tfaSecret,
          token: user.tfaCode,
        });

        if (!isValid) {
          throw new UnauthorizedException('Invalid 2FA token');
        }
      }
    }

    return this._commandBus.execute(
      new LoginUserCommand({
        _id: authUser._id,
        email: authUser.email,
      }),
    );
  }

  async logout(user: AuthUser) {
    await this._authCacheService.removeAuthUserCache(user._id);

    this._eventBus.publish(new UserLoggedOutEvent(user));
  }

  async validateUserPassword(
    email: string,
    password: string,
  ): Promise<ValidateUserReturn> {
    const user = await this._authRepository.findOneBy(
      { email },
      { select: ['_id', 'email', 'password', 'isTfaEnabled', 'tfaSecret'] },
    );
    const passwordIsValid = this._passwordService.comparePasswords(
      password,
      user?.password || '',
    );

    if (!passwordIsValid || !user) {
      throw new UnauthorizedException('Credentials are not valid.');
    }

    return pick(user.toObject(), ['_id', 'email', 'isTfaEnabled', 'tfaSecret']);
  }
}
