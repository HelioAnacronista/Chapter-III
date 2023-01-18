//precisa instlar o cli do stripe para e deixar rodando para fucionar 

import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
   console.log('evento recebido');


   res.status(200).json({ok: true});
}