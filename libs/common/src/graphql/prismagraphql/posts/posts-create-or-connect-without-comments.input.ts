import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@app/prisma';
import { PostsWhereUniqueInput } from './posts-where-unique.input';
import { Type } from 'class-transformer';
import { PostsCreateWithoutCommentsInput } from './posts-create-without-comments.input';

@InputType()
export class PostsCreateOrConnectWithoutCommentsInput {
  @Field(() => PostsWhereUniqueInput, { nullable: false })
  @Type(() => PostsWhereUniqueInput)
  where!: Prisma.AtLeast<PostsWhereUniqueInput, 'id'>;

  @Field(() => PostsCreateWithoutCommentsInput, { nullable: false })
  @Type(() => PostsCreateWithoutCommentsInput)
  create!: PostsCreateWithoutCommentsInput;
}
