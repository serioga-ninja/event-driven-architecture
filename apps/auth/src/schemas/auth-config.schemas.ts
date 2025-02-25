import * as Joi from 'joi';
import { AuthConfigs } from '../types';

export const authConfigSchema = Joi.object<AuthConfigs>({
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRATION: Joi.string().required(),
  MONGODB_URI: Joi.string().required(),
  RABBIT_MQ_URI: Joi.string().required(),
  PORT: Joi.string().required(),
});
