import styled from "styled-components";
import { darken } from "polished";

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 120px;
  position: relative;
  display: flex;
`;

export const Documentations = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${props => (props.sideFixed ? "210px" : "0px")};
  width: 100%;
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
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

  p {
    color: rgba(39, 39, 39, 0.8);
    line-height: 35px;
  }
`;

export const DocumentsList = styled.div`
  display: flex;
  flex-direction: column;

  & + div {
    margin-top: 50px;
  }
`;

export const DocumentsItem = styled.div`
  & + div {
    margin-top: 30px;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 15px;
  }

  p {
    color: rgba(39, 39, 39, 0.8);
    line-height: 35px;
    margin-bottom: 15px;
  }

  a {
    background: #ffc72c;
    color: rgba(255, 255, 255, 0.9);
    font-weight: bold;
    margin: 0 auto;
    width: 220px;
    height: 44px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, "#ffc72c")};
    }

    svg {
      margin-right: 10px;
    }
  }
`;
