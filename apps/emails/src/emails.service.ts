import { Injectable } from '@nestjs/common';
import { SendEmailProps } from './email-providers/email-abstract.provider';
import MailgunEmailProvider from './email-providers/mailgun-email.provider';

@Injectable()
export default class EmailsService {
  constructor(private readonly _mailgunEmailProvider: MailgunEmailProvider) {}

  sendEmail(params: SendEmailProps) {
    return this._mailgunEmailProvider.sendEmail(params);
  }
}
