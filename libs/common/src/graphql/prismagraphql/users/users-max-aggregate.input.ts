import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UsersMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  email?: true;

  @Field(() => Boolean, { nullable: true })
  phone?: true;

  @Field(() => Boolean, { nullable: true })
  firstName?: true;

  @Field(() => Boolean, { nullable: true })
  lastName?: true;

  @Field(() => Boolean, { nullable: true })
  isTfaEnabled?: true;

  @Field(() => Boolean, { nullable: true })
  tfaSecret?: true;

  @Field(() => Boolean, { nullable: true })
  entityStatus?: true;

  @Field(() => Boolean, { nullable: true })
  password?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}
