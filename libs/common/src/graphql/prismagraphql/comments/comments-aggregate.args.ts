import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentsWhereInput } from './comments-where.input';
import { Type } from 'class-transformer';
import { CommentsOrderByWithRelationInput } from './comments-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CommentsWhereUniqueInput } from './comments-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CommentsCountAggregateInput } from './comments-count-aggregate.input';
import { CommentsMinAggregateInput } from './comments-min-aggregate.input';
import { CommentsMaxAggregateInput } from './comments-max-aggregate.input';

@ArgsType()
export class CommentsAggregateArgs {

    @Field(() => CommentsWhereInput, {nullable:true})
    @Type(() => CommentsWhereInput)
    where?: CommentsWhereInput;

    @Field(() => [CommentsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommentsOrderByWithRelationInput>;

    @Field(() => CommentsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommentsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CommentsCountAggregateInput, {nullable:true})
    _count?: CommentsCountAggregateInput;

    @Field(() => CommentsMinAggregateInput, {nullable:true})
    _min?: CommentsMinAggregateInput;

    @Field(() => CommentsMaxAggregateInput, {nullable:true})
    _max?: CommentsMaxAggregateInput;
}
