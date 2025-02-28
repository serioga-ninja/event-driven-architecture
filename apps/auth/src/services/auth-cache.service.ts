import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';
import { AuthConfigs, AuthUser } from '../types';

type SetAuthUserCacheProps = {
  user: AuthUser;
};

@Injectable()
export default class AuthCacheService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly _cacheManager: Cache,
    private readonly _config: ConfigService<AuthConfigs, true>,
  ) {}

  getAuthUserCache(id: string) {
    return this._cacheManager.get<AuthUser>(this._buildKey(id));
  }

  setAuthUserCache({ user }: SetAuthUserCacheProps) {
    return this._cacheManager.set(
      this._buildKey(user._id),
      user,
      this._config.get('JWT_EXPIRATION') * 1000,
    );
  }

  removeAuthUserCache(userId: string) {
    return this._cacheManager.del(this._buildKey(userId));
  }

  private _buildKey(id: string) {
    return `auth_user:${id}`;
  }
}
