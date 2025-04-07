import { EntityStatus, PaginationArgs, VisibilityLevels } from '@app/common';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
class PostsPaginatedFilter {
  @Field({ nullable: true })
  text: string;

  @Field(() => VisibilityLevels, { nullable: true })
  visibility: VisibilityLevels;

  @Field(() => EntityStatus, { nullable: true })
  entityStatus: EntityStatus;

  @Field({ nullable: true })
  authorId: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;
}

@InputType()
export default class PostsPaginatedQueryInput extends PaginationArgs(
  PostsPaginatedFilter,
) {}
