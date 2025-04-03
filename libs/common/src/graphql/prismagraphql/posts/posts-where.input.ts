import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UsersNullableScalarRelationFilter } from '../users/users-nullable-scalar-relation-filter.input';
import { CommentsListRelationFilter } from '../comments/comments-list-relation-filter.input';

@InputType()
export class PostsWhereInput {
  @Field(() => [PostsWhereInput], { nullable: true })
  AND?: Array<PostsWhereInput>;

  @Field(() => [PostsWhereInput], { nullable: true })
  OR?: Array<PostsWhereInput>;

  @Field(() => [PostsWhereInput], { nullable: true })
  NOT?: Array<PostsWhereInput>;

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

  @Field(() => UsersNullableScalarRelationFilter, { nullable: true })
  user?: UsersNullableScalarRelationFilter;

  @Field(() => CommentsListRelationFilter, { nullable: true })
  Comments?: CommentsListRelationFilter;
}
