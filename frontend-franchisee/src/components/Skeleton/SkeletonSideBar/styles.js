import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  div {
    width: 100%;
    font-size: 20px;
    line-height: 1.8;

    @media (max-width: 768px) {
      padding: 10px 20px;
    }

    > span {
      @media (max-width: 768px) {
        display: flex;
      }

      span {
        @media (max-width: 768px) {
          margin-right: 10px;
        }
      }
    }
  }
`;
