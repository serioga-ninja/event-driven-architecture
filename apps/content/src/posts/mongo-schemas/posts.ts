import { Prop, Schema, SchemaFactory, Virtual } from '@nestjs/mongoose';
import type { HydratedDocument } from 'mongoose';
import { EntityStatus, VisibilityLevels } from '@app/common';

export type PostsDocument = HydratedDocument<Posts>;

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Posts {
  declare _id: string;

  @Prop({ required: true })
  text: string;

  @Prop({
    required: false,
    default: VisibilityLevels.PUBLIC,
    enum: VisibilityLevels,
  })
  visibility: VisibilityLevels;

  @Prop({ required: false, default: EntityStatus.DRAFT, enum: EntityStatus })
  entityStatus: EntityStatus;

  @Prop({ required: true })
  authorId: string;

  @Virtual({
    get: function (this: Posts) {
      return this._id;
    },
  })
  id: string;
}

export const PostsSchema = SchemaFactory.createForClass(Posts);
