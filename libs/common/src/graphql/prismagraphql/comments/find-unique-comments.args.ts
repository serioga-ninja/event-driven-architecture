import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentsWhereUniqueInput } from './comments-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCommentsArgs {

    @Field(() => CommentsWhereUniqueInput, {nullable:false})
    @Type(() => CommentsWhereUniqueInput)
    where!: Prisma.AtLeast<CommentsWhereUniqueInput, 'id'>;
}
