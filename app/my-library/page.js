import SavedBooks from "../components/SavedBooks"
import FinishedBooks from "../components/FinishedBooks"




function MyLibrary() {
  return (
    <>
      <div className="row">
        <div className="container">
          <SavedBooks/>
          <FinishedBooks/>
        </div>
      </div>
    </>
  );
}

export default MyLibrary;
