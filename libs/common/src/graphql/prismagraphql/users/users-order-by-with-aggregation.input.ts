import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UsersCountOrderByAggregateInput } from './users-count-order-by-aggregate.input';
import { UsersMaxOrderByAggregateInput } from './users-max-order-by-aggregate.input';
import { UsersMinOrderByAggregateInput } from './users-min-order-by-aggregate.input';

@InputType()
export class UsersOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    phone?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    firstName?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    lastName?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isTfaEnabled?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    tfaSecret?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    entityStatus?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => UsersCountOrderByAggregateInput, {nullable:true})
    _count?: UsersCountOrderByAggregateInput;

    @Field(() => UsersMaxOrderByAggregateInput, {nullable:true})
    _max?: UsersMaxOrderByAggregateInput;

    @Field(() => UsersMinOrderByAggregateInput, {nullable:true})
    _min?: UsersMinOrderByAggregateInput;
}
