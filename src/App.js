import "./App.css";

import { useState } from "react";
// import star from "./images/icon-star.svg";
// Main app page which calls component functions
function App() {
  return (
    <main className="container">
      <div className="page">
        <div className="inner-page">
          <StarHeader />
          <MainText />
          <InputButtons />
        </div>
      </div>
    </main>
  );
}

export default App;

function StarHeader() {
  return (
    <div className="circle-container">
      <header className="circle-centre-star"></header>;
    </div>
  );
}

function MainText() {
  return (
    <section className="central-text">
      <h1 className="main-title">How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </section>
  );
}

function InputButtons() {
  const [isActive, setIsActive] = useState(null);
  const toogleIsActive = (i) => {
    console.log(i);
    setIsActive(i);
  };

  const handleSubmit = () => {
    // Perform the desired action with the selectedButton value
    console.log("isActive button:", isActive);
  };
  return (
    <div className="input-component">
      <div className="input-buttons">
        {Array(5)
          .fill()
          .map((_, index) => (
            <button
              key={index}
              className={`button-number-round ${
                isActive === index
                  ? "selected-round-button"
                  : "hover-grey-round-button"
              }`}
              onClick={() => toogleIsActive(index)}
            >
              {index + 1}
            </button>
          ))}
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
