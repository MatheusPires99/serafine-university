import styled, { keyframes, css } from "styled-components";
import { darken } from "polished";

const show = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const Content = styled.div`
  background: ${darken(0.013, "#fff")};
  border-radius: 4px;
  padding: 45px 35px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  ${css`
    animation: ${show} 0.3s ease-in-out;
  `}

  input {
    background: ${darken(0.013, "#fff")};
  }

  a {
    color: #999;
    margin-top: 15px;
  }
`;
