"use client";
import { createContext, useContext, useState } from "react";

const AuthModalContext = createContext(null);

export const AuthModalProvider = ({ children }) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const openAuthModal = () => setIsAuthOpen(true);
  const closeAuthModal = () => setIsAuthOpen(false);

  return (
    <AuthModalContext.Provider
      value={{ isAuthOpen, openAuthModal, closeAuthModal }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};

export const useAuthModal = () => {
  const context = useContext(AuthModalContext);
  if (!context)
    throw new Error("useAuthModal must be used within AuthModalProvider");
  return context;
};
