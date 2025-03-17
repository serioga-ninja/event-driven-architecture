import { EMAILS_SERVICE } from '@app/common';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ClientProxy } from '@nestjs/microservices';
import SendEmailEvent from '../../../emails/src/events/send-email.event';
import { MongoAuthRepository } from '../repositories';
import SendRegistrationEmailCommand from './send-registration-email.command';

@CommandHandler(SendRegistrationEmailCommand)
export default class SendRegistrationEmailHandler
  implements ICommandHandler<SendRegistrationEmailCommand>
{
  constructor(
    @Inject(EMAILS_SERVICE) private readonly _emailsService: ClientProxy,
    private readonly _authRepository: MongoAuthRepository,
  ) {}

  async execute({ id }: SendRegistrationEmailCommand) {
    const user = await this._authRepository.findOneByOrThrow({ _id: id });
    const to = user.email;

    this._emailsService.emit(
      SendEmailEvent.type,
      new SendEmailEvent({
        subject: `Welcome to the app!`,
        html: `<p>Hi ${user.email},</p><p>Thank you for registering!</p>`,
        to,
      }),
    );
  }
}
