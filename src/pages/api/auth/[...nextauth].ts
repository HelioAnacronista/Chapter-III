import { query as q } from "faunadb";

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

//client db fauna
import { fauna } from "../../../services/fauna";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  /*usado em produção (jwt nossa aplicação)
  jwt: {
    //chave precisa ser em node-jose-tools
    signingKey: process.env.SIGNING_KEY,
  }*/
  callbacks: {
    //salvar os dados do callbacks no banco de dados
    async session({ session }) {
      try {
        const userActiveSbuscriptions = await fauna.query(
          q.Get(
            q.Intersection([
              q.Match(
                q.Index("subscription_by_user_ref"),
                q.Select(
                  "ref",
                  q.Get(
                    q.Match(
                      q.Index("user_by_email"),
                      q.Casefold(session.user.email)
                    )
                  )
                )
              ),
              q.Match(q.Index("subscription_by_status"), "active"),
            ])
          )
        );

        return {
          ...session,
          activeSubscription: userActiveSbuscriptions,
        };
      } catch {
        return {
          ...session,
          activeSubscription: null,
        };
      }
    },
    async signIn({ user, account, profile }) {
      const { email } = user;

      try {
        await fauna.query(
          //Verificar ser não existe user, ele vai criar um novo doc.
          q.If(
            q.Not(
              q.Exists(
                q.Match(q.Index("user_by_email"), q.Casefold(user.email))
              )
            ),
            //essa parte é um condição do if
            q.Create(q.Collection("users"), { data: { email } }), //se não existe cria
            q.Get(q.Match(q.Index("user_by_email"), q.Casefold(user.email))) // busca se existe
          )
        );

        return true;
      } catch {
        return false;
      }
    },
  },
});
