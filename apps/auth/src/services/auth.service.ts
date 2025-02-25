import { EMAILS_SERVICE } from '@app/common';
import {
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from '../../../users/src/events';
import type { Users } from '../../../users/src/mongo-schemas';
import UsersRepository from '../../../users/src/users.repository';
import type { RegisterUserDto } from '../dtos';
import PasswordService from './passwords.service';

export type TokenPayload = {
  userId: string;
};

@Injectable()
export default class AuthService {
  private readonly _logger = new Logger(AuthService.name);

  constructor(
    private readonly _configService: ConfigService,
    private readonly _jwtService: JwtService,
    private readonly _usersRepository: UsersRepository,
    private readonly _passwordService: PasswordService,
    @Inject(EMAILS_SERVICE) private readonly _emailsService: ClientProxy,
  ) {}

  async createUser(createUserRequest: RegisterUserDto) {
    await this.validateCreateUserRequest(createUserRequest);

    createUserRequest.password = this._passwordService.generatePassword(
      createUserRequest.password,
    );
    const user = await this._usersRepository.create(createUserRequest);

    this._emailsService.emit(
      CreateUserEvent.type,
      new CreateUserEvent(createUserRequest.email),
    );

    return user;
  }

  login(user: Users) {
    const tokenPayload: TokenPayload = {
      userId: user._id,
    };

    const expires = new Date();
    expires.setSeconds(
      expires.getSeconds() + this._configService.get('JWT_EXPIRATION'),
    );

    const token = this._jwtService.sign(tokenPayload, {
      secret: this._configService.get('JWT_SECRET'),
    });

    return {
      token,
      expires,
    };
  }

  logout() {
    // clear redis session
  }

  async validateUser(email: string, password: string) {
    const user = await this._usersRepository.findOneBy({ email });
    const passwordIsValid = this._passwordService.comparePasswords(
      password,
      user?.password || '',
    );

    if (!passwordIsValid) {
      throw new UnauthorizedException('Credentials are not valid.');
    }

    return user;
  }

  private async validateCreateUserRequest(request: RegisterUserDto) {
    let user: Users | null = null;

    try {
      user = await this._usersRepository.findOneBy({
        email: request.email,
      });
    } catch (err) {
      this._logger.error(err);
    }

    if (user) {
      throw new UnprocessableEntityException('Email already exists.');
    }
  }
}
