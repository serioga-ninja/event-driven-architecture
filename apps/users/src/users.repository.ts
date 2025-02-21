import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Users } from './schemas';

@Injectable()
export default class UsersRepository extends AbstractRepository<Users> {
  protected readonly logger = new Logger(UsersRepository.name);

  constructor(
    @InjectModel(Users.name) usersModel: Model<Users>,
    @InjectConnection() connection: Connection,
  ) {
    super(usersModel, connection);
  }
}
