import { Injectable, Logger } from '@nestjs/common';
import type { CreateUserEvent } from '../../users/src/events';

@Injectable()
export class EmailsService {
  private readonly logger = new Logger(EmailsService.name);

  handleUserCreated(data: CreateUserEvent) {
    this.logger.log(`User created: ${data.email}`);
  }
}
