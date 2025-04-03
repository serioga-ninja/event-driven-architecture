import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostsWhereInput } from './posts-where.input';
import { Type } from 'class-transformer';
import { PostsOrderByWithRelationInput } from './posts-order-by-with-relation.input';
import { Prisma } from '@app/prisma';
import { PostsWhereUniqueInput } from './posts-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PostsScalarFieldEnum } from './posts-scalar-field.enum';

@ArgsType()
export class FindFirstPostsArgs {
  @Field(() => PostsWhereInput, { nullable: true })
  @Type(() => PostsWhereInput)
  where?: PostsWhereInput;

  @Field(() => [PostsOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<PostsOrderByWithRelationInput>;

  @Field(() => PostsWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<PostsWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [PostsScalarFieldEnum], { nullable: true })
  distinct?: Array<`${PostsScalarFieldEnum}`>;
}
