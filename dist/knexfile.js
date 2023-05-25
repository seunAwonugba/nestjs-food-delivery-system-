"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const config = {
    development: {
        client: process.env.DB_CLIENT,
        connection: {
            database: process.env.PG_DB_DEV,
            user: process.env.PG_USER,
            password: process.env.PG_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
    staging: {
        client: process.env.DB_CLIENT,
        connection: {
            database: process.env.PG_DB_TEST,
            user: process.env.PG_USER,
            password: process.env.PG_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
    production: {
        client: process.env.DB_CLIENT,
        connection: {
            database: process.env.PG_DB_PROD,
            user: process.env.PG_USER,
            password: process.env.PG_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
};
module.exports = config;
//# sourceMappingURL=knexfile.js.map