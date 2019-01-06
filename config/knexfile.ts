import {Parameters} from "../Parameter";

export const knexConf = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: Parameters.DB_USER,
        password: Parameters.DB_PASSWORD,
        database: Parameters.DB_NAME,
    }
};
