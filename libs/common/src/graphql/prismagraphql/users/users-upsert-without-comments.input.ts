import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersUpdateWithoutCommentsInput } from './users-update-without-comments.input';
import { Type } from 'class-transformer';
import { UsersCreateWithoutCommentsInput } from './users-create-without-comments.input';
import { UsersWhereInput } from './users-where.input';

@InputType()
export class UsersUpsertWithoutCommentsInput {
  @Field(() => UsersUpdateWithoutCommentsInput, { nullable: false })
  @Type(() => UsersUpdateWithoutCommentsInput)
  update!: UsersUpdateWithoutCommentsInput;

  @Field(() => UsersCreateWithoutCommentsInput, { nullable: false })
  @Type(() => UsersCreateWithoutCommentsInput)
  create!: UsersCreateWithoutCommentsInput;

  @Field(() => UsersWhereInput, { nullable: true })
  @Type(() => UsersWhereInput)
  where?: UsersWhereInput;
}
