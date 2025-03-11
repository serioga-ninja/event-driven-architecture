import { AbstractRepository } from '@app/common';
import { Posts } from './mongo-schemas';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class PostsRepository extends AbstractRepository<Posts> {
  constructor(
    @InjectModel(Posts.name) model: Model<Posts>,
    @InjectConnection() connection: Connection,
  ) {
    super(model, connection);
  }
}
