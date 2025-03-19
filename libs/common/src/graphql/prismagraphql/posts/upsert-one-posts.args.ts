import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostsWhereUniqueInput } from './posts-where-unique.input';
import { Type } from 'class-transformer';
import { PostsCreateInput } from './posts-create.input';
import { PostsUpdateInput } from './posts-update.input';

@ArgsType()
export class UpsertOnePostsArgs {

    @Field(() => PostsWhereUniqueInput, {nullable:false})
    @Type(() => PostsWhereUniqueInput)
    where!: Prisma.AtLeast<PostsWhereUniqueInput, 'id'>;

    @Field(() => PostsCreateInput, {nullable:false})
    @Type(() => PostsCreateInput)
    create!: PostsCreateInput;

    @Field(() => PostsUpdateInput, {nullable:false})
    @Type(() => PostsUpdateInput)
    update!: PostsUpdateInput;
}
