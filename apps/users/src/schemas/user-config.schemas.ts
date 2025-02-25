import * as Joi from 'joi';
import { UserConfig } from '../types';

export const userConfigSchema = Joi.object<UserConfig>({
  MONGODB_URI: Joi.string().required(),
  RABBIT_MQ_URI: Joi.string().required(),
  PORT: Joi.number().required(),
});
