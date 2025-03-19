/* eslint-disable @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import PrismaService from './prisma.service';
import {
  AbstractRepository,
  type CreateOptions,
  type FindManyOptions,
  type FindOneOptions,
  FindOptions,
  UpdateOptions,
} from '@app/common';

@Injectable()
export class PrismaRepository<T> extends AbstractRepository<T> {
  protected get delegate() {
    return this.prisma[this._modelName];
  }

  constructor(
    protected prisma: PrismaService,
    private _modelName: string,
  ) {
    super();
  }

  updateOneBy(
    where: FindOptions<T>,
    data: UpdateOptions<T>,
  ): Promise<T | null> {
    return this.delegate.update({
      where,
      data,
    });
  }

  findOneBy(
    where: FindOptions<T>,
    options: FindOneOptions<T> = {},
  ): Promise<T | null> {
    return this.delegate.findFirst({
      where,
      select: options.select,
    });
  }

  findManyBy(
    where: FindOptions<T>,
    options: FindManyOptions<T> = {},
  ): Promise<T[]> {
    return this.delegate.findMany({
      where,
      select: options.select,
    });
  }

  findOneById(id: string, options: FindOneOptions<T> = {}): Promise<T | null> {
    return this.findOneBy({ id }, options);
  }

  findOneByOrThrow(
    where: FindOptions<T>,
    options: FindOneOptions<T> = {},
  ): Promise<T> {
    return this.delegate.findFirstOrThrow({
      where,
      select: options.select,
    });
  }

  create(data: CreateOptions<T>): Promise<T> {
    return this.delegate.create({
      data,
    });
  }

  async deleteById(id: string): Promise<string> {
    await this.delegate.delete({
      where: { id },
    });

    return id;
  }
}
