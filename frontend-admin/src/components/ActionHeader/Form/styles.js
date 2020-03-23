import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: 28px;
  }

  div {
    display: flex;
    align-items: center;

    a {
      font-weight: bold;
      border: 0;
      color: #fff;
      background: #ccc;
      display: flex;
      align-items: center;
      width: 140px;
      padding: 0 20px;
      height: 36px;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, "#ccc")};
      }

      svg {
        margin-right: 5px;
      }
    }
  }
`;

export const SubmitButton = styled.button`
  font-weight: bold;
  border: 0;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 140px;
  height: 36px;
  border-radius: 4px;
  transition: background 0.2s;
  background: #ffc72c;
  margin-right: 10px;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background: ${darken(0.05, "#ffc72c")};
  }
`;
