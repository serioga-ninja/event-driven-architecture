import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { authenticator } from 'otplib';
import type { AppConfig } from '../app.types';
import { SecretKey } from '@otplib/core/utils';
import { UsersRepository } from '../users/repositories';

type VerifyTfaTokenInput = {
  token: string;
  secret: SecretKey;
};

@Injectable()
export default class SecurityService {
  constructor(
    private readonly _configService: ConfigService<AppConfig, true>,
    private readonly _usersRepository: UsersRepository,
  ) {}

  async initializeEnabling2FA(email: string) {
    const data = this._generateSecret(email);

    const user = await this._usersRepository.findOneByOrThrow({ email });

    if (user.isTfaEnabled) {
      throw new BadRequestException('2FA is already enabled');
    }

    await this._usersRepository.updateOneBy(
      { email },
      {
        tfaSecret: data.secret,
      },
    );

    return data;
  }

  async enable2FA(email: string, token: string) {
    const data = this._generateSecret(email);

    const user = await this._usersRepository.findOneByOrThrow({ email });

    if (user.isTfaEnabled) {
      throw new BadRequestException('2FA is already enabled');
    }
    if (!user.tfaSecret) {
      throw new ForbiddenException();
    }

    if (!this.verifyToken({ token, secret: user.tfaSecret })) {
      throw new UnauthorizedException('Invalid TFA token');
    }

    await this._usersRepository.updateOneBy(
      { email },
      {
        isTfaEnabled: true,
      },
    );

    return data;
  }

  async disable2FA(email: string) {
    const user = await this._usersRepository.findOneByOrThrow({ email });

    if (!user.isTfaEnabled) {
      throw new BadRequestException('2FA is not enabled');
    }

    await this._usersRepository.updateOneBy(
      { email },
      {
        isTfaEnabled: false,
        tfaSecret: null,
      },
    );
  }

  private _generateSecret(email: string) {
    const secret = authenticator.generateSecret();
    const uri = authenticator.keyuri(
      email,
      this._configService.getOrThrow('APP_SECRET'),
      secret,
    );

    return {
      uri,
      secret,
    };
  }

  verifyToken(input: VerifyTfaTokenInput): boolean {
    return authenticator.verify(input);
  }
}
