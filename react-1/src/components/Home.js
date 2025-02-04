import React, { useState } from "react";
import Counter from "./Counter";
import IncreaseCounter from "./IncreaseCounter";

const Home = () => {
  let [a, setA] = useState(0);
  const increaseByThree = () => {
    setA((d) => d + 1);
    setA((d) => d + 1);
    setA((d) => d + 1);
  };
  return (
    <div>
      <Counter counterValue={a} />
      <IncreaseCounter increaseMe={increaseByThree} />
    </div>
  );
};

export default Home;
