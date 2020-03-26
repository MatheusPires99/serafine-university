import styled, { keyframes, css } from "styled-components";

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
  background: #fff;
  border-radius: 4px;
  padding: 45px 35px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  border: 1px solid #ddd;
  ${css`
    animation: ${show} 0.3s ease-in-out;
  `}

  input {
    background: #fff;
  }

  a {
    color: #999;
    font-size: 14px;
    margin-top: 15px;
  }
`;
