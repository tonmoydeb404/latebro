import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Resume } from './resume.entity';

@Schema()
export class ResumeProject extends Document {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: false, type: String })
  description: string;

  @Prop({ required: false, type: String, default: null })
  previewUrl: string;

  @Prop({ required: false, type: String, default: null })
  sourceUrl: string;

  @Prop({ required: false, type: String, default: null })
  caseStudyUrl: string;

  @Prop({ required: true, type: [String], default: [] })
  tools: string[];

  @Prop({ required: true, type: Types.ObjectId, ref: 'Resume' })
  resume: Resume | Types.ObjectId;
}

export const ResumeProjectSchema = SchemaFactory.createForClass(ResumeProject);
