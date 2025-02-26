import { Injectable } from '@nestjs/common';
import { ofType, Saga } from '@nestjs/cqrs';
import { mergeMap, Observable, of } from 'rxjs';
import { SendRegistrationEmailCommand } from '../commands';
import { UserRegisteredEvent } from '../events';

@Injectable()
export default class AuthSaga {
  @Saga()
  userRegistered = (events$: Observable<any>) => {
    return events$.pipe(
      ofType(UserRegisteredEvent),
      mergeMap((event) => of(new SendRegistrationEmailCommand(event.email))),
    );
  };
}
