import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import MongoUsersRepository from '../repositories/mongo-users.repository';

@ValidatorConstraint({ async: true })
@Injectable()
export default class IsEmailUnique implements ValidatorConstraintInterface {
  constructor(private readonly _usersRepository: MongoUsersRepository) {}

  validate(email: string): Promise<boolean> {
    return this._usersRepository.isEmailUnique(email);
  }

  defaultMessage(): string {
    return 'Email $value is already taken';
  }
}
