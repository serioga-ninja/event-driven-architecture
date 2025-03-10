import * as Joi from 'joi';
import type { UserConfig } from './users/types';

export const appConfigSchema = Joi.object<UserConfig>({
  MONGODB_URI: Joi.string().required(),
  RABBIT_MQ_URI: Joi.string().required(),
  PORT: Joi.number().required(),
});
