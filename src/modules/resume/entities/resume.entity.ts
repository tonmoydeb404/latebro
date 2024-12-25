import { User } from '@/modules/user/entities/user.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ResumeContact } from './resume-contact.entity';
import { ResumeEducation } from './resume-education.entity';
import { ResumeExperience } from './resume-experience.entity';
import { ResumeLanguage } from './resume-language.entity';
import { ResumeProfile } from './resume-profile.entity';
import { ResumeProject } from './resume-project.entity';
import { ResumeSkill } from './resume-skill.entity';
import { ResumeSocial } from './resume-social.entity';

@Schema()
export class Resume extends Document {
  @Prop({ required: true, type: String })
  title: string;

  @Prop({ required: true, type: Types.ObjectId, ref: User.name })
  user: User | Types.ObjectId;

  @Prop({ required: true, type: Types.ObjectId, ref: ResumeProfile.name })
  profile: ResumeProfile | Types.ObjectId;

  @Prop({ required: true, type: Types.ObjectId, ref: ResumeContact.name })
  contact: ResumeContact | Types.ObjectId;
}

export const ResumeSchema = SchemaFactory.createForClass(Resume);

ResumeSchema.virtual('educations', {
  ref: ResumeEducation.name,
  localField: '_id',
  foreignField: 'resume',
});

ResumeSchema.virtual('experiences', {
  ref: ResumeExperience.name,
  localField: '_id',
  foreignField: 'resume',
});

ResumeSchema.virtual('languages', {
  ref: ResumeLanguage.name,
  localField: '_id',
  foreignField: 'resume',
});

ResumeSchema.virtual('projects', {
  ref: ResumeProject.name,
  localField: '_id',
  foreignField: 'resume',
});

ResumeSchema.virtual('skills', {
  ref: ResumeSkill.name,
  localField: '_id',
  foreignField: 'resume',
});

ResumeSchema.virtual('socials', {
  ref: ResumeSocial.name,
  localField: '_id',
  foreignField: 'resume',
});

ResumeSchema.set('toJSON', { virtuals: true });
ResumeSchema.set('toObject', { virtuals: true });
