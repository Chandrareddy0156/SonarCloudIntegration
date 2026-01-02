import React ,{ useState } from "react";
function App() {
  const [count, setCount] = useState(4);

  function decrementVal() {
    setCount((prevCount) => prevCount - 1);
  }

  
  function incrementVal() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrementVal}>-</button>
      <span>{count}</span>
      <button onClick={incrementVal}>+</button>
    </>
  );
}

export default App;
