"use client";

import { useAuthModal } from "./context/AuthModalContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoginModal from "../components/modal/LoginModal";
import RegisterModal from "../components/modal/RegisterModal";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";

function AuthenticationModal() {
  const { isAuthOpen, closeAuthModal } = useAuthModal();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  console.log(showRegister);

  useEffect(() => {
    if (isAuthOpen) {
      // Whenever the modal opens, default to showing the login modal
      setShowLogin(true);
      setShowRegister(false);
    }
  }, [isAuthOpen]);

  const openLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const openRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const closeLogin = () => {
    setShowLogin(false);
    closeAuthModal;
  };
  const closeRegister = () => {
    setShowRegister(false);
    closeAuthModal;
  };

  if (!isAuthOpen) return null;
  return (
    <>
      <div className="auth__wrapper">
        <div className="auth">
          {showLogin && (
            <LoginModal closeLogin={closeLogin} openRegister={openRegister} />
          )}

          {showRegister && (
            <RegisterModal
              closeRegister={closeRegister}
              openLogin={openLogin}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default AuthenticationModal;
