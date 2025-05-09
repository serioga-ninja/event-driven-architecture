import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PostsCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  content!: number;

  @Field(() => Int, { nullable: false })
  visibility!: number;

  @Field(() => Int, { nullable: false })
  entityStatus!: number;

  @Field(() => Int, { nullable: false })
  createdAt!: number;

  @Field(() => Int, { nullable: false })
  updatedAt!: number;

  @Field(() => Int, { nullable: false })
  usersId!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
