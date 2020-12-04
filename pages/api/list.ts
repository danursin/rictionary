import { NextApiRequest, NextApiResponse } from "next";

const handler = (_req: NextApiRequest, res: NextApiResponse): void => {
    res.statusCode = 200;
    res.json([{ RictionartID: 5 }]);
};

export default handler;
