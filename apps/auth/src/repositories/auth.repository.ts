import { Injectable } from '@nestjs/common';
import UsersRepository from '../../../app/src/users/users.repository';

@Injectable()
export default class AuthRepository extends UsersRepository {}
