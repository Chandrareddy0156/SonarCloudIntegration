import React, { useEffect, useState } from "react";

type Props = {
  title?: string;
};

const SonarTest: React.FC<Props> = ({ title }) => {
  const [count, setCount] = useState(0);
 

  
  const increment = () => {
    if (count > 5) {
      console.log("Count is greater than 5");
    }

    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Component mounted");
  }); 

 
  

  return (
    <>
      <h2>{title}</h2>

      <p>Count: {count}</p>
     

      <button onClick={increment}>Increment</button>
    </>
  );
};

export default SonarTest;
