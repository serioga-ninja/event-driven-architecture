import * as Joi from 'joi';
import type { EmailConfig } from './types';
import { messageBrokerConfigSchema } from '@app/common';

export const emailsConfigSchema = Joi.object<EmailConfig>({
  MAILGUN_API_KEY: Joi.string().required(),
  MAILGUN_DOMAIN: Joi.string().required(),
  MAILGUN_EMAIL_FROM: Joi.string().required(),
  FALLBACK_RESEND_TIMEOUT_SEC: Joi.number().required(),
}).concat(messageBrokerConfigSchema as any);
