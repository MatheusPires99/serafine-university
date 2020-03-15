import styled from "styled-components";

export const UserCell = styled.td`
  color: ${props => (props.isAdmin ? "#e74c3c" : "#2962ff")};
  font-weight: bold;
`;
