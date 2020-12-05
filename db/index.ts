import { Connection, createConnection, getConnectionManager } from "typeorm";

import { Rictionary } from "./entities/Rictionary";

export const getDbConnection = async (): Promise<Connection> => {
    const mgr = getConnectionManager();
    if (mgr.has("default")) {
        return mgr.get();
    }

    const { DB_HOST: host, DB_CATALOG: database, DB_USERNAME: username, DB_PASSWORD: password } = process.env;
    return createConnection({
        type: "mssql",
        host,
        database,
        username,
        password,
        logging: ["query", "error"],
        entities: [Rictionary],
        synchronize: false,
        options: {
            enableArithAbort: true
        }
    });
};
