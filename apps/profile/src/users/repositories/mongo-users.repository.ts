import { MongoRepository } from '@app/common';
import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Users } from '../mongo-schemas';

@Injectable()
export default class MongoUsersRepository extends MongoRepository<Users> {
  constructor(
    @InjectModel(Users.name) usersModel: Model<Users>,
    @InjectConnection() connection: Connection,
  ) {
    super(usersModel, connection);
  }

  async isEmailUnique(email: string) {
    const user = await this.findOneBy({ email }, { select: { id: true } });

    return !user;
  }
}
