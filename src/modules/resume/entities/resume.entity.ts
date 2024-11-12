import { User } from '@/modules/user/entities/user.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ResumeContact } from './resume-contact.entity';
import { ResumeProfile } from './resume-profile.entity';

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
