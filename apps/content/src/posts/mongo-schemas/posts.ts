import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { HydratedDocument } from 'mongoose';

export type PostsDocument = HydratedDocument<Posts>;

@Schema({
  timestamps: true,
})
export class Posts {
  declare _id: string;

  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  authorId: string;
}

export const PostsSchema = SchemaFactory.createForClass(Posts);
