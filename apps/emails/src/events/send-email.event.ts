import type { SendEmailProps } from '../email-providers/email-abstract.provider';
import { AbstractEvent } from '@app/common';

export default class SendEmailEvent extends AbstractEvent {
  public static type = 'emails.send';

  constructor(public readonly payload: SendEmailProps) {
    super();
  }
}
