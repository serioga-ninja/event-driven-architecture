import { Injectable } from '@nestjs/common';
import { PrismaRepository } from '@app/common/database/prisma.repository';
import type { Comments } from '@prisma/client';
import { CreateOptions, EntityStatus, PrismaService } from '@app/common';

@Injectable()
export class CommentsService extends PrismaRepository<Comments> {
  constructor(prisma: PrismaService) {
    super(prisma, 'comments');
  }

  create(data: CreateOptions<Comments>): Promise<Comments> {
    return super.create({
      entityStatus: EntityStatus.ACTIVE,
      ...data,
    });
  }
}
