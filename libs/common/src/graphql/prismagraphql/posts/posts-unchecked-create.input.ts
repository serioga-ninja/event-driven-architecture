import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentsUncheckedCreateNestedManyWithoutPostInput } from '../comments/comments-unchecked-create-nested-many-without-post.input';

@InputType()
export class PostsUncheckedCreateInput {

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

    @Field(() => String, {nullable:true})
    usersId?: string;

    @Field(() => CommentsUncheckedCreateNestedManyWithoutPostInput, {nullable:true})
    Comments?: CommentsUncheckedCreateNestedManyWithoutPostInput;
}
