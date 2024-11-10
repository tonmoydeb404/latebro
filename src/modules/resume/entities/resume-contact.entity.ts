import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Resume } from './resume.entity';

@Schema()
export class ResumeContact extends Document {
  @Prop({ required: false, type: String })
  phone: string;

  @Prop({ required: false, type: String })
  email: string;

  @Prop({ required: false, type: String })
  website: string;

  @Prop({ required: false, type: String })
  address: string;

  @Prop({ required: false, type: String, default: null })
  address_link: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Resume' })
  resume: Resume | Types.ObjectId;
}

export const ResumeContactSchema = SchemaFactory.createForClass(ResumeContact);
