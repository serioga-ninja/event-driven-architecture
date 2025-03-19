import { Injectable } from '@nestjs/common';
import {
  type CreateOptions,
  EntityStatus,
  type FindManyOptions,
  FindOptions,
  PrismaService,
  VisibilityLevels,
} from '@app/common';
import { PrismaRepository } from '@app/common/database/prisma.repository';
import { Posts } from '@prisma/client';

@Injectable()
export class PostsService extends PrismaRepository<Posts> {
  constructor(prisma: PrismaService) {
    super(prisma, 'posts');
  }

  create(data: CreateOptions<Posts>) {
    return super.create({
      usersId: data.usersId,
      content: data.content,
      entityStatus: EntityStatus.DRAFT,
      visibility: VisibilityLevels.PRIVATE,
    });
  }

  async findManyBy(
    where: FindOptions<Posts> = {},
    options: FindManyOptions<Posts> = {},
  ) {
    return super.findManyBy(
      {
        entityStatus: EntityStatus.ACTIVE,
        visibility: VisibilityLevels.PUBLIC,
        ...where,
      },
      options,
    );
  }
}
