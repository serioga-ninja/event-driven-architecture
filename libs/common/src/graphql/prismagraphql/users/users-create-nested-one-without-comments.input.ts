import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutCommentsInput } from './users-create-without-comments.input';
import { Type } from 'class-transformer';
import { UsersCreateOrConnectWithoutCommentsInput } from './users-create-or-connect-without-comments.input';
import { Prisma } from '@prisma/client';
import { UsersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class UsersCreateNestedOneWithoutCommentsInput {

    @Field(() => UsersCreateWithoutCommentsInput, {nullable:true})
    @Type(() => UsersCreateWithoutCommentsInput)
    create?: UsersCreateWithoutCommentsInput;

    @Field(() => UsersCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => UsersCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput;

    @Field(() => UsersWhereUniqueInput, {nullable:true})
    @Type(() => UsersWhereUniqueInput)
    connect?: Prisma.AtLeast<UsersWhereUniqueInput, 'id' | 'email'>;
}
