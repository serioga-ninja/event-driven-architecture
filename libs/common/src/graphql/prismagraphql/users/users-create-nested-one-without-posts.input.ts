import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutPostsInput } from './users-create-without-posts.input';
import { Type } from 'class-transformer';
import { UsersCreateOrConnectWithoutPostsInput } from './users-create-or-connect-without-posts.input';
import { Prisma } from '@prisma/client';
import { UsersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class UsersCreateNestedOneWithoutPostsInput {

    @Field(() => UsersCreateWithoutPostsInput, {nullable:true})
    @Type(() => UsersCreateWithoutPostsInput)
    create?: UsersCreateWithoutPostsInput;

    @Field(() => UsersCreateOrConnectWithoutPostsInput, {nullable:true})
    @Type(() => UsersCreateOrConnectWithoutPostsInput)
    connectOrCreate?: UsersCreateOrConnectWithoutPostsInput;

    @Field(() => UsersWhereUniqueInput, {nullable:true})
    @Type(() => UsersWhereUniqueInput)
    connect?: Prisma.AtLeast<UsersWhereUniqueInput, 'id' | 'email'>;
}
