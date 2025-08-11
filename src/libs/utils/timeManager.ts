import { useState, useEffect } from "react";

let globalTimeMultiplier = 1;
let subscribers: ((value: number) => void)[] = [];

export const timeManager = {
  multiplier: 1,

  setMultiplier: (value: number) => {
    globalTimeMultiplier = value;
    timeManager.multiplier = value;
    subscribers.forEach((callback) => callback(value));
  },

  getMultiplier: () => {
    return globalTimeMultiplier;
  },

  subscribe: (callback: (value: number) => void) => {
    subscribers.push(callback);
    return () => {
      subscribers = subscribers.filter((cb) => cb !== callback);
    };
  },
};

export const useTimeManager = () => {
  const [timeMultiplier, setTimeMultiplier] = useState(globalTimeMultiplier);

  useEffect(() => {
    const unsubscribe = timeManager.subscribe((value) => {
      setTimeMultiplier(value);
    });

    return unsubscribe;
  }, []);

  const updateTimeMultiplier = (value: number) => {
    timeManager.setMultiplier(value);
  };

  return [timeMultiplier, updateTimeMultiplier] as const;
};
