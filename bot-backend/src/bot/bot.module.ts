import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.entity';
import { UserService } from './user.service';
import { BotService } from './bot.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), // Ensure correct import
  ],
  providers: [UserService],
  exports: [UserService],
})
export class BotModule {}
