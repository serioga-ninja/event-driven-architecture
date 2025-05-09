import * as Joi from 'joi';
import type { AppConfig } from './app.types';
import { authModuleConfigSchema } from '@app/common';

export const appConfigSchema = Joi.object<AppConfig>({
  MONGODB_URI: Joi.string().required(),
  TWO_FA_SECRET: Joi.string().required(),
  PORT: Joi.number().required(),
}).concat(authModuleConfigSchema as any);
