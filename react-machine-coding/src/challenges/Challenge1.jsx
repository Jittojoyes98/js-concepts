import { useCallback, useState } from "react";

const Challenge1 = ({ link }) => {
  const [count, setCount] = useState(0);

  const handleCount = (e) => {
    if (e.target.innerHTML == "+") {
      setCount(count + Number(constValue));
    } else {
      setCount(count - Number(constValue));
    }
  };
  const [constValue, setConstValue] = useState(1);
  const handleInputValue = (e) => {
    setConstValue(e.target.value);
  };
  return (
    <>
      <a href={link}>Challenge link</a>
      <p>{count}</p>

      <button style={{ marginRight: "10px" }} onClick={handleCount}>
        +
      </button>
      <button onClick={handleCount}>-</button>
      <div>
        <span style={{ marginRight: "10px" }}>Increment by</span>
        <input type="number" value={constValue} onChange={handleInputValue} />
      </div>
    </>
  );
};

export default Challenge1;
