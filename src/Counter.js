import React, { useState } from "react";
import Alert from "./Alert";

function Counter(props) {
  const { appname, incrementvalue, decrementvalue } = props;
  const [count, setCount] = useState(0);
  const [alert, setAlert] = useState("");
  const [alertShow, setAlertShow] = useState(false);

  function increment() {
    setCount(count + incrementvalue);
  }
  function decrement() {
    setCount(count - decrementvalue);
    if (count <= 0) {
      setCount(0);
    }
  }
  function reset() {
    setCount(0);
    setAlertShow(true);
    setAlert("Reset successfull");
  }
  return (
    <div className="text-center">
      <h1 className="text-center">{appname}</h1>
      <Alert alertShow={alertShow} alert={alert} />
      <h1>Count Value: {count}</h1>
      <button className="btn btn-primary" onClick={increment}>
        Increment
      </button>
      <button className="btn btn-secondary" onClick={decrement}>
        decrement
      </button>
      <button
        className="btn btn-warning"
        onClick={reset}
        disabled={count === 0}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
