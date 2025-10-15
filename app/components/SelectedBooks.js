function SelectedBooks() {
  return (
    <>
      <div className="for-you__title">Selected just for you</div>
      <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fthe-lean-startup.mp3?alt=media&amp;token=c2f2b1d4-eaf2-4d47-8c8a-7a8fd062a47e"></audio>
      <a className="selected__book" href="/book/f9gy1gpai8">
        <div className="selected__book--sub-title">
          How Constant Innovation Creates Radically Successful Businesses
        </div>
        <div className="selected__book--line"></div>
        <div className="selected__book--content">
          <figure
          // className="book__image--wrapper"
          // style="height: 140px; width: 140px; min-width: 140px;"
          >
            <img
            //   className="book__image"
            //   src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-lean-startup.png?alt=media&amp;token=087bb342-71d9-4c07-8b0d-4dd1f06a5aa2"
            //   alt="book"
            //   style="display: block;"
            />
          </figure>
          <div className="selected__book--text">
            <div className="selected__book--title">The Lean Startup</div>
            <div className="selected__book--author">Eric Ries</div>
            <div className="selected__book--duration-wrapper">
              <div className="selected__book--icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                </svg>
              </div>
              <div className="selected__book--duration">3 mins 23 secs</div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

export default SelectedBooks;
