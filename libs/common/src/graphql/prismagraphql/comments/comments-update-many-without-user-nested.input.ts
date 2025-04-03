import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentsCreateWithoutUserInput } from './comments-create-without-user.input';
import { Type } from 'class-transformer';
import { CommentsCreateOrConnectWithoutUserInput } from './comments-create-or-connect-without-user.input';
import { CommentsUpsertWithWhereUniqueWithoutUserInput } from './comments-upsert-with-where-unique-without-user.input';
import { CommentsCreateManyUserInputEnvelope } from './comments-create-many-user-input-envelope.input';
import { Prisma } from '@app/prisma';
import { CommentsWhereUniqueInput } from './comments-where-unique.input';
import { CommentsUpdateWithWhereUniqueWithoutUserInput } from './comments-update-with-where-unique-without-user.input';
import { CommentsUpdateManyWithWhereWithoutUserInput } from './comments-update-many-with-where-without-user.input';
import { CommentsScalarWhereInput } from './comments-scalar-where.input';

@InputType()
export class CommentsUpdateManyWithoutUserNestedInput {
  @Field(() => [CommentsCreateWithoutUserInput], { nullable: true })
  @Type(() => CommentsCreateWithoutUserInput)
  create?: Array<CommentsCreateWithoutUserInput>;

  @Field(() => [CommentsCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => CommentsCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<CommentsCreateOrConnectWithoutUserInput>;

  @Field(() => [CommentsUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => CommentsUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<CommentsUpsertWithWhereUniqueWithoutUserInput>;

  @Field(() => CommentsCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => CommentsCreateManyUserInputEnvelope)
  createMany?: CommentsCreateManyUserInputEnvelope;

  @Field(() => [CommentsWhereUniqueInput], { nullable: true })
  @Type(() => CommentsWhereUniqueInput)
  set?: Array<Prisma.AtLeast<CommentsWhereUniqueInput, 'id'>>;

  @Field(() => [CommentsWhereUniqueInput], { nullable: true })
  @Type(() => CommentsWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<CommentsWhereUniqueInput, 'id'>>;

  @Field(() => [CommentsWhereUniqueInput], { nullable: true })
  @Type(() => CommentsWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<CommentsWhereUniqueInput, 'id'>>;

  @Field(() => [CommentsWhereUniqueInput], { nullable: true })
  @Type(() => CommentsWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CommentsWhereUniqueInput, 'id'>>;

  @Field(() => [CommentsUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => CommentsUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<CommentsUpdateWithWhereUniqueWithoutUserInput>;

  @Field(() => [CommentsUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  @Type(() => CommentsUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<CommentsUpdateManyWithWhereWithoutUserInput>;

  @Field(() => [CommentsScalarWhereInput], { nullable: true })
  @Type(() => CommentsScalarWhereInput)
  deleteMany?: Array<CommentsScalarWhereInput>;
}
