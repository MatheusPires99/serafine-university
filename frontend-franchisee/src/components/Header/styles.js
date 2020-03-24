import styled from "styled-components";

export const Container = styled.header`
  background: #fff;
`;

export const Content = styled.div`
  height: 75px;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    height: 60px;
    padding: 0 20px;
  }

  img {
    width: 140px;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;

  strong {
    margin-bottom: 5px;
  }

  a {
    align-self: flex-end;
    font-size: 12px;
    color: #999;
  }
`;
