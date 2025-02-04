import React from "react";

const IncreaseCounter = (props) => {
  const selfIncreaseByThree = () => {
    console.log(props.increaseMe());
  };
  return <button onClick={selfIncreaseByThree}>Increase</button>;
};

export default IncreaseCounter;
