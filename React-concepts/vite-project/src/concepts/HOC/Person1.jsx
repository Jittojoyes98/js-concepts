import React from "react";
import Hoc from "./Hoc";

const Person1 = ({handleIncrease,count}) => {
  return (
      <>
      <h1>Hi first person , Your count is {count}</h1>
      <button onClick={handleIncrease}>Increase PERSON 1</button>
      </>
  )
};

export default Hoc(Person1);
