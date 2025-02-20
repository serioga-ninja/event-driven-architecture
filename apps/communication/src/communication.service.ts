import { Injectable } from '@nestjs/common';
import type { CreateUserEvent } from '../../users/src/events';

@Injectable()
export class CommunicationService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handleUserCreated - CIMMUNICATIONS', data);
  }
}
