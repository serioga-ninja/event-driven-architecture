import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UsersCountAggregate } from './users-count-aggregate.output';
import { UsersMinAggregate } from './users-min-aggregate.output';
import { UsersMaxAggregate } from './users-max-aggregate.output';

@ObjectType()
export class UsersGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  phone!: string;

  @Field(() => String, { nullable: false })
  firstName!: string;

  @Field(() => String, { nullable: false })
  lastName!: string;

  @Field(() => Boolean, { nullable: false })
  isTfaEnabled!: boolean;

  @Field(() => String, { nullable: true })
  tfaSecret?: string;

  @Field(() => String, { nullable: false })
  entityStatus!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => UsersCountAggregate, { nullable: true })
  _count?: UsersCountAggregate;

  @Field(() => UsersMinAggregate, { nullable: true })
  _min?: UsersMinAggregate;

  @Field(() => UsersMaxAggregate, { nullable: true })
  _max?: UsersMaxAggregate;
}
