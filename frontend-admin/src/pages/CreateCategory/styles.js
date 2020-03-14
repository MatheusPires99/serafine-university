import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";

export const DocumentsList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  display: ${props => (props.visible ? "block" : "none")};
`;

export const DocumentsListHeader = styled.header`
  display: flex;
  flex-direction: column;

  span {
    font-size: 16px;
    margin-bottom: 10px;
  }

  small {
    margin-bottom: 10px;
    color: #bbb;
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  border: 1px solid #ccc;
  padding: 10px 20px;
  border-radius: 4px;
  max-height: 390px;
`;
