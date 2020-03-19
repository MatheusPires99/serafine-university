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
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;

  img {
    width: 500px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    padding: 0 80px;

    img {
      width: 200px;
    }

    form {
      margin-top: 30px;

      div {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;

        input {
          border-color: #ddd;
          padding: 0 15px 0 40px;
          margin-bottom: 10px;
          font-size: 14px;
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

        svg {
          margin-right: 5px;
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
    }
  }
`;

export const SerafineRights = styled.span`
  position: absolute;
  bottom: 36px;
  color: #666;
  font-size: 10px;
`;
