import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../../../users/src/users.service';
import { TokenPayload } from '../services/auth.service';

@Injectable()
export default class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly usersService: UsersService,
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
    try {
      return this.usersService.getUserById(userId);
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}
