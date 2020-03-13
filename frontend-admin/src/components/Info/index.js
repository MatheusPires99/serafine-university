import styled from "styled-components";
import { darken } from "polished";

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: 28px;
  }

  div {
    display: flex;

    form {
      display: flex;

      input {
        width: 240px;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 8px 12px;
        margin-right: 10px;

        &:focus {
          border-color: #bbb;
        }

        &::placeholder {
          color: #ccc;
        }
      }

      button {
        width: 80px;
        background: #52d69b;
        border: 0;
        border-radius: 4px;
        margin-right: 10px;
        transition: background 0.2s;

        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          background: ${darken(0.08, "#52d69b")};
        }
      }
    }

    button,
    a {
      background: #52d69b;
      border: 0;
      border-radius: 4px;
      padding: 0 20px;
      color: #fff;
      font-weight: bold;
      transition: background 0.2s;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background: ${darken(0.08, "#52d69b")};
      }

      svg {
        margin-right: 5px;
      }
    }
  }
`;

export const InfoCreateHeader = styled.div`
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

export const InfoFooter = styled.div``;

export default { InfoHeader, InfoFooter, InfoCreateHeader };
