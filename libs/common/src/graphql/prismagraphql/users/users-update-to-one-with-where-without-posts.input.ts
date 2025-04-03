import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWhereInput } from './users-where.input';
import { Type } from 'class-transformer';
import { UsersUpdateWithoutPostsInput } from './users-update-without-posts.input';

@InputType()
export class UsersUpdateToOneWithWhereWithoutPostsInput {
  @Field(() => UsersWhereInput, { nullable: true })
  @Type(() => UsersWhereInput)
  where?: UsersWhereInput;

  @Field(() => UsersUpdateWithoutPostsInput, { nullable: false })
  @Type(() => UsersUpdateWithoutPostsInput)
  data!: UsersUpdateWithoutPostsInput;
}
