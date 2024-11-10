import { HashService } from '@/common/services/hash.service';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

// Hash password before saving
UserSchema.pre('save', async function (next) {
  const user = this as User;
  const hashService = new HashService();

  if (!user.isModified('password')) return next();

  user.password = await hashService.hash(user.password);

  next();
});
