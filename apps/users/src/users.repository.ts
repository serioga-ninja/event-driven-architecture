import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Users } from './schemas';
import { Connection, Model } from 'mongoose';
import type { CreateUserRequest } from './dtos';

@Injectable()
export default class UsersRepository {
  protected readonly logger = new Logger(UsersRepository.name);

  constructor(
    @InjectModel(Users.name) private readonly usersModel: Model<Users>,
    @InjectConnection() private readonly connection: Connection,
  ) {}

  createUser(createUserRequest: CreateUserRequest) {
    this.logger.log(`Creating user with email: ${createUserRequest.email}`);
    //
    return this.usersModel.create(createUserRequest);
  }
}
