import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PostsCountAggregate } from './posts-count-aggregate.output';
import { PostsMinAggregate } from './posts-min-aggregate.output';
import { PostsMaxAggregate } from './posts-max-aggregate.output';

@ObjectType()
export class AggregatePosts {
  @Field(() => PostsCountAggregate, { nullable: true })
  _count?: PostsCountAggregate;

  @Field(() => PostsMinAggregate, { nullable: true })
  _min?: PostsMinAggregate;

  @Field(() => PostsMaxAggregate, { nullable: true })
  _max?: PostsMaxAggregate;
}
