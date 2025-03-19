import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsCreateWithoutUserInput } from './posts-create-without-user.input';
import { Type } from 'class-transformer';
import { PostsCreateOrConnectWithoutUserInput } from './posts-create-or-connect-without-user.input';
import { PostsUpsertWithWhereUniqueWithoutUserInput } from './posts-upsert-with-where-unique-without-user.input';
import { PostsCreateManyUserInputEnvelope } from './posts-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PostsWhereUniqueInput } from './posts-where-unique.input';
import { PostsUpdateWithWhereUniqueWithoutUserInput } from './posts-update-with-where-unique-without-user.input';
import { PostsUpdateManyWithWhereWithoutUserInput } from './posts-update-many-with-where-without-user.input';
import { PostsScalarWhereInput } from './posts-scalar-where.input';

@InputType()
export class PostsUpdateManyWithoutUserNestedInput {

    @Field(() => [PostsCreateWithoutUserInput], {nullable:true})
    @Type(() => PostsCreateWithoutUserInput)
    create?: Array<PostsCreateWithoutUserInput>;

    @Field(() => [PostsCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PostsCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PostsCreateOrConnectWithoutUserInput>;

    @Field(() => [PostsUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PostsUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<PostsUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => PostsCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PostsCreateManyUserInputEnvelope)
    createMany?: PostsCreateManyUserInputEnvelope;

    @Field(() => [PostsWhereUniqueInput], {nullable:true})
    @Type(() => PostsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PostsWhereUniqueInput, 'id'>>;

    @Field(() => [PostsWhereUniqueInput], {nullable:true})
    @Type(() => PostsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PostsWhereUniqueInput, 'id'>>;

    @Field(() => [PostsWhereUniqueInput], {nullable:true})
    @Type(() => PostsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PostsWhereUniqueInput, 'id'>>;

    @Field(() => [PostsWhereUniqueInput], {nullable:true})
    @Type(() => PostsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PostsWhereUniqueInput, 'id'>>;

    @Field(() => [PostsUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PostsUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<PostsUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [PostsUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => PostsUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<PostsUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [PostsScalarWhereInput], {nullable:true})
    @Type(() => PostsScalarWhereInput)
    deleteMany?: Array<PostsScalarWhereInput>;
}
