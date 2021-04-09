import React, { useEffect } from "react";
import { useFlasher } from '../hooks/useFlasher';
import useIncrementTime from "../hooks/useIncrementTime";
import { useTrackedState } from "./../state";

const Additional = () => {
  const state = useTrackedState();
  const increment = useIncrementTime();

  useEffect(() => {
    setInterval(increment, 1000)
    console.log("log additonal");
  }, [increment]);
  return <div ref={useFlasher()}>Timer: {state.time}</div>;
};
export default React.memo(Additional);
