import { Logger, NotFoundException } from '@nestjs/common';
import type {
  AnyKeys,
  Connection,
  Model,
  RootFilterQuery,
  UpdateQuery,
} from 'mongoose';

type FindOneOptions<T> = {
  select?: (keyof T)[];
};

type FindManyOptions<T> = {
  select?: (keyof T)[];
  limit?: number;
};

export default abstract class AbstractRepository<Entity> {
  protected readonly logger: Logger;

  constructor(
    protected readonly model: Model<Entity>,
    protected readonly connection: Connection,
  ) {
    this.logger = new Logger(this.constructor.name);
  }

  updateOneBy(where: UpdateQuery<Entity>, data: AnyKeys<Entity>) {
    return this.model.updateOne(where, data);
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

  findManyBy(
    query: RootFilterQuery<Entity>,
    options: FindManyOptions<Entity> = {},
  ) {
    const qb = this.model.find(query);

    if (options.select) {
      qb.select(options.select as string[]);
    }

    if (options.limit) {
      qb.limit(options.limit);
    }

    return qb.exec();
  }

  findOneById(id: string) {
    return this.model.findById(id);
  }

  async findOneByOrThrow(query: RootFilterQuery<Entity>) {
    const model = await this.model.findOne(query);

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
