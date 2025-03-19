import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostsCreateInput } from './posts-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePostsArgs {

    @Field(() => PostsCreateInput, {nullable:false})
    @Type(() => PostsCreateInput)
    data!: PostsCreateInput;
}
