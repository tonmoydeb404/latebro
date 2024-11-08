import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) public readonly model: Model<User>) {}

  // Controller Specific ----------------------------------------------------------------------

  async getAll() {
    return this.model.find().exec();
  }
}
