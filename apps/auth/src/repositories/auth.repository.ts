import { Injectable } from '@nestjs/common';
import UsersRepository from 'apps/users/src/users.repository';

@Injectable()
export default class AuthRepository extends UsersRepository {}
