import * as Joi from 'joi';
import type { AppConfig } from './app.types';
import { authModuleConfigSchema } from '@app/common';

export const appConfigSchema = Joi.object<AppConfig>({
  MONGODB_URI: Joi.string().required(),
  APP_SECRET: Joi.string().required(),
  RABBIT_MQ_URI: Joi.string().required(),
  PORT: Joi.number().required(),
}).concat(authModuleConfigSchema as any);
