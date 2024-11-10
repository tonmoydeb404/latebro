import { User } from '@/modules/user/entities/user.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Resume extends Document {
  @Prop({ required: true, type: String })
  title: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  user: User | Types.ObjectId;
}

export const ResumeSchema = SchemaFactory.createForClass(Resume);
