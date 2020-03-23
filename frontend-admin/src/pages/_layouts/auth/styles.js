import styled from "styled-components";
import { darken } from "polished";

import ball from "~/assets/ball.png";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #272727;
  background-image: url(${ball});
  background-repeat: repeat;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;

  img {
    width: 200px;
  }

  .signIn-logo {
    width: 100px;
  }

  form {
    margin-top: 30px;

    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      position: relative;

      input {
        border-color: #ccc;
        padding: 0 15px 0 40px;
        margin-bottom: 10px;
      }

      span {
        align-self: flex-start;
      }

      svg {
        position: absolute;
        top: 15px;
        left: 15px;
        color: #ccc;
        transition: color 0.2s;
      }
    }

    a {
      color: #ffc72c;
      font-weight: bold;
      text-align: left;
      margin: 6px 0 15px;
      opacity: 0.9;
      align-self: flex-start;

      &:hover {
        opacity: 1;
      }
    }

    button {
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
    }
  }
`;

export const SerafineRights = styled.span`
  position: absolute;
  bottom: 36px;
  color: #999;
  font-size: 10px;
`;
