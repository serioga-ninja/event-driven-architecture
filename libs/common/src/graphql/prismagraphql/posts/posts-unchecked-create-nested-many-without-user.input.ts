import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsCreateWithoutUserInput } from './posts-create-without-user.input';
import { Type } from 'class-transformer';
import { PostsCreateOrConnectWithoutUserInput } from './posts-create-or-connect-without-user.input';
import { PostsCreateManyUserInputEnvelope } from './posts-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PostsWhereUniqueInput } from './posts-where-unique.input';

@InputType()
export class PostsUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [PostsCreateWithoutUserInput], {nullable:true})
    @Type(() => PostsCreateWithoutUserInput)
    create?: Array<PostsCreateWithoutUserInput>;

    @Field(() => [PostsCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PostsCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PostsCreateOrConnectWithoutUserInput>;

    @Field(() => PostsCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PostsCreateManyUserInputEnvelope)
    createMany?: PostsCreateManyUserInputEnvelope;

    @Field(() => [PostsWhereUniqueInput], {nullable:true})
    @Type(() => PostsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PostsWhereUniqueInput, 'id'>>;
}
