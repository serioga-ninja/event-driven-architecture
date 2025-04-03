import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UsersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { CommentsOrderByRelationAggregateInput } from '../comments/comments-order-by-relation-aggregate.input';

@InputType()
export class PostsOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  content?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  visibility?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  entityStatus?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  usersId?: SortOrderInput;

  @Field(() => UsersOrderByWithRelationInput, { nullable: true })
  user?: UsersOrderByWithRelationInput;

  @Field(() => CommentsOrderByRelationAggregateInput, { nullable: true })
  Comments?: CommentsOrderByRelationAggregateInput;
}
