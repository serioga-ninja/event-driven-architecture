import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentsWhereUniqueInput } from './comments-where-unique.input';
import { Type } from 'class-transformer';
import { CommentsUpdateWithoutUserInput } from './comments-update-without-user.input';
import { CommentsCreateWithoutUserInput } from './comments-create-without-user.input';

@InputType()
export class CommentsUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => CommentsWhereUniqueInput, {nullable:false})
    @Type(() => CommentsWhereUniqueInput)
    where!: Prisma.AtLeast<CommentsWhereUniqueInput, 'id'>;

    @Field(() => CommentsUpdateWithoutUserInput, {nullable:false})
    @Type(() => CommentsUpdateWithoutUserInput)
    update!: CommentsUpdateWithoutUserInput;

    @Field(() => CommentsCreateWithoutUserInput, {nullable:false})
    @Type(() => CommentsCreateWithoutUserInput)
    create!: CommentsCreateWithoutUserInput;
}
