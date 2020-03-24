import styled from "styled-components";
import { Form } from "@rocketseat/unform";
import { darken } from "polished";

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    margin-bottom: 20px;
    font-size: 16px;
  }

  label {
    margin-bottom: 10px;
    font-weight: bold;
    align-self: flex-start;
  }

  input {
    width: 100%;
    height: 45px;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0 15px;
    margin-bottom: 20px;
    transition: box-shadow 0.1s, border-color 0.1s;

    &::placeholder {
      color: #bbb;
    }

    &:focus {
      border-color: #ffc72c;
      box-shadow: 0 0 0 1px #ffc72c;
    }
  }

  span {
    color: #e74c3c;
    font-weight: bold;
    margin-bottom: 15px;
  }

  button {
    background: #ffc72c;
    color: #fff;
    border: 0;
    margin-bottom: 15px;

    &:hover {
      background: ${darken(0.05, "#ffc72c")};
    }
  }
`;

export default FormContainer;
