/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

import { getSession } from "next-auth/react";
import { stripe } from "../../services/stripe";

import { query as q } from "faunadb";
import { fauna } from "../../services/fauna";

type User = {
  ref: {
    id: string;
  };
  data: {
    stripe_customer_id: string;
  };
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    //Pega o usuario pelos cookies
    const session = await getSession({ req });

    const user = await fauna.query<User>(
      q.Get(q.Match(q.Index("user_by_email"), q.Casefold(session.user.email)))
    );

    let customerId = user.data.stripe_customer_id;

    //Criar um customer no stripe
    if (!customerId) {
      const stripeCustomer = await stripe.customers.create({
        email: session.user.email,
        // metadata
      });

      await fauna.query(
        q.Update(q.Ref(q.Collection("users"), user.ref.id), {
          data: {
            stripe_customer_id: stripeCustomer.id,
          },
        })
      );

      customerId = stripeCustomer.id;
    }

    //Criar um sessao no stripe
    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      //customer identificar o usuario
      customer: customerId,
      payment_method_types: ["card"],
      billing_address_collection: "required",
      line_items: [{ price: "price_1MPQQSFq3MJVu9cb828ccQIl", quantity: 1 }],
      mode: "subscription",
      allow_promotion_codes: true,
      success_url: "http://localhost:3000/posts",
      cancel_url: "http://localhost:3000",
    });

    return res.status(200).json({ sessionId: stripeCheckoutSession.id });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
};
