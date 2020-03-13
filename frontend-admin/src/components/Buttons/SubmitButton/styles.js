import styled from "styled-components";
import { darken } from "polished";

export const Button = styled.button`
  background: #ffc72c;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  height: 44px;
  border: 0;
  border-radius: 4px;
  transition: background 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${darken(0.05, "#ffc72c")};
  }

  svg {
    margin-right: 5px;
  }
`;
