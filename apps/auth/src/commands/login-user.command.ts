import { Command } from '@nestjs/cqrs';
import type { AuthUser } from '../types';

export default class LoginUserCommand extends Command<{
  token: string;
  expires: Date;
}> {
  constructor(public readonly user: AuthUser) {
    super();
  }
}
