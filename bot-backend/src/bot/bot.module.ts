// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { User, UserSchema } from './schemas/user.entity';
// import { UserService } from './user.service';
// import { BotService } from './bot.service';

// @Module({
//   imports: [
//     MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), // Ensure correct import
//   ],
//   providers: [UserService],
//   exports: [UserService],
// })
// export class BotModule {}




import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.entity';
import { UserService } from './user.service';
import { BotService } from './bot.service';
import { UserController } from './user.controller';  // ✅ Import UserController

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), // Ensure correct import
  ],
  controllers: [UserController],  // ✅ Add UserController
  providers: [UserService, BotService],  // ✅ Ensure BotService is provided if needed
  exports: [UserService],
})
export class BotModule {}
