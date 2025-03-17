import { Injectable } from '@nestjs/common';
import MongoUsersRepository from '../../../app/src/users/repositories/mongo-users.repository';

@Injectable()
export default class MongoAuthRepository extends MongoUsersRepository {}
