import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CommentsCountOrderByAggregateInput } from './comments-count-order-by-aggregate.input';
import { CommentsMaxOrderByAggregateInput } from './comments-max-order-by-aggregate.input';
import { CommentsMinOrderByAggregateInput } from './comments-min-order-by-aggregate.input';

@InputType()
export class CommentsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  content?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  entityStatus?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  usersId?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  postsId?: `${SortOrder}`;

  @Field(() => CommentsCountOrderByAggregateInput, { nullable: true })
  _count?: CommentsCountOrderByAggregateInput;

  @Field(() => CommentsMaxOrderByAggregateInput, { nullable: true })
  _max?: CommentsMaxOrderByAggregateInput;

  @Field(() => CommentsMinOrderByAggregateInput, { nullable: true })
  _min?: CommentsMinOrderByAggregateInput;
}
