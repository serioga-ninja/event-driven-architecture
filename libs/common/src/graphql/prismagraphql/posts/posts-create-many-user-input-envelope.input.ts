import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsCreateManyUserInput } from './posts-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class PostsCreateManyUserInputEnvelope {
  @Field(() => [PostsCreateManyUserInput], { nullable: false })
  @Type(() => PostsCreateManyUserInput)
  data!: Array<PostsCreateManyUserInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
