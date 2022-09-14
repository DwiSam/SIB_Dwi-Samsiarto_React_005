import React, { useState } from "react";

const Function = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  setInterval(() => tick(), 1000);

  return (
    <div className="App-Clock">
      <h1>Realtime CLOCK</h1>
      <hr />
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
};

export default Function;