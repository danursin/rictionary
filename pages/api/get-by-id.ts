import type { NextApiRequest, NextApiResponse } from "next";

import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { RictionaryItem } from "../../types";
import dynamodb from "../../db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<RictionaryItem | string>) {
    const { id } = req.query as { id: string };
    if (!id) {
        res.status(400).send("Missing required parameter 'id'");
        return;
    }

    const { Item } = await dynamodb.send(new GetCommand({
        TableName: "rictionary",
        Key: {
            PK: id
        }
    }));

    if(!Item){
        res.status(404).send("Item not found");
        return;
    }

    res.status(200).json(Item as RictionaryItem);
}