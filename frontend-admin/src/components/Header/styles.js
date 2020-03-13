import styled from "styled-components";

export const Container = styled.header`
  height: 70px;
  display: flex;
`;

export const LogoContainer = styled.div`
  min-width: 300px;
  background: #ffc72c;
  display: flex;
  align-items: center;
  margin-right: 30px;
  padding-left: 15px;

  img {
    width: 62px;
    height: 62px;
  }

  strong {
    color: #fff;
    font-size: 18px;
  }
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 45px;
  background: rgba(255, 255, 255, 0.5);
  margin-right: 15px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
`;

export const DashboardInfo = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;

    & + div {
      margin-left: 10px;
      padding-left: 10px;
      border-left: 1px solid #ddd;
    }

    span {
      color: #999;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 12px;
      margin-bottom: 5px;
    }

    strong {
      color: #ffc72c;
      font-size: 20px;
      text-align: center;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    margin-right: 15px;

    button {
      margin-top: 5px;
      color: #e32929;
      font-weight: bold;
      align-self: flex-end;
      background: none;
      border: 0;
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
