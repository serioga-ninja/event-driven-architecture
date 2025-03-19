import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWhereInput } from './users-where.input';
import { Type } from 'class-transformer';
import { UsersUpdateWithoutCommentsInput } from './users-update-without-comments.input';

@InputType()
export class UsersUpdateToOneWithWhereWithoutCommentsInput {

    @Field(() => UsersWhereInput, {nullable:true})
    @Type(() => UsersWhereInput)
    where?: UsersWhereInput;

    @Field(() => UsersUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => UsersUpdateWithoutCommentsInput)
    data!: UsersUpdateWithoutCommentsInput;
}
