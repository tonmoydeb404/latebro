import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Resume } from './resume.entity';

@Schema()
export class ResumeExperience extends Document {
  @Prop({ required: true, type: String })
  companyName: string;

  @Prop({ required: false, type: String })
  description: string;

  @Prop({ required: false, type: String })
  position: string;

  @Prop({ required: false, type: String, default: null })
  startedAt: string;

  @Prop({ required: false, type: String, default: null })
  endedAt: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Resume' })
  resume: Resume | Types.ObjectId;
}

export const ResumeExperienceSchema =
  SchemaFactory.createForClass(ResumeExperience);
