import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@app/prisma';
import { CommentsWhereUniqueInput } from './comments-where-unique.input';
import { Type } from 'class-transformer';
import { CommentsUpdateWithoutUserInput } from './comments-update-without-user.input';

@InputType()
export class CommentsUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => CommentsWhereUniqueInput, { nullable: false })
  @Type(() => CommentsWhereUniqueInput)
  where!: Prisma.AtLeast<CommentsWhereUniqueInput, 'id'>;

  @Field(() => CommentsUpdateWithoutUserInput, { nullable: false })
  @Type(() => CommentsUpdateWithoutUserInput)
  data!: CommentsUpdateWithoutUserInput;
}
