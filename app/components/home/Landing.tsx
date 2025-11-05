"use client";

import LandingImage from "next/image";
import { useAuthModal } from "../context/AuthModalContext";

function Landing() {
  const { openAuthModal } = useAuthModal();
  return (
    <>
      <section id="landing">
        <div className="container">
          <div className="row">
            <div className="landing__wrapper">
              <div className="landing__content">
                <div className="landing__content__title">
                  Gain more knowledge <br className="remove--tablet" />
                  in less time
                </div>
                <div className="landing__content__subtitle">
                  Great summaries for busy people,
                  <br className="remove--tablet" />
                  individuals who barely have time to read,
                  <br className="remove--tablet" />
                  and even people who don’t like to read.
                </div>
                <button
                  className="btn home__cta--btn"
                  onClick={() => {
                    openAuthModal();
                  }}
                >
                  Login
                </button>
              </div>
              <figure className="landing__image--mask">
                <LandingImage
                  src="/landing.png"
                  alt=""
                  width={500}
                  height={300}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
