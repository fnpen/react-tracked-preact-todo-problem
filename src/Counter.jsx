import React, { memo, StrictMode, useCallback, useEffect, useState } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';
import { useFlasher } from './hooks/useFlasher';


const context = createContext(null);


const Additional = memo(() => {
  const time = useContextSelector(context, v => {
    console.log(v);

    return v[0].time;
  });
  const setState = useContextSelector(context, v => v[1]);

  const increment = useCallback(() => setState(s => ({
    ...s,
    time: s.time + 1,
  })), [ setState]);

  useEffect(() => {
    setInterval(increment, 1000)
    console.log("log additonal");
  }, [increment]);

  return <div ref={useFlasher()}>Timer: {time}</div>;
});


const Counter1 = () => {
  const count1 = useContextSelector(context, v => v[0].count1);
  const setState = useContextSelector(context, v => v[1]);
  const increment = () => setState(s => ({
    ...s,
    count1: s.count1 + 1,
  }));
  return (
    <div ref={useFlasher()}>
      <span>Count1: {count1}</span>
      <button type="button" onClick={increment}>+1</button>
      {Math.random()}
    </div>
  );
};

const Counter2 = () => {
  const count2 = useContextSelector(context, v => v[0].count2);
  const setState = useContextSelector(context, v => v[1]);
  const increment = () => setState(s => ({
    ...s,
    count2: s.count2 + 1,
  }));
  return (
    <div ref={useFlasher()}>
      <span>Count2: {count2}</span>
      <button type="button" onClick={increment}>+1</button>
      {Math.random()}
    </div>
  );
};

const StateProvider = ({ children }) => {
  const [state, setState] = useState({ count1: 0, count2: 0, time: 0 });
  return (
    <context.Provider value={[state, setState]}>
      <div>
        {children}
      </div>
    </context.Provider>
  );
};

export const App = () => (
  <StrictMode>
    <StateProvider>
      <Counter1 />
      <Counter2 />
      <Additional/>
    </StateProvider>
  </StrictMode>
);
