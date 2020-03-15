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
      background: #ccc;
      color: #fff;
      display: flex;
      align-items: center;
      padding: 0 20px;
      height: 34px;
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
