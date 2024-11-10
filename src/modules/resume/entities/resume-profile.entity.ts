import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Resume } from './resume.entity';

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

  @Prop({ required: true, type: Types.ObjectId, ref: 'Resume' })
  resume: Resume | Types.ObjectId;
}

export const ResumeProfileSchema = SchemaFactory.createForClass(ResumeProfile);
