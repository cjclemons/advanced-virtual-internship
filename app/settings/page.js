function Settings() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="section__title page__title">Settings</div>
          <div className="setting__content">
            <div className="settings__sub--title">Your Subscription plan</div>
            <div className="settings__text">premium</div>
            {/* remember to add a button if the user is not a premium */}
          </div>
          <div className="setting__content">
            <div className="settings__sub--title">Email</div>
            <div className="settings__text">hanna@gmail.com</div>
          </div>
          <div class="settings__login--wrapper">
            <img
              alt="login"
              srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogin.e313e580.png&amp;w=1080&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogin.e313e580.png&amp;w=3840&amp;q=75 2x"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogin.e313e580.png&amp;w=3840&amp;q=75"
              width="1033"
              height="712"
              decoding="async"
              data-nimg="1"
              loading="lazy"
              style="color: transparent;"
            />
            <div class="settings__login--text">
              Log in to your account to see your details.
            </div>
            <button class="btn settings__login--btn">Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
