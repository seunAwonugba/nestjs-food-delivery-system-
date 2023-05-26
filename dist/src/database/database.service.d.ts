import { Knex } from 'knex';
export declare class DatabaseService {
    private readonly knexInstance;
    constructor();
    checkDatabaseConnection(): Promise<void>;
    getKnexInstance(): Knex;
}
