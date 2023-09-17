import React, { useRef } from "react";
import { isInRange } from "../utils";

type UseLongPressProps = {
  setCount: React.Dispatch<React.SetStateAction<number | "">>;
  min: number;
  max: number;
};

const useLongPress = ({ setCount, min, max }: UseLongPressProps) => {
  const incrementTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const decrementTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const increment = () => {
    setCount((pre) => {
      const nextCount = Number(pre) + 1;
      if (isInRange(nextCount, min, max)) return nextCount;
      return pre;
    });
    incrementTimeoutRef.current = setTimeout(increment, 100); // 每 100 ms 增加一次
  };

  const decrement = () => {
    setCount((pre) => {
      const nextCount = Number(pre) - 1;
      if (isInRange(nextCount, min, max)) return nextCount;
      return pre;
    });
    decrementTimeoutRef.current = setTimeout(decrement, 100); // 每 100 ms 減少一次
  };

  const stopIncrement = () => clearTimeout(incrementTimeoutRef.current);

  const stopDecrement = () => clearTimeout(decrementTimeoutRef.current);

  return {
    increment,
    decrement,
    stopIncrement,
    stopDecrement,
  };
};

export default useLongPress;
