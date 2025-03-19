import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutPostsInput } from './users-create-without-posts.input';
import { Type } from 'class-transformer';
import { UsersCreateOrConnectWithoutPostsInput } from './users-create-or-connect-without-posts.input';
import { UsersUpsertWithoutPostsInput } from './users-upsert-without-posts.input';
import { UsersWhereInput } from './users-where.input';
import { Prisma } from '@prisma/client';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { UsersUpdateToOneWithWhereWithoutPostsInput } from './users-update-to-one-with-where-without-posts.input';

@InputType()
export class UsersUpdateOneWithoutPostsNestedInput {

    @Field(() => UsersCreateWithoutPostsInput, {nullable:true})
    @Type(() => UsersCreateWithoutPostsInput)
    create?: UsersCreateWithoutPostsInput;

    @Field(() => UsersCreateOrConnectWithoutPostsInput, {nullable:true})
    @Type(() => UsersCreateOrConnectWithoutPostsInput)
    connectOrCreate?: UsersCreateOrConnectWithoutPostsInput;

    @Field(() => UsersUpsertWithoutPostsInput, {nullable:true})
    @Type(() => UsersUpsertWithoutPostsInput)
    upsert?: UsersUpsertWithoutPostsInput;

    @Field(() => UsersWhereInput, {nullable:true})
    @Type(() => UsersWhereInput)
    disconnect?: UsersWhereInput;

    @Field(() => UsersWhereInput, {nullable:true})
    @Type(() => UsersWhereInput)
    delete?: UsersWhereInput;

    @Field(() => UsersWhereUniqueInput, {nullable:true})
    @Type(() => UsersWhereUniqueInput)
    connect?: Prisma.AtLeast<UsersWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UsersUpdateToOneWithWhereWithoutPostsInput, {nullable:true})
    @Type(() => UsersUpdateToOneWithWhereWithoutPostsInput)
    update?: UsersUpdateToOneWithWhereWithoutPostsInput;
}
