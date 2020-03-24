import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: -9px;

  div {
    width: 100%;
    font-size: 20px;
    line-height: 2.5;

    > span {
      @media (max-width: 768px) {
        padding: 10px 20px;
      }
    }
  }
`;
