import type { MessageBrokerConfig } from '@app/common';

export type EmailConfig = {
  MAILGUN_DOMAIN: string;
  MAILGUN_API_KEY: string;
  MAILGUN_EMAIL_FROM: string;
  FALLBACK_RESEND_TIMEOUT_SEC: number;
} & MessageBrokerConfig;
