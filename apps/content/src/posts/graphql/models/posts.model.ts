import { Field, ObjectType } from '@nestjs/graphql';
import { Posts } from '../../mongo-schemas';
import { VisibilityLevels, EntityStatus } from '@app/common';

@ObjectType()
export default class PostsModel implements Posts {
  @Field()
  _id: string;

  @Field()
  id: string;

  @Field()
  text: string;

  @Field()
  visibility: VisibilityLevels;

  @Field()
  entityStatus: EntityStatus;

  @Field()
  authorId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
