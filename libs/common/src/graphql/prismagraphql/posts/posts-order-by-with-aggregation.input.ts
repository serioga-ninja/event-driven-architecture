import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PostsCountOrderByAggregateInput } from './posts-count-order-by-aggregate.input';
import { PostsMaxOrderByAggregateInput } from './posts-max-order-by-aggregate.input';
import { PostsMinOrderByAggregateInput } from './posts-min-order-by-aggregate.input';

@InputType()
export class PostsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    visibility?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    entityStatus?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    usersId?: SortOrderInput;

    @Field(() => PostsCountOrderByAggregateInput, {nullable:true})
    _count?: PostsCountOrderByAggregateInput;

    @Field(() => PostsMaxOrderByAggregateInput, {nullable:true})
    _max?: PostsMaxOrderByAggregateInput;

    @Field(() => PostsMinOrderByAggregateInput, {nullable:true})
    _min?: PostsMinOrderByAggregateInput;
}
