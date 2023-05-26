import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/createUserDto';
import { UserModel } from 'src/models/UserModel';
export declare class UserService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    createUser(createUserDto: CreateUserDto): Promise<UserModel>;
}
