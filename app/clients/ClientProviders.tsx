"use client";

import { Provider } from "react-redux";
import { store } from "@/app/redux/store";
import { AuthProvider } from "@/app/components/context/AuthContext";
import { AuthModalProvider } from "@/app/components/context/AuthModalContext";
import AuthenticationModal from "@/app/components/AuthenticationModal";
import AppWrapper from "@/app/components/wrappers/AppWrapper";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <AuthModalProvider>
          <AppWrapper>
            {children}
            <AuthenticationModal />
          </AppWrapper>
        </AuthModalProvider>
      </AuthProvider>
    </Provider>
  );
}
