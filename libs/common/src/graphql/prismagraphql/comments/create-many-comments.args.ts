import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentsCreateManyInput } from './comments-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCommentsArgs {

    @Field(() => [CommentsCreateManyInput], {nullable:false})
    @Type(() => CommentsCreateManyInput)
    data!: Array<CommentsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
