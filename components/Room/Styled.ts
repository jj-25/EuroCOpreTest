import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: 1px solid #bf4f74;
  padding-bottom: 20px;
  font-weight: bold;

  &:last-child {
    border: none;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const AgeText = styled.div`
  color: #cccccc;
`;
