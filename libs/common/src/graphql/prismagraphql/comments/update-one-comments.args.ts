import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentsUpdateInput } from './comments-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@app/prisma';
import { CommentsWhereUniqueInput } from './comments-where-unique.input';

@ArgsType()
export class UpdateOneCommentsArgs {
  @Field(() => CommentsUpdateInput, { nullable: false })
  @Type(() => CommentsUpdateInput)
  data!: CommentsUpdateInput;

  @Field(() => CommentsWhereUniqueInput, { nullable: false })
  @Type(() => CommentsWhereUniqueInput)
  where!: Prisma.AtLeast<CommentsWhereUniqueInput, 'id'>;
}
