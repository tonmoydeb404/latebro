import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Resume } from './resume.entity';

@Schema()
export class ResumeEducation extends Document {
  @Prop({ required: true, type: String })
  instituteName: string;

  @Prop({ required: false, type: String })
  description: string;

  @Prop({ required: false, type: String })
  subject: string;

  @Prop({ required: false, type: String, default: null })
  startedAt: string;

  @Prop({ required: false, type: String, default: null })
  endedAt: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Resume' })
  resume: Resume | Types.ObjectId;
}

export const ResumeEducationSchema =
  SchemaFactory.createForClass(ResumeEducation);
