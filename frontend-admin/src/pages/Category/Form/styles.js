import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";

export const EditContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DocumentsList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  display: ${props => (props.visible ? "block" : "none")};
  margin-left: 45px;
`;

export const DocumentsListHeader = styled.header`
  display: flex;
  flex-direction: column;

  span {
    font-size: 16px;
    margin-bottom: 20px;
  }

  small {
    margin-top: -10px;
    margin-bottom: 10px;
    color: #bbb;
    font-size: 12px;
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  border: 1px solid #ccc;
  padding: 10px 20px;
  border-radius: 4px;
  max-height: ${props => (props.height ? "295px" : "40px")};
`;
