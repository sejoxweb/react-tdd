import { useState } from "react";

const SuperCounter = ({ initialValue }) => {
  const [counter, setCounter] = useState(initialValue ?? 0);
  const plus = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const minus = () => {
    setCounter((prevCounter) => {
      const result = prevCounter - 1;
      if (result < 0) {
        return 0;
      }
      return result;
    });
  };

  return (
    <div>
      <h1>Super Counter</h1>
      <button onClick={minus}>minus</button>
      <span>{counter}</span>
      <button onClick={plus}>plus</button>
    </div>
  );
};

export default SuperCounter;
