import styled, { css, keyframes } from "styled-components";
import { darken } from "polished";

export const ActionButtons = styled.div`
  display: flex;

  button,
  a {
    width: 47px;
    height: 32px;
    background: #ddd;
    border: 1px solid #ccc;
    border-radius: 4px;

    &:hover {
      background: ${darken(0.08, "#f9f9f9")};
    }

    & + button {
      margin-left: 10px;
    }

    svg {
      color: #272727;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const show = keyframes`
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

export const DeleteButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${css`
    animation: ${show} 0.2s ease-in-out;
  `}

  span {
    margin-bottom: 5px;
  }

  button {
    height: 35px;
    width: 110px;
    border: 0;
    border-radius: 4px;
    font-weight: bold;
    transition: background 0.2s;

    & + button {
      margin-left: 10px;
    }

    &:nth-child(1) {
      background: #fe3f3e;
      color: #fff;
    }

    &:nth-child(2) {
      border: 1px solid #bbb;
    }
  }
`;
