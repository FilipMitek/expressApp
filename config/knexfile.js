"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
knex = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'password',
        database: 'FirstDB'
    }
};
var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'your_database_user',
        password: 'your_database_password',
        database: 'myapp_test'
    }
});
