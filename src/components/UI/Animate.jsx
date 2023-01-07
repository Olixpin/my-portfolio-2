import React, { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";

const Animate = ({ children }) => {
  const parent = useRef(null);
  useEffect(() => {
    if (parent.current) {
      autoAnimate(parent.current);
    }
  }, [parent]);

  return <div ref={parent}>{children}</div>;
};

export default Animate;
