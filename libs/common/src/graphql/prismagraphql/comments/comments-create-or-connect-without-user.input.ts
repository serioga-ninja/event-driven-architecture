import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentsWhereUniqueInput } from './comments-where-unique.input';
import { Type } from 'class-transformer';
import { CommentsCreateWithoutUserInput } from './comments-create-without-user.input';

@InputType()
export class CommentsCreateOrConnectWithoutUserInput {

    @Field(() => CommentsWhereUniqueInput, {nullable:false})
    @Type(() => CommentsWhereUniqueInput)
    where!: Prisma.AtLeast<CommentsWhereUniqueInput, 'id'>;

    @Field(() => CommentsCreateWithoutUserInput, {nullable:false})
    @Type(() => CommentsCreateWithoutUserInput)
    create!: CommentsCreateWithoutUserInput;
}
