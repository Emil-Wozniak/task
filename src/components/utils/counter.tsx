import React, { useEffect, useState } from 'react';

type CounterProps = {
  children: JSX.Element[];
  interval: number;
  current: number;
};

export const Counter = ({ children, interval, current }: CounterProps) => {
  const [seconds, setSeconds] = useState(0);
  const [tmp, setTmp] = useState(current);
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds !== children.length - 1) setSeconds(seconds + 1);
      else setSeconds(0);
    }, interval);
    if (tmp !== current) {
      setTmp(current);
      setSeconds(current);
    }
    return () => clearInterval(timer);
  });
  return <>{children[seconds]}</>;
};
