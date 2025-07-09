import React from "react";
import Hoc from "./Hoc";

const Person2 = ({handleIncrease,count}) => {
  return (
      <>
      <h1>Hi seccond person , Your count is {count}</h1>
      <button onClick={handleIncrease}>Increase PERSON 2</button>
      </>
  )
};

export default Hoc(Person2);
