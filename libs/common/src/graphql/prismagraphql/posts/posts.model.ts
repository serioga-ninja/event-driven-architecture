import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Users } from '../users/users.model';
import { Comments } from '../comments/comments.model';
import { PostsCount } from './posts-count.output';

@ObjectType()
export class Posts {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {defaultValue:'public',nullable:false})
    visibility!: string;

    @Field(() => String, {nullable:false})
    entityStatus!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    usersId!: string | null;

    @Field(() => Users, {nullable:true})
    user?: Users | null;

    @Field(() => [Comments], {nullable:true})
    Comments?: Array<Comments>;

    @Field(() => PostsCount, {nullable:false})
    _count?: PostsCount;
}
