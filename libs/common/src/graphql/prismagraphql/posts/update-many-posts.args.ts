import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostsUpdateManyMutationInput } from './posts-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PostsWhereInput } from './posts-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPostsArgs {
  @Field(() => PostsUpdateManyMutationInput, { nullable: false })
  @Type(() => PostsUpdateManyMutationInput)
  data!: PostsUpdateManyMutationInput;

  @Field(() => PostsWhereInput, { nullable: true })
  @Type(() => PostsWhereInput)
  where?: PostsWhereInput;

  @Field(() => Int, { nullable: true })
  limit?: number;
}
