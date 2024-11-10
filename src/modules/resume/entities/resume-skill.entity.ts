import { ResumeSkillExperience } from '@/common/enums/resume.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Resume } from './resume.entity';

@Schema()
export class ResumeSkill extends Document {
  @Prop({ required: true, type: String })
  title: string;

  @Prop({ required: true, enum: ResumeSkillExperience })
  experience: ResumeSkillExperience;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Resume' })
  resume: Resume | Types.ObjectId;
}

export const ResumeSkillSchema = SchemaFactory.createForClass(ResumeSkill);
