import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentsCreateManyUserInput } from './comments-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentsCreateManyUserInputEnvelope {

    @Field(() => [CommentsCreateManyUserInput], {nullable:false})
    @Type(() => CommentsCreateManyUserInput)
    data!: Array<CommentsCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
