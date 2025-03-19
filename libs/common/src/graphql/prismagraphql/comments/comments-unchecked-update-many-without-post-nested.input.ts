import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentsCreateWithoutPostInput } from './comments-create-without-post.input';
import { Type } from 'class-transformer';
import { CommentsCreateOrConnectWithoutPostInput } from './comments-create-or-connect-without-post.input';
import { CommentsUpsertWithWhereUniqueWithoutPostInput } from './comments-upsert-with-where-unique-without-post.input';
import { CommentsCreateManyPostInputEnvelope } from './comments-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentsWhereUniqueInput } from './comments-where-unique.input';
import { CommentsUpdateWithWhereUniqueWithoutPostInput } from './comments-update-with-where-unique-without-post.input';
import { CommentsUpdateManyWithWhereWithoutPostInput } from './comments-update-many-with-where-without-post.input';
import { CommentsScalarWhereInput } from './comments-scalar-where.input';

@InputType()
export class CommentsUncheckedUpdateManyWithoutPostNestedInput {

    @Field(() => [CommentsCreateWithoutPostInput], {nullable:true})
    @Type(() => CommentsCreateWithoutPostInput)
    create?: Array<CommentsCreateWithoutPostInput>;

    @Field(() => [CommentsCreateOrConnectWithoutPostInput], {nullable:true})
    @Type(() => CommentsCreateOrConnectWithoutPostInput)
    connectOrCreate?: Array<CommentsCreateOrConnectWithoutPostInput>;

    @Field(() => [CommentsUpsertWithWhereUniqueWithoutPostInput], {nullable:true})
    @Type(() => CommentsUpsertWithWhereUniqueWithoutPostInput)
    upsert?: Array<CommentsUpsertWithWhereUniqueWithoutPostInput>;

    @Field(() => CommentsCreateManyPostInputEnvelope, {nullable:true})
    @Type(() => CommentsCreateManyPostInputEnvelope)
    createMany?: CommentsCreateManyPostInputEnvelope;

    @Field(() => [CommentsWhereUniqueInput], {nullable:true})
    @Type(() => CommentsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentsWhereUniqueInput, 'id'>>;

    @Field(() => [CommentsWhereUniqueInput], {nullable:true})
    @Type(() => CommentsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentsWhereUniqueInput, 'id'>>;

    @Field(() => [CommentsWhereUniqueInput], {nullable:true})
    @Type(() => CommentsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentsWhereUniqueInput, 'id'>>;

    @Field(() => [CommentsWhereUniqueInput], {nullable:true})
    @Type(() => CommentsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentsWhereUniqueInput, 'id'>>;

    @Field(() => [CommentsUpdateWithWhereUniqueWithoutPostInput], {nullable:true})
    @Type(() => CommentsUpdateWithWhereUniqueWithoutPostInput)
    update?: Array<CommentsUpdateWithWhereUniqueWithoutPostInput>;

    @Field(() => [CommentsUpdateManyWithWhereWithoutPostInput], {nullable:true})
    @Type(() => CommentsUpdateManyWithWhereWithoutPostInput)
    updateMany?: Array<CommentsUpdateManyWithWhereWithoutPostInput>;

    @Field(() => [CommentsScalarWhereInput], {nullable:true})
    @Type(() => CommentsScalarWhereInput)
    deleteMany?: Array<CommentsScalarWhereInput>;
}
