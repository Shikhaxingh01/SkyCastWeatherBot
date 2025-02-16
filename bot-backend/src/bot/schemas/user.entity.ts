import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  chatId: number;

  @Prop()
  username?: string;

  @Prop({ default: new Date() })
  createdAt: Date;

  @Prop({ default: false })
  subscribed: boolean;
}


export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
