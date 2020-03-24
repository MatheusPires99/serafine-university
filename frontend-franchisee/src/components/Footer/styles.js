import styled from "styled-components";

export const Container = styled.div`
  background: #f5f5f5;
  border-top: 1px solid #ccc;
  padding: 35px 0;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 20px;
    flex-direction: column;
  }

  span {
    color: #999;
    font-size: 14px;

    & + span {
      @media (max-width: 768px) {
        margin-top: 10px;
      }
    }
  }
`;
