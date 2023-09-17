import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useLongPress from "./useLongPress";
import { isInRange } from "../utils";

const NumberRegex = /^\d+$/;

const Container = styled.div`
  display: flex;
  gap: 8px;
`;

const Input = styled.input`
  width: 48px;
  height: 48px;
  font-size:16px;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  text-align: center;
}
`;

type ButtonProps = {
  disabled: boolean;
};

const Button = styled.button<ButtonProps>`
  width: 48px;
  height: 48px;
  font-size: 16px;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  text-align: center;
  background: ${(props) => (props.disabled ? "#ccc" : "#BF4F74")};
  color: ${(props) => (props.disabled ? "#BF4F74" : "white")};
`;

type CustomerInputProps = {
  value: number;
  min: number;
  max: number;
  step: number;
  disabled: boolean;
  name?: string;
};

function CustomerInput({ min, max, step, name, value, disabled = false }: any) {
  const [count, setCount] = useState<number | "">(value);
  const [countMin, setCountMin] = useState<number>(min);
  const [countMax, seCountMax] = useState<number>(max);
  const { increment, decrement, stopIncrement, stopDecrement } = useLongPress({
    setCount,
    min,
    max,
  });

  const isMin = count === min || count === "";
  const isMax = count === max;

  const handelKeyDown = (key: string) => {
    if (String(count).length === 1 && key === "Backspace") {
      setCount("");
    }
  };

  const handelInputChange = (value: string) => {
    if (NumberRegex.test(value) && isInRange(Number(value), min, max)) {
      setCount(Number(value));
    }
  };

  useEffect(() => {
    console.log("count!!!!:", count);
    // if (count > max) setCount(max);
    //@ts-ignore
    // if (count < min && count !== "") setCount(min);
  }, [count]);

  return (
    <>
      {disabled ? (
        <Container>
          <Button disabled>-</Button>
          <Input name="customer input" type="number" value={count} disabled />
          <Button disabled>+</Button>
        </Container>
      ) : (
        <Container>
          <Button
            onMouseDown={decrement}
            onMouseUp={stopDecrement}
            onMouseLeave={stopDecrement}
            disabled={isMin}
          >
            -
          </Button>
          <Input
            name="customer input"
            type="number"
            value={count}
            onChange={(e) => handelInputChange(e.target.value)}
            onKeyDown={(e) => handelKeyDown(e.key)}
            onBlur={(e) => {
              if (e.target.value === "") {
                setCount(1);
              }
            }}
          />
          <Button
            onMouseDown={increment}
            onMouseUp={stopIncrement}
            onMouseLeave={stopIncrement}
            disabled={isMax}
          >
            +
          </Button>
        </Container>
      )}
    </>
  );
}

export default CustomerInput;
