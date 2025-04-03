import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CommentsCountAggregate } from './comments-count-aggregate.output';
import { CommentsMinAggregate } from './comments-min-aggregate.output';
import { CommentsMaxAggregate } from './comments-max-aggregate.output';

@ObjectType()
export class AggregateComments {
  @Field(() => CommentsCountAggregate, { nullable: true })
  _count?: CommentsCountAggregate;

  @Field(() => CommentsMinAggregate, { nullable: true })
  _min?: CommentsMinAggregate;

  @Field(() => CommentsMaxAggregate, { nullable: true })
  _max?: CommentsMaxAggregate;
}
