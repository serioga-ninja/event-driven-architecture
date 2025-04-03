import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostsUpdateInput } from './posts-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@app/prisma';
import { PostsWhereUniqueInput } from './posts-where-unique.input';

@ArgsType()
export class UpdateOnePostsArgs {
  @Field(() => PostsUpdateInput, { nullable: false })
  @Type(() => PostsUpdateInput)
  data!: PostsUpdateInput;

  @Field(() => PostsWhereUniqueInput, { nullable: false })
  @Type(() => PostsWhereUniqueInput)
  where!: Prisma.AtLeast<PostsWhereUniqueInput, 'id'>;
}
