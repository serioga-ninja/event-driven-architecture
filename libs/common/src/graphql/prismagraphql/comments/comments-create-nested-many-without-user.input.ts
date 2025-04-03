import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentsCreateWithoutUserInput } from './comments-create-without-user.input';
import { Type } from 'class-transformer';
import { CommentsCreateOrConnectWithoutUserInput } from './comments-create-or-connect-without-user.input';
import { CommentsCreateManyUserInputEnvelope } from './comments-create-many-user-input-envelope.input';
import { Prisma } from '@app/prisma';
import { CommentsWhereUniqueInput } from './comments-where-unique.input';

@InputType()
export class CommentsCreateNestedManyWithoutUserInput {
  @Field(() => [CommentsCreateWithoutUserInput], { nullable: true })
  @Type(() => CommentsCreateWithoutUserInput)
  create?: Array<CommentsCreateWithoutUserInput>;

  @Field(() => [CommentsCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => CommentsCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<CommentsCreateOrConnectWithoutUserInput>;

  @Field(() => CommentsCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => CommentsCreateManyUserInputEnvelope)
  createMany?: CommentsCreateManyUserInputEnvelope;

  @Field(() => [CommentsWhereUniqueInput], { nullable: true })
  @Type(() => CommentsWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CommentsWhereUniqueInput, 'id'>>;
}
