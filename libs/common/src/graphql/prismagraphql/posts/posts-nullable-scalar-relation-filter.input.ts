import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsWhereInput } from './posts-where.input';

@InputType()
export class PostsNullableScalarRelationFilter {
  @Field(() => PostsWhereInput, { nullable: true })
  is?: PostsWhereInput;

  @Field(() => PostsWhereInput, { nullable: true })
  isNot?: PostsWhereInput;
}
