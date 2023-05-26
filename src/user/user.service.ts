import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/createUserDto';
import { UserModel } from 'src/models/UserModel';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserModel> {
    const knex = this.databaseService.getKnexInstance();

    const query = `
      INSERT INTO ${UserModel.tableName} (first_name, last_name, email)
      VALUES (:firstName, :lastName, :email)
      RETURNING *
    `;

    const params = {
      firstName: createUserDto.first_name,
      lastName: createUserDto.last_name,
      email: createUserDto.email,
    };
    const result = await knex.raw(query, params);

    const [user] = result.rows;

    return user;
  }
}
