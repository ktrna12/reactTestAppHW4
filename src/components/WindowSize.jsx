import { useEffect, useState } from "react";

const WindowSize = () => {
  const [width, setWidth] = useState(window.outerWidth);
  const [height, setHeight] = useState(window.outerHeight);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <h1>width: {width}</h1>
      <h1>height: {height}</h1>
    </div>
  );
};

export default WindowSize;
