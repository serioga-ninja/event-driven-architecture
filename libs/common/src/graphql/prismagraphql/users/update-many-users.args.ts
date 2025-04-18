import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersUpdateManyMutationInput } from './users-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UsersWhereInput } from './users-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyUsersArgs {
  @Field(() => UsersUpdateManyMutationInput, { nullable: false })
  @Type(() => UsersUpdateManyMutationInput)
  data!: UsersUpdateManyMutationInput;

  @Field(() => UsersWhereInput, { nullable: true })
  @Type(() => UsersWhereInput)
  where?: UsersWhereInput;

  @Field(() => Int, { nullable: true })
  limit?: number;
}
