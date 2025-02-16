import { User, UserDocument } from './schemas/user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(chatId: number, username?: string) {
    return this.userModel.create({ chatId, username });
  }
}
