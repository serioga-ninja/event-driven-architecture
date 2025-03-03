import type { SendEmailProps } from '../email-providers/email-abstract.provider';

export default class SendEmailEvent {
  public static type = 'send-email';

  constructor(public readonly payload: SendEmailProps) {}
}
