import React, { useEffect, useState } from "react";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const Timer = ({ duration, Expired }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
    if (time <= 0) {
      Expired && Expired();
      clearTimeout(timeId);
    }
    return () => clearTimeout(timeId);
  }, [time]);

  const getFormattedTIme = () => {
    const days = Math.floor(time / DAY);
    const hours = Math.floor((time % DAY) / HOUR);
    const minutes = Math.floor((time % HOUR) / MINUTE);
    const seconds = Math.floor((time % MINUTE) / SECOND);
    return `${days}:${hours}:${minutes}:${seconds}`;
  };

  return getFormattedTIme(time);
};

export default Timer;
