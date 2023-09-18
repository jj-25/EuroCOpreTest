import { useState, useEffect, useContext } from "react";
import Context from "../../context";
import useButtonLongPress from "./useButtonLongPress";
import { isInRange } from "../../common/utils";
import DisabledInput from "./DisabledInput";
import { Container, Input, Button } from "./Styled";
import { ADULT_MIN, CHILD_MIN } from "../../common/constants";

const NumberRegex = /^\d+$/;

type CustomerInputProps = {
  index: number;
  min: number;
  max: number;
  value: number;
  disabled: boolean;
  isChild?: boolean;
  step?: number;
  name?: string;
};

function CustomerInput({
  index,
  min,
  max,
  value,
  disabled,
  isChild = false,
  step = 1,
  name = "customer input",
}: CustomerInputProps) {
  const { setResult, restGuest } = useContext(Context);

  const [count, setCount] = useState<number | "">(value);

  const isMin = Number(count) === min || count === "";
  const isMax = Number(count) === max || restGuest === 0;

  const increaseSetter = () => {
    setCount((pre) => {
      const nextCount = Number(pre) + step;
      return isMax ? pre : nextCount;
    });
  };

  const decreaseSetter = () => {
    setCount((pre) => {
      const nextCount = Number(pre) - step;
      return isMin ? pre : nextCount;
    });
  };

  const { increment, decrement, stopIncrement, stopDecrement } =
    useButtonLongPress({
      decreaseSetter,
      increaseSetter,
    });

  const handleInputChange = (value: string) => {
    if (
      NumberRegex.test(value) &&
      isInRange(Number(value), min, Math.min(max, restGuest))
    ) {
      setCount(Number(value));
    }
  };

  const handleInputBlur = (value: string) => {
    if (value === "") {
      isChild ? setCount(CHILD_MIN) : setCount(ADULT_MIN);
    }
  };

  const handleKeyDown = (key: string) => {
    switch (key) {
      case "Backspace":
        if (String(count).length === 1) setCount("");
        break;
      case "ArrowUp":
        increaseSetter();
        break;
      case "ArrowDown":
        decreaseSetter();
      default:
        break;
    }
  };

  /** sync result state */
  useEffect(() => {
    setResult((draft: any) => {
      if (isChild) {
        draft[index].child = count;
      } else {
        draft[index].adult = count;
      }
    });
  }, [count, index]);

  return (
    <>
      {disabled ? (
        <DisabledInput count={count} name={name} />
      ) : (
        <Container>
          <Button
            onMouseDown={decrement}
            onMouseUp={stopDecrement}
            onMouseLeave={stopDecrement}
            className={isMin ? "disabled" : ""}
          >
            -
          </Button>
          <Input
            name={name}
            type="text"
            value={count}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e.key)}
            onBlur={(e) => {
              handleInputBlur(e.target.value);
            }}
          />
          <Button
            onMouseDown={increment}
            onMouseUp={stopIncrement}
            onMouseLeave={stopIncrement}
            className={isMax ? "disabled" : ""}
          >
            +
          </Button>
        </Container>
      )}
    </>
  );
}

export default CustomerInput;
