import React, { useState } from "react";

const Challenge5 = () => {
  const [track, setTrack] = useState(0);
  const [userName, setUserName] = useState("");
  const [passsword, setPassword] = useState("");

  const handleNext = () => {
    if (userName) {
      setTrack(1);
    }
  };
  const handleSubmit = () => {
    console.log(passsword, userName);
  };
  return (
    <>
      <h1>2 step form</h1>
      {track == 0 ? (
        <>
          <label>Username</label>
          <div>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
          </div>
          <button onClick={handleNext}>Next</button>
        </>
      ) : (
        <>
          <label>Password</label>
          <input
            type="passsword"
            onChange={(e) => setPassword(e.target.value)}
            value={passsword}
          />
          <button onClick={() => setTrack(0)}>Back</button>
          <button onClick={handleSubmit}>sumbit</button>
        </>
      )}
    </>
  );
};

export default Challenge5;
