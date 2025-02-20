import { Controller, Get } from '@nestjs/common';
import { CommunicationService } from './communication.service';
import { EventPattern } from '@nestjs/microservices';
import { CreateUserEvent } from '../../api/src/events';

@Controller()
export class CommunicationController {
  constructor(private readonly communicationService: CommunicationService) {}

  @Get()
  getHello(): string {
    return this.communicationService.getHello();
  }

  @EventPattern(CreateUserEvent.type)
  handleUserCreated(data: CreateUserEvent) {
    this.communicationService.handleUserCreated(data);
  }
}
