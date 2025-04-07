import { Injectable } from '@nestjs/common';
import UsersRepository from '../../../profile/src/users/repositories/users.repository';

@Injectable()
export default class AuthRepository extends UsersRepository {}
