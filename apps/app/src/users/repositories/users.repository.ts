import { PrismaService } from '@app/common';
import type { Users } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import { PrismaRepository } from '@app/common/database/prisma.repository';

@Injectable()
export default class UsersRepository extends PrismaRepository<Users> {
  constructor(prisma: PrismaService) {
    super(prisma, 'users');
  }

  async isEmailUnique(email: string): Promise<boolean> {
    const count = await this.prisma.users.count({
      where: { email },
    });

    return count === 0;
  }
}
