import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
`;

export const Content = styled.div`
  height: calc(100% - 70px);
  display: flex;
`;

export const Info = styled.main`
  width: 100%;
  padding: 75px 30px 30px 30px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const InfoRectangle = styled.div`
  width: 100%;
  margin: 0 -30px;
  height: 40px;
  background: #f1f1f1;
  position: absolute;
  top: 0px;
`;
