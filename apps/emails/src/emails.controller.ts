import { RmqService } from '@app/common';
import { Controller } from '@nestjs/common';
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
  constructor(
    private readonly emailsService: EmailsService,
    private readonly rmqService: RmqService,
  ) {}

  @EventPattern(SendEmailEvent.type)
  async handleUserCreated(
    @Payload() data: SendEmailEvent,
    @Ctx() context: RmqContext,
  ) {
    await this.emailsService.sendEmail(data);

    this.rmqService.ack(context);
  }
}
