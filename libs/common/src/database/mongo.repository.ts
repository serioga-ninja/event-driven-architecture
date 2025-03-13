import { NotFoundException } from '@nestjs/common';
import type { Connection, Model } from 'mongoose';
import type {
  CreateOptions,
  FindManyOptions,
  FindOneOptions,
  FindOptions,
  GetListPagedQuery,
  GetListPagedResult,
  UpdateOptions,
} from './types';
import AbstractRepository from './abstract.repository';

export default abstract class MongoRepository<
  Entity extends { _id: string },
> extends AbstractRepository<Entity> {
  constructor(
    protected readonly model: Model<Entity>,
    protected readonly connection: Connection,
  ) {
    super();
  }

  async updateOneBy(where: FindOptions<Entity>, data: UpdateOptions<Entity>) {
    await this.model.updateOne(where, data);

    return this.model.findOne(where);
  }

  findOneBy(query: FindOptions<Entity>, options: FindOneOptions<Entity> = {}) {
    const qb = this.model.findOne(query);

    if (options.select) {
      qb.select(options.select as string[]);
    }

    return qb.exec();
  }

  findManyBy(
    query: FindOptions<Entity>,
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

  findOneById(id: string, options: FindOneOptions<Entity> = {}) {
    return this.findOneBy({ _id: id } as FindOptions<Entity>, options);
  }

  async findOneByOrThrow(query: FindOptions<Entity>) {
    const model = await this.model.findOne(query);

    if (!model) {
      throw new NotFoundException('Model not found');
    }

    return model;
  }

  create(data: CreateOptions<Entity>) {
    return this.model.create(data);
  }

  async deleteById(id: string) {
    await this.model.findByIdAndDelete(id);

    return id;
  }

  async findManyPaged(
    query: GetListPagedQuery<Entity>,
  ): Promise<GetListPagedResult<Entity>> {
    const { select, filter, limit, page, orderBy } = query;

    const qb = this.model.find();

    if (select) {
      qb.select(select);
    }

    if (filter) {
      qb.find(filter);
    }

    if (limit) {
      qb.limit(limit);
    }

    if (page) {
      qb.skip((page - 1) * limit);
    }

    if (orderBy) {
      qb.sort({
        [orderBy.type]: orderBy.asc,
      });
    }

    const [totalCount, items] = await Promise.all([
      this.model.countDocuments(filter),
      qb.exec(),
    ]);

    return {
      totalCount,
      items,
    };
  }
}
