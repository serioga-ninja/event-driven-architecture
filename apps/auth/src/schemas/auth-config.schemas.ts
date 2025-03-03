import { cacheConfigSchema } from '@app/common';
import * as Joi from 'joi';

export const authConfigSchema = Joi.object({
  NODE_ENV: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRATION: Joi.string().required(),
  MONGODB_URI: Joi.string().required(),
  RABBIT_MQ_URI: Joi.string().required(),
  PORT: Joi.string().required(),
}).concat(cacheConfigSchema);
