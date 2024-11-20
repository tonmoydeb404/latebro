import { ResumeSocialType } from '@/common/enums/resume.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Resume } from './resume.entity';

@Schema()
export class ResumeSocial extends Document {
  @Prop({ required: true, type: String })
  title: string;

  @Prop({ required: true, type: String })
  url: string;

  @Prop({ required: true, enum: ResumeSocialType })
  type: ResumeSocialType;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Resume' })
  resume: Resume | Types.ObjectId;
}

export const ResumeSocialSchema = SchemaFactory.createForClass(ResumeSocial);
