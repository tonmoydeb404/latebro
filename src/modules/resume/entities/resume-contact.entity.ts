import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
}

export const ResumeContactSchema = SchemaFactory.createForClass(ResumeContact);
