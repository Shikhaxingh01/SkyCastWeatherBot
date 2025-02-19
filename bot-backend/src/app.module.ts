// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { ConfigModule } from '@nestjs/config';
// import { BotService } from './bot/bot.service';
// import { User, UserSchema } from './bot/schemas/user.entity'; // Updated path

// @Module({
//   imports: [
//     ConfigModule.forRoot(),
//     MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb+srv://jahnvichaurasia481:2kjNAChDbp0MVSLE@cluster0.jlgjffa.mongodb.net/Telegram_Bot'),
//     MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), 
//   ],
//   providers: [BotService],
// })
// export class AppModule {}


// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { ConfigModule } from '@nestjs/config';
// import { BotModule } from './bot/bot.module';  // ✅ Import BotModule (includes BotService)

// @Module({
//   imports: [
//     ConfigModule.forRoot(),
//     MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb+srv://jahnvichaurasia481:2kjNAChDbp0MVSLE@cluster0.jlgjffa.mongodb.net/Telegram_Bot'),
//     BotModule,  // ✅ Register BotModule
//   ],
// })
// export class AppModule {}



import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { BotModule } from './bot/bot.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI || ''),
    BotModule,
  ],
})
export class AppModule {}
