import React, { useEffect, useState } from "react";
import TimerWrapper from "./TimerWrapper";

// setTimeout is a closure , i.e it uses only the current value of the variables in the current time.

const Challenge3 = () => {
  return (
    <>
      <h3>Count Down timer</h3>
      <TimerWrapper duration={20 * 10000} />
    </>
  );
};

export default Challenge3;
