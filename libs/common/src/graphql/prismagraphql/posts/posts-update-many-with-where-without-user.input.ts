import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsScalarWhereInput } from './posts-scalar-where.input';
import { Type } from 'class-transformer';
import { PostsUpdateManyMutationInput } from './posts-update-many-mutation.input';

@InputType()
export class PostsUpdateManyWithWhereWithoutUserInput {

    @Field(() => PostsScalarWhereInput, {nullable:false})
    @Type(() => PostsScalarWhereInput)
    where!: PostsScalarWhereInput;

    @Field(() => PostsUpdateManyMutationInput, {nullable:false})
    @Type(() => PostsUpdateManyMutationInput)
    data!: PostsUpdateManyMutationInput;
}
