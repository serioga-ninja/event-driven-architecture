import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UsersCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  email!: number;

  @Field(() => Int, { nullable: false })
  phone!: number;

  @Field(() => Int, { nullable: false })
  firstName!: number;

  @Field(() => Int, { nullable: false })
  lastName!: number;

  @Field(() => Int, { nullable: false })
  isTfaEnabled!: number;

  @Field(() => Int, { nullable: false })
  tfaSecret!: number;

  @Field(() => Int, { nullable: false })
  entityStatus!: number;

  @Field(() => Int, { nullable: false })
  password!: number;

  @Field(() => Int, { nullable: false })
  createdAt!: number;

  @Field(() => Int, { nullable: false })
  updatedAt!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
