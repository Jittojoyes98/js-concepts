import React, { useState } from "react";

const Challenge2 = () => {
  const [currentId, setCurrentId] = useState(null);
  const data = [
    "Do I have to allow the use of cookies?",
    "How do I change my My Page password?",
    "What is BankID?",
    "Whose birth number can I use?",
  ];
  const handleId = (id) => {
    setCurrentId(id);
  };
  return (
    <div>
      {data.map((value, id) => (
        <AccordDiv
          value={value}
          id={id}
          key={id}
          handleId={handleId}
          currentId={currentId}
        />
      ))}
    </div>
  );
};

const AccordDiv = ({ value, id, handleId, currentId }) => {
  const [down, setDown] = useState(false);
  const handleClick = () => {
    setDown(!down);
    if (down) {
      handleId(null);
    } else {
      handleId(id);
    }
  };
  return (
    <div>
      <span>{value}</span>
      <button onClick={handleClick}>{down ? "-" : "+"}</button>
      <div style={{ display: currentId === id ? "block" : "none" }}>
        <p>Heyy</p>
      </div>
    </div>
  );
};

export default Challenge2;
