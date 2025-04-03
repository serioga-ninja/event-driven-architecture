import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentsCreateWithoutPostInput } from './comments-create-without-post.input';
import { Type } from 'class-transformer';
import { CommentsCreateOrConnectWithoutPostInput } from './comments-create-or-connect-without-post.input';
import { CommentsCreateManyPostInputEnvelope } from './comments-create-many-post-input-envelope.input';
import { Prisma } from '@app/prisma';
import { CommentsWhereUniqueInput } from './comments-where-unique.input';

@InputType()
export class CommentsCreateNestedManyWithoutPostInput {
  @Field(() => [CommentsCreateWithoutPostInput], { nullable: true })
  @Type(() => CommentsCreateWithoutPostInput)
  create?: Array<CommentsCreateWithoutPostInput>;

  @Field(() => [CommentsCreateOrConnectWithoutPostInput], { nullable: true })
  @Type(() => CommentsCreateOrConnectWithoutPostInput)
  connectOrCreate?: Array<CommentsCreateOrConnectWithoutPostInput>;

  @Field(() => CommentsCreateManyPostInputEnvelope, { nullable: true })
  @Type(() => CommentsCreateManyPostInputEnvelope)
  createMany?: CommentsCreateManyPostInputEnvelope;

  @Field(() => [CommentsWhereUniqueInput], { nullable: true })
  @Type(() => CommentsWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CommentsWhereUniqueInput, 'id'>>;
}
