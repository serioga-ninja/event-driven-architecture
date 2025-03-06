import { JwtService } from '@app/common';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { FastifyRequest } from 'fastify';
import { Strategy } from 'passport-custom';
import { AuthCacheService } from '../services';
import { TokenPayload } from '../types';

@Injectable()
export default class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly _authCacheService: AuthCacheService,
    private readonly _jwtService: JwtService,
  ) {
    super();
  }

  async validate(req: FastifyRequest) {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('Token not found');
    }

    const user = this._jwtService.verify<TokenPayload>(token);

    if (!user) {
      throw new UnauthorizedException('Invalid token');
    }

    const authUser = await this._authCacheService.getAuthUserCache(user._id);

    if (!authUser) {
      throw new UnauthorizedException('User not found');
    }

    return authUser;
  }
}
