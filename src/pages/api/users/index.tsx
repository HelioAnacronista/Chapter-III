
//caso de uso;
import { NextApiRequest, NextApiResponse } from "next";

export default (req : NextApiRequest, res : NextApiResponse) => {
   const users = [ 
      {id: 1, name: 'Jhon'},
      {id: 2, name: 'raga'},
      {id: 3, name: 'die'},
   ]

   return res.json(users);
}