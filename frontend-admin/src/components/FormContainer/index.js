import styled from "styled-components";
import { Form } from "@rocketseat/unform";

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

  input,
  textarea {
    width: 100%;
    border: 2px solid #eee;
    padding: 0 15px;
    margin-bottom: 20px;
    transition: border-color 0.2s;

    &::placeholder {
      color: #999;
    }

    &:focus {
      border-color: #ffc72c;
    }

    &:focus ~ svg {
      color: #ffc72c;
    }
  }

  span {
    color: #e74c3c;
    font-weight: bold;
    margin-bottom: 15px;
  }

  input {
    height: 44px;
    border-radius: 4px;
  }

  textarea {
    height: 100%;
    padding: 15px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    font-weight: ${props => (props.bold ? "bold" : "normal")};
  }
`;

export default FormContainer;
