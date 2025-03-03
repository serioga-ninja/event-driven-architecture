import { Command } from '@nestjs/cqrs';

export default class SendRegistrationEmailCommand extends Command<void> {
  constructor(
    public readonly id: string,
    public readonly email: string,
  ) {
    super();
  }
}
