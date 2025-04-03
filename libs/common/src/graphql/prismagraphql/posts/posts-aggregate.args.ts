import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostsWhereInput } from './posts-where.input';
import { Type } from 'class-transformer';
import { PostsOrderByWithRelationInput } from './posts-order-by-with-relation.input';
import { Prisma } from '@app/prisma';
import { PostsWhereUniqueInput } from './posts-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PostsCountAggregateInput } from './posts-count-aggregate.input';
import { PostsMinAggregateInput } from './posts-min-aggregate.input';
import { PostsMaxAggregateInput } from './posts-max-aggregate.input';

@ArgsType()
export class PostsAggregateArgs {
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

  @Field(() => PostsCountAggregateInput, { nullable: true })
  _count?: PostsCountAggregateInput;

  @Field(() => PostsMinAggregateInput, { nullable: true })
  _min?: PostsMinAggregateInput;

  @Field(() => PostsMaxAggregateInput, { nullable: true })
  _max?: PostsMaxAggregateInput;
}
