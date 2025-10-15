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
  const [activeModal, setActiveModal] = useState(null); // "login" or "register"

  useEffect(() => {
    if (isAuthOpen) {
      setActiveModal("login"); // default to login when modal opens
    }
  }, [isAuthOpen]);

  const openLogin = () => setActiveModal("login");
  const openRegister = () => setActiveModal("register");
  const closeModal = () => {
    setActiveModal(null);
    closeAuthModal();
  };

  if (!isAuthOpen) return null;
  return (
    <>
      <div className="auth__wrapper">
        <div className="auth">
          {activeModal === "login" && (
            <LoginModal closeLogin={closeModal} openRegister={openRegister} />
          )}
          {activeModal === "register" && (
            <RegisterModal closeRegister={closeModal} openLogin={openLogin} />
          )}
        </div>
      </div>
    </>
  );
}

export default AuthenticationModal;
