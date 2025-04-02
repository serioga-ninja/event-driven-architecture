import { Command, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import type { AuthUser } from '../types';
import { AuthCacheService } from '../services';

export class ResetAuthUserCacheCommand extends Command<void> {
  constructor(public readonly user: AuthUser) {
    super();
  }
}

@CommandHandler(ResetAuthUserCacheCommand)
export class ResetAuthUserCacheHandler
  implements ICommandHandler<ResetAuthUserCacheCommand>
{
  constructor(private readonly _authCacheService: AuthCacheService) {}

  async execute({ user }: ResetAuthUserCacheCommand) {
    await this._authCacheService.setAuthUserCache({ user });
  }
}
