"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const knexConfig = {
    client: process.env.DB_CLIENT,
    connection: {
        database: process.env.PG_DB_DEV,
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        host: process.env.PG_HOST_DEV,
        port: Number(process.env.PG_PORT),
    },
};
exports.default = knexConfig;
//# sourceMappingURL=index.js.map