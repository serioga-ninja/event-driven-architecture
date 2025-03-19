import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateNestedOneWithoutPostsInput } from '../users/users-create-nested-one-without-posts.input';

@InputType()
export class PostsCreateWithoutCommentsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:true})
    visibility?: string;

    @Field(() => String, {nullable:false})
    entityStatus!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UsersCreateNestedOneWithoutPostsInput, {nullable:true})
    user?: UsersCreateNestedOneWithoutPostsInput;
}
