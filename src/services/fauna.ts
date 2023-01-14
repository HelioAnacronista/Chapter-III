import { Client } from "faunadb";

//configuraçao do banco de services (http)
export const fauna = new Client({
  secret: process.env.FAUNADB_KEY,
});