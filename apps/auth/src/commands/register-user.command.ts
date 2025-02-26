import { Command } from '@nestjs/cqrs';
import type { Users } from '../../../users/src/mongo-schemas';
import type { RegisterUserDto } from '../dtos';

export default class RegisterUserCommand extends Command<Users> {
  constructor(public readonly createUserRequest: RegisterUserDto) {
    super();
  }
}
