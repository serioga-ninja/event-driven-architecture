import { JwtService, TokenPayload, ValidateUserEvent } from '@app/common';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';
import { AuthCacheService } from '../services';

@Injectable()
export default class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly _authCacheService: AuthCacheService,
    private readonly _jwtService: JwtService,
  ) {
    super();
  }

  async validate(req: ValidateUserEvent) {
    const token = this.extractToken(req.authentication);

    if (!token) {
      throw new UnauthorizedException('Token not found');
    }

    const user = this._jwtService.verify<TokenPayload>(token);

    if (!user) {
      throw new UnauthorizedException('Invalid token');
    }

    const authUser = await this._authCacheService.getAuthUserCache(user.id);

    if (!authUser) {
      throw new UnauthorizedException('User not found');
    }

    return authUser;
  }

  private extractToken(str?: string): string | null {
    const [type, token] = str?.split(' ') ?? [];

    return type === 'Bearer' ? token : null;
  }
}
