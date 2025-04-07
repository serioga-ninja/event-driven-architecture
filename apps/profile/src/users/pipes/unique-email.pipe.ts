import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import UsersRepository from '../repositories/users.repository';

@ValidatorConstraint({ async: true })
@Injectable()
export default class IsEmailUnique implements ValidatorConstraintInterface {
  constructor(private readonly _usersRepository: UsersRepository) {}

  validate(email: string): Promise<boolean> {
    return this._usersRepository.isEmailUnique(email);
  }

  defaultMessage(): string {
    return 'Email $value is already taken';
  }
}
