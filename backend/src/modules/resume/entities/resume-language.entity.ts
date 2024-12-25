import { ResumeLanguageExperience } from '@/common/enums/resume.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Resume } from './resume.entity';

@Schema()
export class ResumeLanguage extends Document {
  @Prop({ required: true, type: String })
  title: string;

  @Prop({ required: true, enum: ResumeLanguageExperience })
  experience: ResumeLanguageExperience;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Resume' })
  resume: Resume | Types.ObjectId;
}

export const ResumeLanguageSchema =
  SchemaFactory.createForClass(ResumeLanguage);
