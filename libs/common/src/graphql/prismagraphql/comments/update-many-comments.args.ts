import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentsUpdateManyMutationInput } from './comments-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CommentsWhereInput } from './comments-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyCommentsArgs {

    @Field(() => CommentsUpdateManyMutationInput, {nullable:false})
    @Type(() => CommentsUpdateManyMutationInput)
    data!: CommentsUpdateManyMutationInput;

    @Field(() => CommentsWhereInput, {nullable:true})
    @Type(() => CommentsWhereInput)
    where?: CommentsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
