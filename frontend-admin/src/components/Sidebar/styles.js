import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.aside`
  height: 100%;
  min-width: 300px;
  background: #272727;
  padding-top: 75px;
`;

export const Navigation = styled.div`
  margin-bottom: 60px;

  span {
    color: #bbb;
    margin-bottom: 10px;
    display: block;
    padding-left: 35px;
    font-size: 12px;
  }
`;

export const NavigationList = styled.div`
  display: flex;
  flex-direction: column;

  a {
    display: flex;
    align-items: center;
    color: #fff;
    padding: 17px 0 17px 35px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, "#272727")};
    }

    svg {
      margin-right: 10px;
    }

    strong {
      font-size: 14px;
      text-transform: uppercase;
    }
  }
`;
