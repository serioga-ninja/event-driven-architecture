import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class PostsScalarWhereInput {
  @Field(() => [PostsScalarWhereInput], { nullable: true })
  AND?: Array<PostsScalarWhereInput>;

  @Field(() => [PostsScalarWhereInput], { nullable: true })
  OR?: Array<PostsScalarWhereInput>;

  @Field(() => [PostsScalarWhereInput], { nullable: true })
  NOT?: Array<PostsScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  content?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  visibility?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  entityStatus?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  usersId?: StringNullableFilter;
}
