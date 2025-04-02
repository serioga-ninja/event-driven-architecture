import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import EmailsService from './emails.service';
import SendEmailEvent from './events/send-email.event';

@Controller()
export class EmailsController {
  constructor(private readonly emailsService: EmailsService) {}

  @EventPattern(SendEmailEvent.type)
  async handleUserCreated(@Payload() data: SendEmailEvent) {
    await this.emailsService.sendEmail(data);
  }
}
