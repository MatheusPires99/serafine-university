import styled from "styled-components";
import { darken } from "polished";

export const Content = styled.div`
  background: ${darken(0.013, "#fff")};
  border-radius: 4px;
  padding: 45px 35px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  input {
    background: ${darken(0.013, "#fff")};
  }

  a {
    color: #999;
    margin-top: 15px;
  }
`;
