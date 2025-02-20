import { Injectable } from '@nestjs/common';
import type { CreateUserEvent } from '../../users/src/events';

@Injectable()
export class EmailsService {
  handleUserCreated(data: CreateUserEvent) {
    console.log('handleUserCreated - EmailsService', data);
  }
}
