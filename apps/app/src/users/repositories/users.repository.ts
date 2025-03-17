import {
  AbstractRepository,
  FindOptions,
  PrismaService,
  UpdateOptions,
} from '@app/common';
import type { Users } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class UsersRepository extends AbstractRepository<Users> {
  constructor(private readonly _prisma: PrismaService) {
    super();
  }

  async isEmailUnique(email: string): Promise<boolean> {
    return !(await this._prisma.users.findFirst({
      where: { email },
    }));
  }

  updateOneBy(
    where: FindOptions<Users>,
    data: UpdateOptions<Users>,
  ): Promise<Users | null> {
    return this._prisma.users.update({
      where,
      data,
    });
  }

  findOneBy(where: FindOptions<Users>): Promise<Users | null> {
    return this._prisma.users.findFirst({
      where,
    });
  }

  findManyBy(where: FindOptions<Users>): Promise<Users[]> {
    return this._prisma.users.findMany({
      where,
    });
  }

  findOneById(id: string): Promise<Users | null> {
    return this.findOneBy({ id });
  }

  findOneByOrThrow(where: FindOptions<Users>): Promise<Users> {
    return this._prisma.users.findFirstOrThrow({
      where,
    });
  }

  create(data: Users): Promise<Users> {
    return this._prisma.users.create({
      data,
    });
  }

  async deleteById(id: string): Promise<string> {
    await this._prisma.users.delete({
      where: { id },
    });

    return id;
  }
}
