import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PostsCount {
  @Field(() => Int, { nullable: false })
  Comments?: number;
}
