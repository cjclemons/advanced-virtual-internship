// // pages/api/webhook.ts
// import { buffer } from "micro";
// import * as admin from "firebase-admin";
// import { NextApiRequest, NextApiResponse } from "next";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2025-09-30.clover",
// });

// // Firestore Admin SDK initialization
// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert({
//       projectId: process.env.FIREBASE_PROJECT_ID,
//       clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//       privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
//     }),
//   });
// }
// const db = admin.firestore();

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const buf = await buffer(req);
//   const sig = req.headers["stripe-signature"] as string;

//   let event: Stripe.Event;

//   try {
//     event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
//   } catch (err: any) {
//     console.error("Webhook Error:", err.message);
//     return res.status(400).send(`Webhook Error: ${err.message}`);
//   }

//   // ✅ Handle successful payment
//   if (event.type === "checkout.session.completed") {
//     const session = event.data.object as Stripe.Checkout.Session;

//     const userId = session.metadata?.userId;
//     const plan = session.metadata?.plan; // you must send this in your session creation

//     if (userId && plan) {
//       try {
//         const userRef = db.collection("users").doc(userId);
//         await userRef.set(
//           {
//             plan,
//             subscriptionStatus: "active",
//             stripeCustomerId: session.customer,
//             subscriptionId: session.subscription,
//           },
//           { merge: true }
//         );
//         console.log(`✅ Updated user ${userId} to plan ${plan}`);
//       } catch (err) {
//         console.error("❌ Failed to update Firestore:", err);
//         return res.status(500).send("Failed to update Firestore");
//       }
//     }
//   }

//   res.status(200).json({ received: true });
// }
