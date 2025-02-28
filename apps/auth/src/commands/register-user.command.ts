import { Command } from '@nestjs/cqrs';
import type { RegisterUserDto } from '../dtos';

export default class RegisterUserCommand extends Command<{
  id: string;
  email: string;
}> {
  constructor(public readonly createUserRequest: RegisterUserDto) {
    super();
  }
}
