import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentsWhereUniqueInput } from './comments-where-unique.input';
import { Type } from 'class-transformer';
import { CommentsCreateInput } from './comments-create.input';
import { CommentsUpdateInput } from './comments-update.input';

@ArgsType()
export class UpsertOneCommentsArgs {

    @Field(() => CommentsWhereUniqueInput, {nullable:false})
    @Type(() => CommentsWhereUniqueInput)
    where!: Prisma.AtLeast<CommentsWhereUniqueInput, 'id'>;

    @Field(() => CommentsCreateInput, {nullable:false})
    @Type(() => CommentsCreateInput)
    create!: CommentsCreateInput;

    @Field(() => CommentsUpdateInput, {nullable:false})
    @Type(() => CommentsUpdateInput)
    update!: CommentsUpdateInput;
}
