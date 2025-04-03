import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@app/prisma';
import { CommentsWhereUniqueInput } from './comments-where-unique.input';
import { Type } from 'class-transformer';
import { CommentsCreateWithoutPostInput } from './comments-create-without-post.input';

@InputType()
export class CommentsCreateOrConnectWithoutPostInput {
  @Field(() => CommentsWhereUniqueInput, { nullable: false })
  @Type(() => CommentsWhereUniqueInput)
  where!: Prisma.AtLeast<CommentsWhereUniqueInput, 'id'>;

  @Field(() => CommentsCreateWithoutPostInput, { nullable: false })
  @Type(() => CommentsCreateWithoutPostInput)
  create!: CommentsCreateWithoutPostInput;
}
