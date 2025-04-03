import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentsWhereInput } from './comments-where.input';
import { Type } from 'class-transformer';
import { CommentsOrderByWithAggregationInput } from './comments-order-by-with-aggregation.input';
import { CommentsScalarFieldEnum } from './comments-scalar-field.enum';
import { CommentsScalarWhereWithAggregatesInput } from './comments-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CommentsCountAggregateInput } from './comments-count-aggregate.input';
import { CommentsMinAggregateInput } from './comments-min-aggregate.input';
import { CommentsMaxAggregateInput } from './comments-max-aggregate.input';

@ArgsType()
export class CommentsGroupByArgs {
  @Field(() => CommentsWhereInput, { nullable: true })
  @Type(() => CommentsWhereInput)
  where?: CommentsWhereInput;

  @Field(() => [CommentsOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<CommentsOrderByWithAggregationInput>;

  @Field(() => [CommentsScalarFieldEnum], { nullable: false })
  by!: Array<`${CommentsScalarFieldEnum}`>;

  @Field(() => CommentsScalarWhereWithAggregatesInput, { nullable: true })
  having?: CommentsScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => CommentsCountAggregateInput, { nullable: true })
  _count?: CommentsCountAggregateInput;

  @Field(() => CommentsMinAggregateInput, { nullable: true })
  _min?: CommentsMinAggregateInput;

  @Field(() => CommentsMaxAggregateInput, { nullable: true })
  _max?: CommentsMaxAggregateInput;
}
