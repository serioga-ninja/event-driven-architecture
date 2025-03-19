import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsUpdateWithoutCommentsInput } from './posts-update-without-comments.input';
import { Type } from 'class-transformer';
import { PostsCreateWithoutCommentsInput } from './posts-create-without-comments.input';
import { PostsWhereInput } from './posts-where.input';

@InputType()
export class PostsUpsertWithoutCommentsInput {

    @Field(() => PostsUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => PostsUpdateWithoutCommentsInput)
    update!: PostsUpdateWithoutCommentsInput;

    @Field(() => PostsCreateWithoutCommentsInput, {nullable:false})
    @Type(() => PostsCreateWithoutCommentsInput)
    create!: PostsCreateWithoutCommentsInput;

    @Field(() => PostsWhereInput, {nullable:true})
    @Type(() => PostsWhereInput)
    where?: PostsWhereInput;
}
