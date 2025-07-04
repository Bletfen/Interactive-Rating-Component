import "./result.css";
import Image from "/images/illustration-thank-you.svg";

export default function Result({ rate }) {
  return (
    <div className="result-container">
      <div className="image-wrapper">
        <img src={Image} alt="img" />
      </div>
      <div className="selected-wrapper">
        <span>You selected {rate} out of 5</span>
      </div>
      <div className="thank-you-wrapper">
        <h2>Thank you!</h2>
        <p className="thank-you-p">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
