import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PostsOrderByRelationAggregateInput } from '../posts/posts-order-by-relation-aggregate.input';
import { CommentsOrderByRelationAggregateInput } from '../comments/comments-order-by-relation-aggregate.input';

@InputType()
export class UsersOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  email?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  phone?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  firstName?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  lastName?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  isTfaEnabled?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  tfaSecret?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  entityStatus?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  password?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: `${SortOrder}`;

  @Field(() => PostsOrderByRelationAggregateInput, { nullable: true })
  Posts?: PostsOrderByRelationAggregateInput;

  @Field(() => CommentsOrderByRelationAggregateInput, { nullable: true })
  Comments?: CommentsOrderByRelationAggregateInput;
}
