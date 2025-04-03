import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentsWhereInput } from './comments-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UsersScalarRelationFilter } from '../users/users-scalar-relation-filter.input';
import { PostsScalarRelationFilter } from '../posts/posts-scalar-relation-filter.input';

@InputType()
export class CommentsWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => [CommentsWhereInput], { nullable: true })
  AND?: Array<CommentsWhereInput>;

  @Field(() => [CommentsWhereInput], { nullable: true })
  OR?: Array<CommentsWhereInput>;

  @Field(() => [CommentsWhereInput], { nullable: true })
  NOT?: Array<CommentsWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  content?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  entityStatus?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  usersId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  postsId?: StringFilter;

  @Field(() => UsersScalarRelationFilter, { nullable: true })
  user?: UsersScalarRelationFilter;

  @Field(() => PostsScalarRelationFilter, { nullable: true })
  post?: PostsScalarRelationFilter;
}
