import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsCreateWithoutCommentsInput } from './posts-create-without-comments.input';
import { Type } from 'class-transformer';
import { PostsCreateOrConnectWithoutCommentsInput } from './posts-create-or-connect-without-comments.input';
import { PostsUpsertWithoutCommentsInput } from './posts-upsert-without-comments.input';
import { PostsWhereInput } from './posts-where.input';
import { Prisma } from '@prisma/client';
import { PostsWhereUniqueInput } from './posts-where-unique.input';
import { PostsUpdateToOneWithWhereWithoutCommentsInput } from './posts-update-to-one-with-where-without-comments.input';

@InputType()
export class PostsUpdateOneWithoutCommentsNestedInput {

    @Field(() => PostsCreateWithoutCommentsInput, {nullable:true})
    @Type(() => PostsCreateWithoutCommentsInput)
    create?: PostsCreateWithoutCommentsInput;

    @Field(() => PostsCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => PostsCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: PostsCreateOrConnectWithoutCommentsInput;

    @Field(() => PostsUpsertWithoutCommentsInput, {nullable:true})
    @Type(() => PostsUpsertWithoutCommentsInput)
    upsert?: PostsUpsertWithoutCommentsInput;

    @Field(() => PostsWhereInput, {nullable:true})
    @Type(() => PostsWhereInput)
    disconnect?: PostsWhereInput;

    @Field(() => PostsWhereInput, {nullable:true})
    @Type(() => PostsWhereInput)
    delete?: PostsWhereInput;

    @Field(() => PostsWhereUniqueInput, {nullable:true})
    @Type(() => PostsWhereUniqueInput)
    connect?: Prisma.AtLeast<PostsWhereUniqueInput, 'id'>;

    @Field(() => PostsUpdateToOneWithWhereWithoutCommentsInput, {nullable:true})
    @Type(() => PostsUpdateToOneWithWhereWithoutCommentsInput)
    update?: PostsUpdateToOneWithWhereWithoutCommentsInput;
}
