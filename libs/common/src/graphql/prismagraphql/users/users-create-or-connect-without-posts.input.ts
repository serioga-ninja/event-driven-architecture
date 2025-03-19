import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { UsersCreateWithoutPostsInput } from './users-create-without-posts.input';

@InputType()
export class UsersCreateOrConnectWithoutPostsInput {

    @Field(() => UsersWhereUniqueInput, {nullable:false})
    @Type(() => UsersWhereUniqueInput)
    where!: Prisma.AtLeast<UsersWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UsersCreateWithoutPostsInput, {nullable:false})
    @Type(() => UsersCreateWithoutPostsInput)
    create!: UsersCreateWithoutPostsInput;
}
