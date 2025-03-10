import * as Joi from 'joi';
import type { AuthModuleConfig } from '@app/common';

export const authModuleConfigSchema = Joi.object<AuthModuleConfig>({
  AUTH_SERVER_URI: Joi.string().required(),
  AUTH_TRANSPORT: Joi.string().optional().allow('grpc', 'rmq'),
});
