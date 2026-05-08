import { useState } from "react";

const UseStateHook = () => {
  const [counterWithUseState, setCounterWithuseState] = useState(0);
  let counter = 0;
  return (
    <div>
         {console.log('re-rendering')}
      <h1 className="text-center">UseStateHook</h1>
      <button
        onClick={() => {
          counter++;
          console.log('counter', counter);
        }}
      >
        Increament with Normal Variable
      </button>{" "}
      : {counter} <br></br>
      <button onClick={() => {
        setCounterWithuseState(counterWithUseState + 1);
        console.log("Counter with Usestate", counterWithUseState)
      }}>  Increment With useState</button> : {counterWithUseState}
    </div>
  );
};
export default UseStateHook;
