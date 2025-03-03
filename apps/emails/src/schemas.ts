import * as Joi from 'joi';
import type { EmailConfig } from './types';

export const emailsConfigSchema = Joi.object<EmailConfig>({
  MAILGUN_API_KEY: Joi.string().required(),
  MAILGUN_DOMAIN: Joi.string().required(),
  MAILGUN_EMAIL_FROM: Joi.string().required(),
});
