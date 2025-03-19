import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentsCreateInput } from './comments-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCommentsArgs {

    @Field(() => CommentsCreateInput, {nullable:false})
    @Type(() => CommentsCreateInput)
    data!: CommentsCreateInput;
}
