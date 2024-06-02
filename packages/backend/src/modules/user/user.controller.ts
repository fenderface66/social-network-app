import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Post()
  async createUser(
    @Body('username') username: string,
    @Body('password') password: string,
  ): Promise<User> {
    return this.userService.createUser(username, password);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':username')
  async getUserByUsername(
    @Param('username') username: string,
  ): Promise<User | null> {
    return this.userService.findByUsername(username);
  }
}
