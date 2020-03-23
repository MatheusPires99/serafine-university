import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  div {
    width: 100%;
    font-size: 20px;
    line-height: 2.5;

    & + div {
      margin-left: 50px;
    }
  }
`;
