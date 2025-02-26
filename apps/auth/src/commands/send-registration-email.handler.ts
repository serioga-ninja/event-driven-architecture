import { EMAILS_SERVICE } from '@app/common';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from '../../../users/src/events';
import SendRegistrationEmailCommand from './send-registration-email.command';

@CommandHandler(SendRegistrationEmailCommand)
export default class SendRegistrationEmailHandler
  implements ICommandHandler<SendRegistrationEmailCommand>
{
  constructor(
    @Inject(EMAILS_SERVICE) private readonly _emailsService: ClientProxy,
  ) {}

  execute(command: SendRegistrationEmailCommand) {
    this._emailsService.emit(
      CreateUserEvent.type,
      new CreateUserEvent(command.email),
    );

    console.log('Email sent to: ', command.email);

    return Promise.resolve();
  }
}
