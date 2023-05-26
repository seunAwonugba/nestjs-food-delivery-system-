import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUserDto';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create-user')
  async createUser(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    try {
      const createUser = await this.userService.createUser(createUserDto);
      return res.status(HttpStatus.CREATED).json({
        success: true,
        data: createUser,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
