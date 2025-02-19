// // import { User, UserDocument } from './schemas/user.entity';
// // import { Model } from 'mongoose';
// // import { InjectModel } from '@nestjs/mongoose';

// // export class UserService {
// //   constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

// //   async createUser(chatId: number, username?: string) {
// //     return this.userModel.create({ chatId, username });
// //   }
// // }



// import { Injectable, NotFoundException } from '@nestjs/common';
// import { User, UserDocument } from './schemas/user.entity';
// import { Model } from 'mongoose';
// import { InjectModel } from '@nestjs/mongoose';

// @Injectable()
// export class UserService {
//   constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

//   async createUser(chatId: number, username?: string) {
//     return this.userModel.create({ chatId, username });
//   }

//   async findAll(): Promise<User[]> {
//     return this.userModel.find().exec();
//   }

//   async findByChatId(chatId: number): Promise<User | null> {
//     return this.userModel.findOne({ chatId }).exec();
//   }

//   // Delete user by chatId
//   async deleteUser(chatId: number): Promise<{ message: string }> {
//     const result = await this.userModel.deleteOne({ chatId }).exec();
//     if (result.deletedCount === 0) {
//       throw new NotFoundException(`User with chatId ${chatId} not found`);
//     }
//     return { message: 'User deleted successfully' };
//   }
// }



import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getAllUsers() {
    return this.userModel.find().exec();
  }

  async getUserByChatId(chatId: number) {
    return this.userModel.findOne({ chatId }).exec();
  }

  async deleteUser(chatId: number) {
    return this.userModel.findOneAndDelete({ chatId }).exec();
  }

  async updateUser(chatId: number, updateData: Partial<User>) {
    return this.userModel.findOneAndUpdate({ chatId }, updateData, { new: true }).exec();
  }
}
