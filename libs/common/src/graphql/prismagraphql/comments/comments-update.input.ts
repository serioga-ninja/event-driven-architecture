import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UsersUpdateOneRequiredWithoutCommentsNestedInput } from '../users/users-update-one-required-without-comments-nested.input';
import { PostsUpdateOneRequiredWithoutCommentsNestedInput } from '../posts/posts-update-one-required-without-comments-nested.input';

@InputType()
export class CommentsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    entityStatus?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UsersUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    user?: UsersUpdateOneRequiredWithoutCommentsNestedInput;

    @Field(() => PostsUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    post?: PostsUpdateOneRequiredWithoutCommentsNestedInput;
}
