import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentsWhereInput } from './comments-where.input';
import { Type } from 'class-transformer';
import { CommentsOrderByWithRelationInput } from './comments-order-by-with-relation.input';
import { Prisma } from '@app/prisma';
import { CommentsWhereUniqueInput } from './comments-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CommentsScalarFieldEnum } from './comments-scalar-field.enum';

@ArgsType()
export class FindFirstCommentsArgs {
  @Field(() => CommentsWhereInput, { nullable: true })
  @Type(() => CommentsWhereInput)
  where?: CommentsWhereInput;

  @Field(() => [CommentsOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CommentsOrderByWithRelationInput>;

  @Field(() => CommentsWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<CommentsWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [CommentsScalarFieldEnum], { nullable: true })
  distinct?: Array<`${CommentsScalarFieldEnum}`>;
}
