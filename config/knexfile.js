"use strict";
exports.__esModule = true;
exports.knexConf = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
};
