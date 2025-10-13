"use client";
import { createContext, useContext, useState } from "react";

const AuthModalContext = createContext();

export function AuthModalProvider({ children }) {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const openAuthModal = () => setIsAuthOpen(true);
  const closeAuthModal = () => setIsAuthOpen(false);

  return (
    <AuthModalContext.Provider value={{ isAuthOpen, openAuthModal, closeAuthModal }}>
      {children}
    </AuthModalContext.Provider>
  );
}

export function useAuthModal() {
  return useContext(AuthModalContext);
}


