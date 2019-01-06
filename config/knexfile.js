"use strict";
exports.__esModule = true;
var Parameter_1 = require("../Parameter");
exports.knexConf = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: Parameter_1.Parameters.DB_USER,
        password: Parameter_1.Parameters.DB_PASSWORD,
        database: Parameter_1.Parameters.DB_NAME
    }
};
