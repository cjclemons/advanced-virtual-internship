// pages/api/create-checkout-session.ts
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-09-30.clover",
});

// Define valid plan keys
const PRICE_LOOKUP = {
  premium: "price_id_for_monthly",      // Replace with actual Stripe Price ID
  premium_plus: "price_id_for_yearly",  // Replace with actual Stripe Price ID
} as const;

type Plan = keyof typeof PRICE_LOOKUP; // 'premium' | 'premium_plus'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  const { plan, userId } = req.body;

  // Validate plan type
  if (!plan || !PRICE_LOOKUP.hasOwnProperty(plan)) {
    return res.status(400).json({ error: "Invalid plan provided." });
  }

  try {
    const selectedPlan = plan as Plan;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price: PRICE_LOOKUP[selectedPlan],
          quantity: 1,
        },
      ],
      metadata: {
        userId,
      },
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error", error);
    return res.status(500).json({ error: "Stripe session creation failed." });
  }
}