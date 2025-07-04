import { useState } from "react";
import "./App.css";
import Rating from "./components/Rating/Rating";
import Result from "./components/Result/Result";

function App() {
  const [rate, setRate] = useState(null);
  const [submit, setSubmit] = useState(false);
  return (
    <>
      {!submit ? (
        <Rating rate={rate} setRate={setRate} setSubmit={setSubmit} />
      ) : (
        <Result rate={rate} />
      )}
    </>
  );
}

export default App;
