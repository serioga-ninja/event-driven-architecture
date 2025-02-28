import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { FastifyRequest } from 'fastify';
import { Strategy } from 'passport-custom';
import AuthCacheService from '../services/auth-cache.service';
import { TokenPayload } from '../types';

@Injectable()
export default class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly _configService: ConfigService,
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

    const user = await this._jwtService.verifyAsync<TokenPayload>(token, {
      algorithms: ['HS256'],
      secret: this._configService.get('JWT_SECRET'),
    });

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
