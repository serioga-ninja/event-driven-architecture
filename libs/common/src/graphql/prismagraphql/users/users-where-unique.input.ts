import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWhereInput } from './users-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PostsListRelationFilter } from '../posts/posts-list-relation-filter.input';
import { CommentsListRelationFilter } from '../comments/comments-list-relation-filter.input';

@InputType()
export class UsersWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => [UsersWhereInput], { nullable: true })
  AND?: Array<UsersWhereInput>;

  @Field(() => [UsersWhereInput], { nullable: true })
  OR?: Array<UsersWhereInput>;

  @Field(() => [UsersWhereInput], { nullable: true })
  NOT?: Array<UsersWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  phone?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  firstName?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  lastName?: StringFilter;

  @Field(() => BoolFilter, { nullable: true })
  isTfaEnabled?: BoolFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  tfaSecret?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  entityStatus?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  password?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => PostsListRelationFilter, { nullable: true })
  Posts?: PostsListRelationFilter;

  @Field(() => CommentsListRelationFilter, { nullable: true })
  Comments?: CommentsListRelationFilter;
}
