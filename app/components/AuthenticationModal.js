"use client";

import { useAuthModal } from "./context/AuthModalContext";
import Link from "next/link";
import { useState } from "react";
import LoginModal from "../components/modal/LoginModal";
import RegisterModal from "../components/modal/RegisterModal";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";

function AuthenticationModal() {
  const { isAuthOpen, closeAuthModal } = useAuthModal();
  const [showRegister, setShowRegister] = useState(false);
  console.log(showRegister);

  const openRegister = () => {
    setShowRegister(true);
  };
  const closeRegister = () => {
    setShowRegister(false);
  };

  if (!isAuthOpen) return null;
  return (
    <>
      <div className="auth__wrapper">
        <div className="auth">
          {showRegister ? (
            <RegisterModal closeRegister={closeRegister} />
          ) : (
            <LoginModal openRegister={openRegister} />
          )}

          <div className="auth__close--btn" onClick={closeAuthModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              height="28"
              width="28"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthenticationModal;
