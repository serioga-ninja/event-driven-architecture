import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Users } from '../users/users.model';
import { Posts } from '../posts/posts.model';

@ObjectType()
export class Comments {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:false})
    entityStatus!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    usersId!: string;

    @Field(() => String, {nullable:false})
    postsId!: string;

    @Field(() => Users, {nullable:false})
    user?: Users;

    @Field(() => Posts, {nullable:false})
    post?: Posts;
}
