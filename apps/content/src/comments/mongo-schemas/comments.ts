import { Prop, Schema, SchemaFactory, Virtual } from '@nestjs/mongoose';
import type { HydratedDocument } from 'mongoose';
import { EntityStatus } from '@app/common';

export type CommentsDocument = HydratedDocument<Comments>;

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Comments {
  declare _id: string;

  @Prop({ required: true })
  text: string;

  @Prop({ required: false, default: EntityStatus.DRAFT, enum: EntityStatus })
  entityStatus: EntityStatus;

  @Prop({ required: true })
  authorId: string;

  @Prop({ required: true })
  postId: string;

  @Virtual({
    get: function (this: Comments) {
      return this._id;
    },
  })
  id: string;

  declare createdAt: Date;
  declare updatedAt: Date;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);
