import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@app/prisma';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { UsersCreateInput } from './users-create.input';
import { UsersUpdateInput } from './users-update.input';

@ArgsType()
export class UpsertOneUsersArgs {
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  @Type(() => UsersWhereUniqueInput)
  where!: Prisma.AtLeast<UsersWhereUniqueInput, 'id' | 'email'>;

  @Field(() => UsersCreateInput, { nullable: false })
  @Type(() => UsersCreateInput)
  create!: UsersCreateInput;

  @Field(() => UsersUpdateInput, { nullable: false })
  @Type(() => UsersUpdateInput)
  update!: UsersUpdateInput;
}
