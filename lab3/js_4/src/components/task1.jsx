import React, { useState, useRef } from "react";

export default function task1() {
  const [value, setValue] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  const start = (n) => {
    if (running) return;

    setValue(n);
    setRunning(true);

    timerRef.current = setInterval(() => {
      setValue((prev) => {
        if (prev <= 0) {
          clearInterval(timerRef.current);
          setRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stop = () => {
    clearInterval(timerRef.current);
    setRunning(false);
  };

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => start(10)}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}
