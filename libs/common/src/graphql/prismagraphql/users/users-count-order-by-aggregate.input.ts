import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UsersCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  email?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  phone?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  firstName?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  lastName?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  isTfaEnabled?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  tfaSecret?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  entityStatus?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  password?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: `${SortOrder}`;
}
