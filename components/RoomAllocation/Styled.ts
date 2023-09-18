import styled from "styled-components";

type ButtonProps = {
  disabled: boolean;
};

export const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  margin: auto;
  margin-top: 50px;
  border: 1px dashed #bf4f74;
  color: #bf4f74;
  font-size: 16px;
`;

export const Title = styled.div`
  text-align: center;
`;

export const RoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RestGuestBox = styled.div`
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  background-color: #bf4f74;
  color: #ffffff;
  border-radius: 3px;
`;

export const Button = styled.button<ButtonProps>`
  width: 48px;
  height: 48px;
  font-size: 16px;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  text-align: center;
  background: ${(props) => (props.disabled ? "#cccccc" : "#bf4f74")};
  color: ${(props) => (props.disabled ? "#bf4f74" : "#ffffff")};
`;
