import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentsUncheckedCreateNestedManyWithoutUserInput } from '../comments/comments-unchecked-create-nested-many-without-user.input';

@InputType()
export class UsersUncheckedCreateWithoutPostsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => Boolean, {nullable:true})
    isTfaEnabled?: boolean;

    @Field(() => String, {nullable:true})
    tfaSecret?: string;

    @Field(() => String, {nullable:false})
    entityStatus!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CommentsUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Comments?: CommentsUncheckedCreateNestedManyWithoutUserInput;
}
