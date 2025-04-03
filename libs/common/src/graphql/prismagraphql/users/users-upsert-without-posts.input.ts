import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersUpdateWithoutPostsInput } from './users-update-without-posts.input';
import { Type } from 'class-transformer';
import { UsersCreateWithoutPostsInput } from './users-create-without-posts.input';
import { UsersWhereInput } from './users-where.input';

@InputType()
export class UsersUpsertWithoutPostsInput {
  @Field(() => UsersUpdateWithoutPostsInput, { nullable: false })
  @Type(() => UsersUpdateWithoutPostsInput)
  update!: UsersUpdateWithoutPostsInput;

  @Field(() => UsersCreateWithoutPostsInput, { nullable: false })
  @Type(() => UsersCreateWithoutPostsInput)
  create!: UsersCreateWithoutPostsInput;

  @Field(() => UsersWhereInput, { nullable: true })
  @Type(() => UsersWhereInput)
  where?: UsersWhereInput;
}
