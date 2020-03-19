import styled from "styled-components";
import { darken } from "polished";

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      position: relative;

      input {
        border: 2px solid #ddd;
        border-radius: 4px;
        padding: 0 15px 0 40px;
        height: 44px;
        font-size: 14px;
        margin-bottom: 10px;
        transition: border-color 0.2s;

        &::placeholder {
          color: #bbb;
        }

        & + input {
          margin-top: 10px;
        }

        &:focus {
          border-color: #ffc72c;
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
      border-radius: 4px;
      border: 0;
      color: #fff;
      font-weight: bold;
      height: 44px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, "#ffc72c")};
      }
    }
  }

  button {
    background: #ffc72c;
    border-radius: 4px;
    border: 0;
    color: #fff;
    font-weight: bold;
    width: 100%:
    height: 44px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, "#ffc72c")};
    }
  }
`;
