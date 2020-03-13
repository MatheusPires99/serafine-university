import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  text-align: center;

  img {
    width: 200px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      position: relative;

      input {
        width: 100%;
        height: 44px;
        border-radius: 4px;
        border: 2px solid #ddd;
        padding: 0 15px 0 40px;
        margin-bottom: 10px;
        transition: border-color 0.2s;

        &::placeholder {
          color: #999;
        }

        &:focus {
          border-color: #ffc72c;
        }

        &:focus ~ svg {
          color: #ffc72c;
        }
      }

      span {
        color: #e74c3c;
        font-weight: bold;
        align-self: flex-start;
        margin-bottom: 10px;
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

      &:hover {
        opacity: 1;
      }
    }

    button {
      background: #ffc72c;
      border: 0;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      height: 44px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, "#ffc72c")};
      }
    }
  }
`;

export const SerafineRights = styled.span`
  position: absolute;
  bottom: 36px;
  color: #666;
  font-size: 10px;
`;
