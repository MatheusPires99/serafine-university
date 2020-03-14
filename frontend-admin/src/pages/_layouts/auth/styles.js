import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  text-align: center;

  img {
    width: 200px;
  }

  form {
    margin-top: 30px;
    width: 100% !important;

    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      position: relative;

      input {
        border-color: #ddd;
        padding: 0 15px 0 40px;
        margin-bottom: 10px;
      }

      span {
        align-self: flex-start;
      }

      svg {
        position: absolute;
        top: 15px;
        left: 15px;
        color: #ccc;
        transition: color 0.2s;
      }
    }

    a {
      color: #ffc72c;
      font-weight: bold;
      text-align: left;
      margin: 6px 0 15px;
      opacity: 0.9;
      align-self: flex-start;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const SerafineRights = styled.span`
  position: absolute;
  bottom: 36px;
  color: #666;
  font-size: 10px;
`;
