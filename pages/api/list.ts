import { NextApiRequest, NextApiResponse } from "next";

import { Rictionary } from "../../db/entities/Rictionary";
import { getDbConnection } from "../../db";

const handler = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    try {
        const connection = await getDbConnection();
        const list = await connection
            .createQueryBuilder(Rictionary, "r")
            .select(["r.RictionaryID", "r.RictionaryName"])
            .orderBy("r.RictionaryName", "ASC")
            .getMany();

        res.statusCode = 200;
        res.json(list);
    } catch (err) {
        res.statusCode = 500;
        res.send(err.message);
    }
};

export default handler;
