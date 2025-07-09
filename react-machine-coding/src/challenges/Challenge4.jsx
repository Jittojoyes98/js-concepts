import React, { useEffect, useRef } from "react";

const Challenge4 = ({ focus }) => {
  const inputRef = useRef(null);
  useEffect(() => {
      inputRef.current.focus();
  }, []);
  return <input type="text" ref={inputRef} />;
};

export default Challenge4;
