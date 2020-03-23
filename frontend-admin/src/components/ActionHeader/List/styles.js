import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: 28px;
  }

  div {
    display: flex;
  }

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
`;

export const SearchBar = styled.div`
  display: flex;
  position: relative;

  svg {
    position: absolute;
    left: 10px;
    top: 8px;
  }

  input {
    width: 240px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 8px 12px 8px 40px;
    margin-right: 10px;

    &:focus {
      border-color: #bbb;
    }

    &::placeholder {
      color: #999;
    }
  }
`;
