//precisa instlar o cli do stripe para e deixar rodando para fucionar
import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "stream";
import Stripe from "stripe";
import { stripe } from "../../services/stripe";

//fazer a leitura das strings (dados da requsiçao webhooks)
const buffer = async (readable: Readable) => {
  const chunks = [];

  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }

  return Buffer.concat(chunks);
};

//desabilitar a config para o buffer
export const config = {
  api: {
    bodyParser: false,
  },
};

const RelevantEvents = new Set([
   'checkout.session.complented'
])

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const buf = await buffer(req);

    const secret = req.headers["stripe-signature"];

    let event : Stripe.Event;

    //Testa as variavias para seguraça 
    //se as duas for verdadeiro ele constructEvent nosso obj de evento
    try {
      event = stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
      return res.status(400).send(`Webhook error: ${err.message}`);
    }

    const type = event.type

    if(RelevantEvents.has(type)) {
      //faz algo
    }

    res.json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
};
