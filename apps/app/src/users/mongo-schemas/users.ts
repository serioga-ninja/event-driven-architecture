import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<Users>;

@Schema({
  timestamps: true,
})
export class Users {
  declare _id: string;

  @Prop({ required: false, default: '' })
  firstName: string;

  @Prop({ required: false, default: '' })
  lastName: string;

  @Prop({ required: false, default: '' })
  phoneNumber: string;

  @Prop({ required: true, default: false })
  phoneNumberConfirmed: boolean;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, default: false })
  emailConfirmed: boolean;

  @Prop({ required: true })
  password: string;

  @Prop({ required: false, default: false })
  isTfaEnabled: boolean;

  @Prop({ required: false, default: null, select: false })
  tfaSecret: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
