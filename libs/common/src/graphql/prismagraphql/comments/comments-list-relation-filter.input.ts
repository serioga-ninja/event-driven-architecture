import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentsWhereInput } from './comments-where.input';

@InputType()
export class CommentsListRelationFilter {

    @Field(() => CommentsWhereInput, {nullable:true})
    every?: CommentsWhereInput;

    @Field(() => CommentsWhereInput, {nullable:true})
    some?: CommentsWhereInput;

    @Field(() => CommentsWhereInput, {nullable:true})
    none?: CommentsWhereInput;
}
