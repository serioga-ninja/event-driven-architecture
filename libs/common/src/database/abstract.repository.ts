import { Logger, NotFoundException } from '@nestjs/common';
import type { AnyKeys, Connection, Model, RootFilterQuery } from 'mongoose';

type FindOneOptions<T> = {
  select?: (keyof T)[];
};

export default abstract class AbstractRepository<Entity> {
  protected readonly logger: Logger;

  constructor(
    protected readonly model: Model<Entity>,
    protected readonly connection: Connection,
  ) {
    this.logger = new Logger(this.constructor.name);
  }

  findOneBy(
    query: RootFilterQuery<Entity>,
    options: FindOneOptions<Entity> = {},
  ) {
    const qb = this.model.findOne(query);

    if (options.select) {
      qb.select(options.select as string[]);
    }

    return qb.exec();
  }

  findOneById(id: string) {
    return this.model.findById(id);
  }

  async findOneByIdOrThrow(id: string) {
    const model = await this.model.findById(id);

    if (!model) {
      throw new NotFoundException('Model not found');
    }

    return model;
  }

  create(data: AnyKeys<Entity>) {
    return this.model.create(data);
  }

  deleteById(id: string) {
    return this.model.findByIdAndDelete(id);
  }

  // async startTransaction() {
  //   const session = await this.connection.startSession();
  //   session.startTransaction();

  //   return session;
  // }
}
