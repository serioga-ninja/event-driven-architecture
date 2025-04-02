import { Command, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { EMAILS_SERVICE } from '@app/common';
import { ClientProxy } from '@nestjs/microservices';
import { AuthRepository } from '../repositories';
import SendEmailEvent from '../../../emails/src/events/send-email.event';

export class SendRegistrationEmailCommand extends Command<void> {
  constructor(
    public readonly id: string,
    public readonly email: string,
  ) {
    super();
  }
}

@CommandHandler(SendRegistrationEmailCommand)
export class SendRegistrationEmailHandler
  implements ICommandHandler<SendRegistrationEmailCommand>
{
  constructor(
    @Inject(EMAILS_SERVICE) private readonly _emailsService: ClientProxy,
    private readonly _authRepository: AuthRepository,
  ) {}

  async execute({ id }: SendRegistrationEmailCommand) {
    const user = await this._authRepository.findOneByOrThrow({ id });
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
