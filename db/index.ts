import { Connection, createConnection } from "typeorm";

export const createDbConnection = (): Promise<Connection> => {
    const { DB_HOST: host, DB_CATALOG: database, DB_USERNAME: username, DB_PASSWORD: password } = process.env;
    return createConnection({
        type: "mssql",
        host,
        database,
        username,
        password,
        entities: [__dirname + "/entity/*.js"],
        synchronize: false
    });
};
