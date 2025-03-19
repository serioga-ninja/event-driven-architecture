import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentsScalarWhereInput } from './comments-scalar-where.input';
import { Type } from 'class-transformer';
import { CommentsUpdateManyMutationInput } from './comments-update-many-mutation.input';

@InputType()
export class CommentsUpdateManyWithWhereWithoutUserInput {

    @Field(() => CommentsScalarWhereInput, {nullable:false})
    @Type(() => CommentsScalarWhereInput)
    where!: CommentsScalarWhereInput;

    @Field(() => CommentsUpdateManyMutationInput, {nullable:false})
    @Type(() => CommentsUpdateManyMutationInput)
    data!: CommentsUpdateManyMutationInput;
}
