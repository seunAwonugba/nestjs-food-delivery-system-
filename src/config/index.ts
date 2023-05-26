import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import { Knex } from 'knex';

const knexConfig: Knex.Config = {
  client: process.env.DB_CLIENT,
  connection: {
    database: process.env.PG_DB_DEV,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST_DEV,
    port: Number(process.env.PG_PORT),
  },
};

export default knexConfig;
