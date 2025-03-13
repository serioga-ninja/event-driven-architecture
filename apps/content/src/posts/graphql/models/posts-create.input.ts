import { Field, InputType } from '@nestjs/graphql';
import { EntityStatus, VisibilityLevels } from '@app/common';

@InputType()
export default class PostsCreateInput {
  @Field({ nullable: true })
  text: string;

  @Field({ nullable: true })
  visibility: VisibilityLevels;

  @Field({ nullable: true })
  entityStatus: EntityStatus;
}
