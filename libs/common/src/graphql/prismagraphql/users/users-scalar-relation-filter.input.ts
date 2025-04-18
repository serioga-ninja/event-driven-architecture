import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWhereInput } from './users-where.input';

@InputType()
export class UsersScalarRelationFilter {
  @Field(() => UsersWhereInput, { nullable: true })
  is?: UsersWhereInput;

  @Field(() => UsersWhereInput, { nullable: true })
  isNot?: UsersWhereInput;
}
