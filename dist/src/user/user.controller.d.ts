import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUserDto';
import { Response } from 'express';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto, res: Response): Promise<Response<any, Record<string, any>>>;
}
