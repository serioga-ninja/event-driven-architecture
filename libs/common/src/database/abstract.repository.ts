/* eslint-disable @typescript-eslint/no-unused-vars */
import type {
  CreateOptions,
  FindManyOptions,
  FindOneOptions,
  FindOptions,
  GetListPagedQuery,
  GetListPagedResult,
  UpdateOptions,
} from '@app/common';
import { Logger, NotImplementedException } from '@nestjs/common';

export default class AbstractRepository<Entity> {
  protected readonly logger = new Logger(this.constructor.name);

  updateOneBy(
    _where: FindOptions<Entity>,
    _data: UpdateOptions<Entity>,
  ): Promise<Entity | null> {
    throw new NotImplementedException('Method not implemented');
  }

  findOneBy(
    _query: FindOptions<Entity>,
    _options: FindOneOptions<Entity>,
  ): Promise<Entity | null> {
    throw new NotImplementedException('Method not implemented');
  }

  findManyBy(
    _query: FindOptions<Entity>,
    _options: FindManyOptions<Entity>,
  ): Promise<Entity[]> {
    throw new NotImplementedException('Method not implemented');
  }

  findManyPaged(
    _query: GetListPagedQuery<Entity>,
  ): Promise<GetListPagedResult<Entity>> {
    throw new NotImplementedException('Method not implemented');
  }

  findOneById(
    _id: string,
    _options: FindOneOptions<Entity> = {},
  ): Promise<Entity | null> {
    throw new NotImplementedException('Method not implemented');
  }

  findOneByOrThrow(
    _query: FindOptions<Entity>,
    options: FindOneOptions<Entity> = {},
  ): Promise<Entity> {
    throw new NotImplementedException('Method not implemented');
  }

  create(_data: CreateOptions<Entity>): Promise<Entity> {
    throw new NotImplementedException('Method not implemented');
  }

  deleteById(_id: string): Promise<string> {
    throw new NotImplementedException('Method not implemented');
  }
}
