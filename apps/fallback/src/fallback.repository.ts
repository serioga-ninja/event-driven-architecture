import { AbstractRepository } from '@app/common';
import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { FallbackEvents } from './mongo-schemas';

@Injectable()
export default class FallbackRepository extends AbstractRepository<FallbackEvents> {
  constructor(
    @InjectModel(FallbackEvents.name)
    fallbackEventsModel: Model<FallbackEvents>,
    @InjectConnection() connection: Connection,
  ) {
    super(fallbackEventsModel, connection);
  }
}
