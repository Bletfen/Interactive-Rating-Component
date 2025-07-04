import "./rating.css";
import Star from "/images/icon-star.svg";
import { useState } from "react";
export default function Rating({ rate, setRate, setSubmit }) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="container">
      <div className="img-text-wrapper">
        <div className="svg-wrapper">
          <img src={Star} alt="star-icon" />
        </div>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="button-wrapper">
        {numbers.map((item) => (
          <button
            key={item}
            className={`rating-button ${rate === item ? "checked" : ""}`}
            onClick={() => setRate(item)}
          >
            <span className={` ${rate === item ? "checked" : ""}`}>{item}</span>
          </button>
        ))}
      </div>
      <div className="submit-button-wrapper">
        <button
          className="submit-button"
          onClick={() => rate && setSubmit(true)}
        >
          <span className="submit-button-text">SUBMIT</span>
        </button>
      </div>
    </div>
  );
}
