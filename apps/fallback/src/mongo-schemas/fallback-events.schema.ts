import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { HydratedDocument } from 'mongoose';

export type FallbackDocument = HydratedDocument<FallbackEvents>;

@Schema({
  timestamps: true,
})
export class FallbackEvents {
  declare _id: string;

  @Prop({ required: false, default: {} })
  data: object;

  @Prop({ required: true })
  eventType: string;

  @Prop({ required: true })
  triggerAt: Date;

  @Prop({ required: true })
  queue: string;
}

export const FallbackSchema = SchemaFactory.createForClass(FallbackEvents);
