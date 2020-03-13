import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";

export const DocumentsList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const DocumentsListInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 16px;
  }

  small {
    margin: 10px 0;
    color: #bbb;
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  border: 1px solid #ccc;
  padding: 10px 20px;
  border-radius: 4px;
  max-height: 390px;
`;
