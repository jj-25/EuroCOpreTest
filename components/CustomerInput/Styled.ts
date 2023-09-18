import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 8px;
`;

export const Input = styled.input`
  width: 48px;
  height: 48px;
  font-size: 16px;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  text-align: center;
  background-color: #ffffff;

  &:disabled {
    background-color: #cccccc;
    border-color: #cccccc;
    color: #ffffff;
  }
`;

export const Button = styled.div`
  width: 48px;
  height: 48px;
  font-size: 28px;
  border-radius: 3px;
  color: #ffffff;
  text-align: center;
  background-color: #bf4f74;
  cursor: pointer;
  user-select: none;

  &.disabled {
    background-color: #cccccc;
    pointer-events: none;
  }
`;
