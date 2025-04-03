import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class PostsScalarWhereWithAggregatesInput {
  @Field(() => [PostsScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<PostsScalarWhereWithAggregatesInput>;

  @Field(() => [PostsScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<PostsScalarWhereWithAggregatesInput>;

  @Field(() => [PostsScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<PostsScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  content?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  visibility?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  entityStatus?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  usersId?: StringNullableWithAggregatesFilter;
}
