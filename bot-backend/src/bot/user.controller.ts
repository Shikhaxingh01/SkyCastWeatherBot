// import { Controller, Get, Param, Delete } from '@nestjs/common';
// import { UserService } from './user.service';
// import { User } from './schemas/user.entity';

// @Controller('users')
// export class UserController {
//   constructor(private readonly userService: UserService) {}

//   @Get()
//   async getAllUsers(): Promise<User[]> {
//     return this.userService.findAll();
//   }

//   @Get(':chatId')
//   async getUserByChatId(@Param('chatId') chatId: number): Promise<User | null> {
//     return this.userService.findByChatId(chatId);
//   }

//   // Delete user endpoint
//   @Delete(':chatId')
//   async deleteUser(@Param('chatId') chatId: number): Promise<{ message: string }> {
//     return this.userService.deleteUser(chatId);
//   }
// }



import { User } from './schemas/user.entity';
import { Controller, Get, Delete, Patch, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users') // API base URL: http://localhost:5000/users
export class UserController {
constructor(private readonly userService: UserService) {}

@Get()
async getAllUsers() {
    return this.userService.getAllUsers();
}

@Get(':chatId')
async getUserByChatId(@Param('chatId') chatId: string) {
    return this.userService.getUserByChatId(Number(chatId));
}

@Delete(':chatId')
async deleteUser(@Param('chatId') chatId: string) {
    return this.userService.deleteUser(Number(chatId));
}

@Patch(':chatId')
async updateUser(@Param('chatId') chatId: string, @Body() updateData: Partial<User>) {
    return this.userService.updateUser(Number(chatId), updateData);
}
}
