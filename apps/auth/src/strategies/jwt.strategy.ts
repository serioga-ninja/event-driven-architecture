import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import AuthRepository from '../repositories/auth.repository';
import { TokenPayload } from '../services/auth.service';

@Injectable()
export default class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly _authRepository: AuthRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors<{
        authorization: string | null;
      }>([
        (request) => {
          console.log('request', request);

          return request?.authorization;
        },
      ]),
      ignoreExpiration: true,
      secretOrKey: configService.get('JWT_SECRET') as string,
    });
  }

  validate({ userId }: TokenPayload) {
    return this._authRepository.findOneById(userId);
  }
}
