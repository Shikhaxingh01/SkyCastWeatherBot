import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { BotService } from './bot/bot.service';
import { User, UserSchema } from './bot/schemas/user.entity'; // Updated path

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), 
  ],
  providers: [BotService],
})
export class AppModule {}
