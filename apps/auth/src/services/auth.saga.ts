import { Injectable } from '@nestjs/common';
import { ofType, Saga } from '@nestjs/cqrs';
import { mergeMap, Observable, of } from 'rxjs';
import { SendRegistrationEmailCommand } from '../commands';
import ResetAuthUserCacheCommand from '../commands/reset-auth-user-cache.command';
import { UserLoggedInEvent, UserRegisteredEvent } from '../events';

@Injectable()
export default class AuthSaga {
  @Saga()
  userRegistered = (events$: Observable<any>) => {
    return events$.pipe(
      ofType(UserRegisteredEvent),
      mergeMap((event) =>
        of(new SendRegistrationEmailCommand(event.id, event.email)),
      ),
    );
  };

  @Saga()
  userLoggedIn = (events$: Observable<any>) => {
    return events$.pipe(
      ofType(UserLoggedInEvent),
      mergeMap((event) =>
        of(new ResetAuthUserCacheCommand(event.user, event.token)),
      ),
    );
  };
}
