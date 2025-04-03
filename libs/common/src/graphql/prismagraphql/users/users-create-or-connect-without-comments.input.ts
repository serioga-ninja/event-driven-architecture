import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@app/prisma';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { UsersCreateWithoutCommentsInput } from './users-create-without-comments.input';

@InputType()
export class UsersCreateOrConnectWithoutCommentsInput {
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  @Type(() => UsersWhereUniqueInput)
  where!: Prisma.AtLeast<UsersWhereUniqueInput, 'id' | 'email'>;

  @Field(() => UsersCreateWithoutCommentsInput, { nullable: false })
  @Type(() => UsersCreateWithoutCommentsInput)
  create!: UsersCreateWithoutCommentsInput;
}
