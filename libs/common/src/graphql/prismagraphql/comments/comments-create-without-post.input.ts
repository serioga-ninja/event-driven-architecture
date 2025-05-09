import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateNestedOneWithoutCommentsInput } from '../users/users-create-nested-one-without-comments.input';

@InputType()
export class CommentsCreateWithoutPostInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => String, { nullable: false })
  entityStatus!: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => UsersCreateNestedOneWithoutCommentsInput, { nullable: false })
  user!: UsersCreateNestedOneWithoutCommentsInput;
}
