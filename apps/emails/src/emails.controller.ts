import { RmqService } from '@app/common';
import { Controller, Logger } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  Payload,
  type RmqContext,
} from '@nestjs/microservices';
import EmailsService from './emails.service';
import SendEmailEvent from './events/send-email.event';

@Controller()
export class EmailsController {
  private _logger = new Logger(EmailsController.name);

  constructor(
    private readonly emailsService: EmailsService,
    private readonly rmqService: RmqService,
  ) {}

  @EventPattern(SendEmailEvent.type)
  async handleUserCreated(
    @Payload() data: SendEmailEvent,
    @Ctx() context: RmqContext,
  ) {
    this._logger.log('EmailsController.handleUserCreated', data);
    await this.emailsService.sendEmail(data.payload);
    this.rmqService.ack(context);
  }
}
