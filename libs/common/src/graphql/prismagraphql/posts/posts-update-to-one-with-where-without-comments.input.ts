import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsWhereInput } from './posts-where.input';
import { Type } from 'class-transformer';
import { PostsUpdateWithoutCommentsInput } from './posts-update-without-comments.input';

@InputType()
export class PostsUpdateToOneWithWhereWithoutCommentsInput {
  @Field(() => PostsWhereInput, { nullable: true })
  @Type(() => PostsWhereInput)
  where?: PostsWhereInput;

  @Field(() => PostsUpdateWithoutCommentsInput, { nullable: false })
  @Type(() => PostsUpdateWithoutCommentsInput)
  data!: PostsUpdateWithoutCommentsInput;
}
