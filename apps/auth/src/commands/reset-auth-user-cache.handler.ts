import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AuthCacheService } from '../services';
import ResetAuthUserCacheCommand from './reset-auth-user-cache.command';

@CommandHandler(ResetAuthUserCacheCommand)
export default class ResetAuthUserCacheHandler
  implements ICommandHandler<ResetAuthUserCacheCommand>
{
  constructor(private readonly _authCacheService: AuthCacheService) {}

  async execute({ user }: ResetAuthUserCacheCommand) {
    await this._authCacheService.setAuthUserCache({ user });
  }
}
