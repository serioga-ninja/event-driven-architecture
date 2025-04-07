import * as Joi from 'joi';
import type { CacheConfig } from '@app/common';
import { cacheConfigSchema } from '@app/common';
import { type AuthModuleConfig, authModuleConfigSchema } from '@app/common';

export type ContentConfig = {
  MONGODB_URI: string;
  PORT: string;
} & AuthModuleConfig &
  CacheConfig;

export const contentConfigSchema = Joi.object<ContentConfig>({
  MONGODB_URI: Joi.string().required(),
  PORT: Joi.number().required(),
})
  .concat(authModuleConfigSchema as any)
  .concat(cacheConfigSchema as any);
