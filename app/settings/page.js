"use client";
import Login from "../components/Login";

import { useAuth } from "../components/context/AuthContext";
import Link from "next/link";

function Settings() {
  const { user } = useAuth();
  return (
    <>
      <div className="container">
        <div className="row">
          {user ? (
            <>
              <div className="section__title page__title">Settings</div>
              <div className="setting__content">
                <div className="settings__sub--title">
                  Your Subscription plan
                </div>

                <div className="settings__text">basic</div>

                <Link href={"/choose-plan"}>
                  <button className="btn settings__login--btn">
                    Upgrade Plan
                  </button>
                </Link>
              </div>

              <div className="setting__content">
                <div className="settings__sub--title">Email</div>
                <div className="settings__text">hanna@gmail.com</div>
              </div>
            </>
          ) : (
            <Login />
          )}
        </div>
      </div>
    </>
  );
}

export default Settings;
