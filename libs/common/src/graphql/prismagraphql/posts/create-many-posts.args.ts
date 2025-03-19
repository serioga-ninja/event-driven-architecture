import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostsCreateManyInput } from './posts-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPostsArgs {

    @Field(() => [PostsCreateManyInput], {nullable:false})
    @Type(() => PostsCreateManyInput)
    data!: Array<PostsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
