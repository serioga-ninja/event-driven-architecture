import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService as NestJWT } from '@nestjs/jwt';

@Injectable()
export default class JwtService {
  constructor(
    private readonly _configService: ConfigService,
    private readonly _jwtService: NestJWT,
  ) {}

  sign<T extends object>(obj: T): string {
    return this._jwtService.sign(obj, {
      algorithm: 'HS256',
      expiresIn: this._configService.get('JWT_EXPIRATION_SEC') * 1000,
      secret: this._configService.get('JWT_SECRET'),
    });
  }

  verify<T extends object>(token: string): T {
    return this._jwtService.verify(token, {
      algorithms: ['HS256'],
      secret: this._configService.get('JWT_SECRET'),
    });
  }
}
