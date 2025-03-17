import {
  AbstractRepository,
  FindOptions,
  PrismaService,
  UpdateOptions,
} from '@app/common';
import { type Comments } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class CommentsRepository extends AbstractRepository<Comments> {
  constructor(private readonly _prisma: PrismaService) {
    super();
  }

  updateOneBy(
    where: FindOptions<Comments>,
    data: UpdateOptions<Comments>,
  ): Promise<Comments | null> {
    return this._prisma.comments.update({
      where,
      data,
    });
  }

  findOneBy(where: FindOptions<Comments>): Promise<Comments | null> {
    return this._prisma.comments.findFirst({
      where,
    });
  }

  findManyBy(where: FindOptions<Comments>): Promise<Comments[]> {
    return this._prisma.comments.findMany({
      where,
    });
  }

  findOneById(id: string): Promise<Comments | null> {
    return this.findOneBy({ id });
  }

  findOneByOrThrow(where: FindOptions<Comments>): Promise<Comments> {
    return this._prisma.comments.findFirstOrThrow({
      where,
    });
  }

  create(data: Comments): Promise<Comments> {
    return this._prisma.comments.create({
      data,
    });
  }

  async deleteById(id: string): Promise<string> {
    await this._prisma.comments.delete({
      where: { id },
    });

    return id;
  }
}
