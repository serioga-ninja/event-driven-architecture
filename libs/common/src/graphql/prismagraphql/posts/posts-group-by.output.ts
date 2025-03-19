import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PostsCountAggregate } from './posts-count-aggregate.output';
import { PostsMinAggregate } from './posts-min-aggregate.output';
import { PostsMaxAggregate } from './posts-max-aggregate.output';

@ObjectType()
export class PostsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:false})
    visibility!: string;

    @Field(() => String, {nullable:false})
    entityStatus!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    usersId?: string;

    @Field(() => PostsCountAggregate, {nullable:true})
    _count?: PostsCountAggregate;

    @Field(() => PostsMinAggregate, {nullable:true})
    _min?: PostsMinAggregate;

    @Field(() => PostsMaxAggregate, {nullable:true})
    _max?: PostsMaxAggregate;
}
