import { useEffect, useState, useRef } from "react";
import Country from "./Country";
import Capitals from "./Capitals";
const Main = () => {
  const alertCount = useRef(0);
  const [count, setCount] = useState(0);


  function alertMessage() {
    alertCount.current = alertCount.current + 1;
    alert("Alert clicked " + alertCount.current + " times");
  }

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <div>{count}</div>

      <div>
        <button onClick={alertMessage}>Alert+</button>
      </div>
    </div>
  );
};

export default Main;