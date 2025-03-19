import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersWhereInput } from './users-where.input';
import { Type } from 'class-transformer';
import { UsersOrderByWithRelationInput } from './users-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UsersScalarFieldEnum } from './users-scalar-field.enum';

@ArgsType()
export class FindFirstUsersArgs {

    @Field(() => UsersWhereInput, {nullable:true})
    @Type(() => UsersWhereInput)
    where?: UsersWhereInput;

    @Field(() => [UsersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UsersOrderByWithRelationInput>;

    @Field(() => UsersWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UsersWhereUniqueInput, 'id' | 'email'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UsersScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UsersScalarFieldEnum}`>;
}
