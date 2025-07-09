import React, { useState } from "react";
import Timer from "./Timer";

const TimerWrapper = ({ duration }) => {
  const [expired, setExpired] = useState(false);
  const handleRestart = () => {
    setExpired(false);
  };
  const Expired = () => {
    setExpired(true);
  };
  return !expired ? (
    <Timer duration={duration} Expired={Expired} />
  ) : (
    <button onClick={handleRestart}>Restart</button>
  );
};

export default TimerWrapper;
