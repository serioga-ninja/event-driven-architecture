import {
  AbstractRepository,
  FindOptions,
  PrismaService,
  UpdateOptions,
} from '@app/common';
import type { Posts } from '@app/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class PostsRepository extends AbstractRepository<Posts> {
  constructor(private readonly _prisma: PrismaService) {
    super();
  }

  updateOneBy(
    where: FindOptions<Posts>,
    data: UpdateOptions<Posts>,
  ): Promise<Posts | null> {
    return this._prisma.posts.update({
      where,
      data,
    });
  }

  findOneBy(where: FindOptions<Posts>): Promise<Posts | null> {
    return this._prisma.posts.findFirst({
      where,
    });
  }

  findManyBy(where: FindOptions<Posts>): Promise<Posts[]> {
    return this._prisma.posts.findMany({
      where,
    });
  }

  findOneById(id: string): Promise<Posts | null> {
    return this.findOneBy({ id });
  }

  findOneByOrThrow(where: FindOptions<Posts>): Promise<Posts> {
    return this._prisma.posts.findFirstOrThrow({
      where,
    });
  }

  create(data: Posts): Promise<Posts> {
    return this._prisma.posts.create({
      data,
    });
  }

  async deleteById(id: string): Promise<string> {
    await this._prisma.posts.delete({
      where: { id },
    });

    return id;
  }
}
