import { Controller } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  Payload,
  type RmqContext,
} from '@nestjs/microservices';
import { CreateUserEvent } from '../../users/src/events';
import { EmailsService } from './emails.service';

@Controller()
export class EmailsController {
  constructor(private readonly emailsService: EmailsService) {}

  @EventPattern(CreateUserEvent.type)
  handleUserCreated(
    @Payload() data: CreateUserEvent,
    @Ctx() context: RmqContext,
  ) {
    console.log('EmailsController.handleUserCreated', data);
    this.emailsService.handleUserCreated(data);
  }
}
