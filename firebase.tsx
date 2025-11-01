"use client";

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

let app: any = null;

if (typeof window !== "undefined") {
  // ✅ Only run Firebase init in the browser, never during prerender
  if (!firebaseConfig.apiKey) {
    throw new Error("Missing Firebase config.");
  }

  app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
}

export const getClientAuth = () =>
  typeof window !== "undefined" && app ? getAuth(app) : null;

export const getClientDb = () =>
  typeof window !== "undefined" && app ? getFirestore(app) : null;