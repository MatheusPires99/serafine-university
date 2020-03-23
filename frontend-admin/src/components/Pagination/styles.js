import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2px;
  margin: 25px 0 50px;

  div {
    color: #272727;
  }

  aside {
    display: flex;
    align-items: center;

    button {
      background: #fff;
      border: 1px solid #ffc72c;
      border-radius: 4px;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;

      & + button {
        margin-left: 5px;
      }

      &:hover {
        background: #ffc72c;

        & > svg {
          color: #fff;
        }
      }

      svg {
        color: #ffc72c;
      }
    }

    span {
      color: #272727;
      font-size: 16px;
      margin: 0 10px;
    }
  }
`;
