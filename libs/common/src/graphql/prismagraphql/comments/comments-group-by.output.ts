import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CommentsCountAggregate } from './comments-count-aggregate.output';
import { CommentsMinAggregate } from './comments-min-aggregate.output';
import { CommentsMaxAggregate } from './comments-max-aggregate.output';

@ObjectType()
export class CommentsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:false})
    entityStatus!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    usersId!: string;

    @Field(() => String, {nullable:false})
    postsId!: string;

    @Field(() => CommentsCountAggregate, {nullable:true})
    _count?: CommentsCountAggregate;

    @Field(() => CommentsMinAggregate, {nullable:true})
    _min?: CommentsMinAggregate;

    @Field(() => CommentsMaxAggregate, {nullable:true})
    _max?: CommentsMaxAggregate;
}
