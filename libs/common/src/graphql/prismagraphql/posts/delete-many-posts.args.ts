import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostsWhereInput } from './posts-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPostsArgs {

    @Field(() => PostsWhereInput, {nullable:true})
    @Type(() => PostsWhereInput)
    where?: PostsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
