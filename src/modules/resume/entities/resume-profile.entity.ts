import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ResumeProfile extends Document {
  @Prop({ required: false, type: String })
  name: string;

  @Prop({ required: false, type: String })
  profession: string;

  @Prop({ required: false, type: String })
  bio: string;

  @Prop({ required: false, type: String, default: null })
  avatar: string;
}

export const ResumeProfileSchema = SchemaFactory.createForClass(ResumeProfile);
