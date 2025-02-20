import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { CreateUserEvent } from '../../users/src/events';
import { EmailsService } from './emails.service';

@Controller()
export class EmailsController {
  constructor(private readonly emailsService: EmailsService) {}

  @EventPattern(CreateUserEvent.type)
  handleUserCreated(data: CreateUserEvent) {
    this.emailsService.handleUserCreated(data);
  }
}
