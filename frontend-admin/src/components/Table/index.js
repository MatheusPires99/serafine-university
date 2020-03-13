import styled from "styled-components";
import { darken } from "polished";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead th {
    text-align: left;
    padding: 12px;
    border-bottom: 1px solid #ddd;
  }

  tbody tr:nth-of-type(odd) {
    background: #f9f9f9;
  }

  tbody td {
    padding: 8px 12px;

    &:last-child {
      display: flex;
      justify-content: flex-end;
    }

    button,
    a {
      width: 47px;
      height: 32px;
      background: #ddd;
      border: 1px solid #ccc;
      border-radius: 4px;

      &:hover {
        background: ${darken(0.08, "#f9f9f9")};
      }

      & + button {
        margin-left: 10px;
      }

      svg {
        color: #272727;
      }
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default Table;
