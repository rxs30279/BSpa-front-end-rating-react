import "./App.css";

import { useState } from "react";
// import star from "./images/icon-star.svg";
// Main app page which calls component functions
function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isActive, setIsActive] = useState(null);

  const handleSubmission = (submitted) => {
    setIsSubmitted(submitted);
  };

  const toggleIsActive = (index) => {
    setIsActive(index);
  };

  return (
    <main className="container">
      <div className="page">
        <div className="inner-page">
          {!isSubmitted ? (
            <>
              <StarHeader />
              <MainText />
              <InputButtons
                isActive={isActive}
                onToggleIsActive={toggleIsActive}
                onSubmission={handleSubmission}
              />
            </>
          ) : (
            <ThankYou isActive={isActive} />
          )}
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

function InputButtons({ isActive, onToggleIsActive, onSubmission }) {
  const handleClick = (index) => {
    onToggleIsActive(index);
  };

  const handleSubmit = () => {
    console.log("submitted", isActive);
    if (isActive !== null && isActive !== undefined) {
      onSubmission(true);
    } else {
      onSubmission(false);
    }
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
              onClick={() => handleClick(index)}
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

function ThankYou({ isActive }) {
  return (
    <section className="thankyou-page-content">
      <div className="thankyou-image"></div>
      <div className="text-orange"> You selected {isActive + 1} out of 5 </div>
      <h1>Thank You!</h1>
      <p>We appreciate you taking the time to give a rating.</p>
      <p>If you ever need more support, don't hesitate to get in touch!</p>
    </section>
  );
}
