"use client";
import GoogleIcon from "next/image";
import { useAuthModal } from "./context/AuthModalContext";

function AuthenticationModal() {
  const { isAuthOpen, closeAuthModal } = useAuthModal();
  console.log("AuthenticationModal isAuthOpen:", isAuthOpen);
  if (!isAuthOpen) return null;
  return (
    <>
      <div className="auth__wrapper">
        <div className="auth">
          <div className="auth__content">
            <div className="auth__title">Log in to Summarist</div>
            <button className="btn guest__btn--wrapper">
              <figure className="google__icon--mask guest__icon--mask"></figure>
              <div>Login as a Guest</div>
            </button>
            <div className="auth__separator">
              <span className="auth__separator--text">or</span>
            </div>
            <button className="btn google__btn--wrapper">
              <figure className="google__icon--mask">
                <GoogleIcon src="/google.png" alt="" width={500} height={300} />
              </figure>
              <div>Login with Google</div>
            </button>
            <div className="auth__separator">
              <span className="auth__separator--text">or</span>
            </div>
            <form className="auth__main--form">
              <input
                className="auth__main--input"
                type="text"
                placeholder="Email Address"
              />
              <input
                className="auth__main--input"
                type="password"
                placeholder="Password"
              />
              <button className="btn">
                <span>Login</span>
              </button>
            </form>
          </div>
          <div className="auth__forgot--password">Forgot your password?</div>
          <button className="auth__switch--btn">Don't have an account?</button>
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
