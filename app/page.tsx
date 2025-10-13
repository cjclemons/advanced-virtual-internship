"use client"
import { useState } from "react";

import Image from "next/image";
import Navbar from "./components/home/Navbar";
import Landing from "./components/home/Landing";
import Features from "./components/home/Features";
import Reviews from "./components/home/Reviews";
import Numbers from "./components/home/Numbers";
import Footer from "./components/home/Footer";
import AuthenticationModal from "./components/AuthenticationModal";

export default function Home() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  return (
    <>
      <div className="body">
        <Navbar />
        <Landing />
        <Features />
        <Reviews />
        <Numbers/>
        <Footer />
      </div>
    </>
  );
}
