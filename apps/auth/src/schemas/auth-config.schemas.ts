import { cacheConfigSchema, messageBrokerConfigSchema } from '@app/common';
import * as Joi from 'joi';
import type { AuthConfigs } from '../types';

export const authConfigSchema = Joi.object<AuthConfigs>({
  NODE_ENV: Joi.string().required(),
  GRPC_URI: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRATION_SEC: Joi.string().required(),
  MONGODB_URI: Joi.string().required(),
  PORT: Joi.string().required(),
})
  .concat(cacheConfigSchema as any)
  .concat(messageBrokerConfigSchema as any);
