import { CacheConfig } from '@app/common';
import KeyvRedis from '@keyv/redis';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Keyv from 'keyv';

@Module({
  imports: [
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: (configService: ConfigService<CacheConfig, true>) => {
        return {
          stores: [
            new Keyv({
              ttl: configService.get('CACHE_TTL') || 30,
              store: new KeyvRedis(configService.getOrThrow('CACHE_REDIS_URL')),
            }),
          ],
        };
      },
      inject: [ConfigService],
    }),
  ],
  exports: [CacheModule],
})
export default class ProjectCacheModule {}
