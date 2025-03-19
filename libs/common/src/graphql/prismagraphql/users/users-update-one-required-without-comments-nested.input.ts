import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutCommentsInput } from './users-create-without-comments.input';
import { Type } from 'class-transformer';
import { UsersCreateOrConnectWithoutCommentsInput } from './users-create-or-connect-without-comments.input';
import { UsersUpsertWithoutCommentsInput } from './users-upsert-without-comments.input';
import { Prisma } from '@prisma/client';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { UsersUpdateToOneWithWhereWithoutCommentsInput } from './users-update-to-one-with-where-without-comments.input';

@InputType()
export class UsersUpdateOneRequiredWithoutCommentsNestedInput {

    @Field(() => UsersCreateWithoutCommentsInput, {nullable:true})
    @Type(() => UsersCreateWithoutCommentsInput)
    create?: UsersCreateWithoutCommentsInput;

    @Field(() => UsersCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => UsersCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput;

    @Field(() => UsersUpsertWithoutCommentsInput, {nullable:true})
    @Type(() => UsersUpsertWithoutCommentsInput)
    upsert?: UsersUpsertWithoutCommentsInput;

    @Field(() => UsersWhereUniqueInput, {nullable:true})
    @Type(() => UsersWhereUniqueInput)
    connect?: Prisma.AtLeast<UsersWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UsersUpdateToOneWithWhereWithoutCommentsInput, {nullable:true})
    @Type(() => UsersUpdateToOneWithWhereWithoutCommentsInput)
    update?: UsersUpdateToOneWithWhereWithoutCommentsInput;
}
