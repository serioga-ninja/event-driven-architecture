import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostsWhereUniqueInput } from './posts-where-unique.input';
import { Type } from 'class-transformer';
import { PostsCreateWithoutUserInput } from './posts-create-without-user.input';

@InputType()
export class PostsCreateOrConnectWithoutUserInput {

    @Field(() => PostsWhereUniqueInput, {nullable:false})
    @Type(() => PostsWhereUniqueInput)
    where!: Prisma.AtLeast<PostsWhereUniqueInput, 'id'>;

    @Field(() => PostsCreateWithoutUserInput, {nullable:false})
    @Type(() => PostsCreateWithoutUserInput)
    create!: PostsCreateWithoutUserInput;
}
