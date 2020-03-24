import styled from "styled-components";
import { darken } from "polished";

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto 120px;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    margin: 20px 0 40px;
    position: relative;

    aside {
      position: absolute;
      left: -14px;
      display: flex;

      svg:nth-child(1) {
        position: absolute;
        left: 15px;
      }
    }

    h1 {
      padding-left: 45px;
    }
  }

  form {
    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      position: relative;

      input {
        padding: 0 15px 0 40px;
        font-size: 14px;
        margin-bottom: 15px;
        transition: border-color 0.2s;

        & + input {
          margin-top: 10px;
        }

        &:focus ~ svg {
          color: #ffc72c;
        }
      }

      svg {
        position: absolute;
        top: 15px;
        left: 15px;
        color: #ccc;
        transition: color 0.2s;
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: #ddd;
      margin: 10px 0 20px;
    }

    button {
      background: #ffc72c;
      border: 0;
      color: #fff;

      &:hover {
        background: ${darken(0.05, "#ffc72c")};
      }
    }
  }

  button {
    border-radius: 4px;
    border: 1px solid #e74c3c;
    color: #e74c3c;
    font-weight: bold;
    width: 100%;
    height: 44px;
    transition: color, background 0.2s;

    &:hover {
      background: #e74c3c;
      color: #fff;
    }
  }
`;
