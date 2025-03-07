import { EMAILS_QUEUE, FALLBACK_SERVICE } from '@app/common';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';
import FallbackEvent from '../../fallback/src/events/fallback.event';
import MailgunEmailProvider from './email-providers/mailgun-email.provider';
import { SendEmailEvent } from './events';
import { EmailConfig } from './types';

@Injectable()
export default class EmailsService {
  private readonly _logger = new Logger(EmailsService.name);

  constructor(
    private readonly _configService: ConfigService<EmailConfig, true>,
    private readonly _mailgunEmailProvider: MailgunEmailProvider,
    @Inject(FALLBACK_SERVICE) private readonly _fallbackService: ClientProxy,
  ) {}

  async sendEmail(event: SendEmailEvent) {
    try {
      await this._mailgunEmailProvider.sendEmail(event.payload);
    } catch (e) {
      this._logger.error(e);

      this._fallbackService.emit(
        FallbackEvent.type,
        new FallbackEvent({
          queue: EMAILS_QUEUE,
          data: event,
          retryInSec: this._configService.get('FALLBACK_RESEND_TIMEOUT_SEC'),
          eventType: SendEmailEvent.type,
        }),
      );
    }
  }
}
