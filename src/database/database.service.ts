import { Injectable } from '@nestjs/common';
import knex, { Knex } from 'knex';
import knexConfig from 'src/config';
@Injectable()
export class DatabaseService {
  private readonly knexInstance: Knex;

  constructor() {
    this.knexInstance = knex(knexConfig);
  }

  async checkDatabaseConnection(): Promise<void> {
    try {
      await this.knexInstance.raw('SELECT 1');
      console.log(
        'Connection to the database has been established successfully.',
      );
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  getKnexInstance(): Knex {
    return this.knexInstance;
  }
}
