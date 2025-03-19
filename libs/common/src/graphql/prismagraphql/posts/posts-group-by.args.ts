import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostsWhereInput } from './posts-where.input';
import { Type } from 'class-transformer';
import { PostsOrderByWithAggregationInput } from './posts-order-by-with-aggregation.input';
import { PostsScalarFieldEnum } from './posts-scalar-field.enum';
import { PostsScalarWhereWithAggregatesInput } from './posts-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PostsCountAggregateInput } from './posts-count-aggregate.input';
import { PostsMinAggregateInput } from './posts-min-aggregate.input';
import { PostsMaxAggregateInput } from './posts-max-aggregate.input';

@ArgsType()
export class PostsGroupByArgs {

    @Field(() => PostsWhereInput, {nullable:true})
    @Type(() => PostsWhereInput)
    where?: PostsWhereInput;

    @Field(() => [PostsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PostsOrderByWithAggregationInput>;

    @Field(() => [PostsScalarFieldEnum], {nullable:false})
    by!: Array<`${PostsScalarFieldEnum}`>;

    @Field(() => PostsScalarWhereWithAggregatesInput, {nullable:true})
    having?: PostsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PostsCountAggregateInput, {nullable:true})
    _count?: PostsCountAggregateInput;

    @Field(() => PostsMinAggregateInput, {nullable:true})
    _min?: PostsMinAggregateInput;

    @Field(() => PostsMaxAggregateInput, {nullable:true})
    _max?: PostsMaxAggregateInput;
}
