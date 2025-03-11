import * as Joi from 'joi';
import type { CacheConfig } from '@app/common';
import { cacheConfigSchema } from '@app/common';
import { type AuthModuleConfig, authModuleConfigSchema } from '@app/common';

export type ContentConfig = {
  MONGODB_URI: string;
  RABBIT_MQ_URI: string;
  PORT: string;
  APP_SECRET: string;
} & AuthModuleConfig &
  CacheConfig;

export const contentConfigSchema = Joi.object<ContentConfig>({
  MONGODB_URI: Joi.string().required(),
  RABBIT_MQ_URI: Joi.string().required(),
  PORT: Joi.number().required(),
  APP_SECRET: Joi.string().required(),
})
  .concat(authModuleConfigSchema as any)
  .concat(cacheConfigSchema as any);
