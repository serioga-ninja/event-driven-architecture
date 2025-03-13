import { JwtService, TokenPayload } from '@app/common';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { UserLoggedInEvent } from '../events';
import LoginUserCommand from './login-user.command';
import { AuthConfigs } from '../types';

@CommandHandler(LoginUserCommand)
export default class LoginUserHandler
  implements ICommandHandler<LoginUserCommand>
{
  private readonly _logger = new Logger(LoginUserHandler.name);

  constructor(
    private readonly _configService: ConfigService<AuthConfigs, true>,
    private readonly _jwtService: JwtService,
    private readonly _eventBus: EventBus,
  ) {}

  execute({ user }: LoginUserCommand) {
    const tokenPayload: TokenPayload = {
      ...user,
    };

    const expires = new Date();
    expires.setSeconds(
      expires.getSeconds() + this._configService.get('JWT_EXPIRATION_SEC'),
    );

    const token = this._jwtService.sign(tokenPayload);
    this._eventBus.publish(new UserLoggedInEvent(user));
    this._logger.log(`User ${user.email} logged in.`);

    return Promise.resolve({
      token,
      expires,
    });
  }
}
