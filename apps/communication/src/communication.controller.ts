import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { CreateUserEvent } from '../../users/src/events';
import { CommunicationService } from './communication.service';

@Controller()
export class CommunicationController {
  constructor(private readonly communicationService: CommunicationService) {}

  @EventPattern(CreateUserEvent.type)
  handleUserCreated(data: CreateUserEvent) {
    this.communicationService.handleUserCreated(data);
  }
}
