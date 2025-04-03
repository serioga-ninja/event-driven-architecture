import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@app/prisma';
import { CommentsWhereUniqueInput } from './comments-where-unique.input';
import { Type } from 'class-transformer';
import { CommentsUpdateWithoutPostInput } from './comments-update-without-post.input';

@InputType()
export class CommentsUpdateWithWhereUniqueWithoutPostInput {
  @Field(() => CommentsWhereUniqueInput, { nullable: false })
  @Type(() => CommentsWhereUniqueInput)
  where!: Prisma.AtLeast<CommentsWhereUniqueInput, 'id'>;

  @Field(() => CommentsUpdateWithoutPostInput, { nullable: false })
  @Type(() => CommentsUpdateWithoutPostInput)
  data!: CommentsUpdateWithoutPostInput;
}
