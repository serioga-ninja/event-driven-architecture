import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentsWhereInput } from './comments-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyCommentsArgs {
  @Field(() => CommentsWhereInput, { nullable: true })
  @Type(() => CommentsWhereInput)
  where?: CommentsWhereInput;

  @Field(() => Int, { nullable: true })
  limit?: number;
}
