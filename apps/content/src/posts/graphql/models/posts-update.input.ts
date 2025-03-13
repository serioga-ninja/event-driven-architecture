import { Field, InputType } from '@nestjs/graphql';
import { EntityStatus, VisibilityLevels } from '@app/common';

@InputType()
export default class PostsUpdateInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  text: string;

  @Field(() => VisibilityLevels, { nullable: true })
  visibility: VisibilityLevels;

  @Field(() => EntityStatus, { nullable: true })
  entityStatus: EntityStatus;
}
