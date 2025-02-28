import { Command } from '@nestjs/cqrs';
import type { AuthUser } from '../types';

export default class ResetAuthUserCacheCommand extends Command<void> {
  constructor(
    public readonly user: AuthUser,
    public readonly token: string,
  ) {
    super();
  }
}
