import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Posts } from '../posts/posts.model';
import { Comments } from '../comments/comments.model';
import { UsersCount } from './users-count.output';

@ObjectType()
export class Users {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {defaultValue:'',nullable:false})
    phone!: string;

    @Field(() => String, {defaultValue:'',nullable:false})
    firstName!: string;

    @Field(() => String, {defaultValue:'',nullable:false})
    lastName!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    isTfaEnabled!: boolean;

    @Field(() => String, {defaultValue:'',nullable:true})
    tfaSecret!: string | null;

    @Field(() => String, {nullable:false})
    entityStatus!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Posts], {nullable:true})
    Posts?: Array<Posts>;

    @Field(() => [Comments], {nullable:true})
    Comments?: Array<Comments>;

    @Field(() => UsersCount, {nullable:false})
    _count?: UsersCount;
}
