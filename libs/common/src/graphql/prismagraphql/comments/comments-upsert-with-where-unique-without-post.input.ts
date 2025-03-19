import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentsWhereUniqueInput } from './comments-where-unique.input';
import { Type } from 'class-transformer';
import { CommentsUpdateWithoutPostInput } from './comments-update-without-post.input';
import { CommentsCreateWithoutPostInput } from './comments-create-without-post.input';

@InputType()
export class CommentsUpsertWithWhereUniqueWithoutPostInput {

    @Field(() => CommentsWhereUniqueInput, {nullable:false})
    @Type(() => CommentsWhereUniqueInput)
    where!: Prisma.AtLeast<CommentsWhereUniqueInput, 'id'>;

    @Field(() => CommentsUpdateWithoutPostInput, {nullable:false})
    @Type(() => CommentsUpdateWithoutPostInput)
    update!: CommentsUpdateWithoutPostInput;

    @Field(() => CommentsCreateWithoutPostInput, {nullable:false})
    @Type(() => CommentsCreateWithoutPostInput)
    create!: CommentsCreateWithoutPostInput;
}
