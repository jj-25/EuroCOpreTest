import { useRef } from "react";

type UseLongPressProps = {
  increaseSetter: VoidFunction;
  decreaseSetter: VoidFunction;
};

/**  Handle Button of increment and decrement long press event. */
const useButtonLongPress = ({
  increaseSetter,
  decreaseSetter,
}: UseLongPressProps) => {
  const incrementTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const decrementTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  // 每 100 ms 增加一次
  const increment = () => {
    increaseSetter();
    incrementTimeoutRef.current = setTimeout(increment, 100);
  };

  // 每 100 ms 減少一次
  const decrement = () => {
    decreaseSetter();
    decrementTimeoutRef.current = setTimeout(decrement, 100);
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

export default useButtonLongPress;
