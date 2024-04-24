import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [start, setStart] = useState(10);
  useEffect(() => {
    const interval = setInterval(() => {
      setStart((s) => {
        if (s === 0) {
          clearInterval(interval);
          return s;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Счётчик: {start}</h1>
    </div>
  );
};

export default CountdownTimer;
