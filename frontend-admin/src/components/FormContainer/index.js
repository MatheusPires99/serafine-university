import styled from "styled-components";
import { Form } from "@rocketseat/unform";

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  min-width: 800px;
  margin-right: 45px;

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
    border-radius: 4px;
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
  }

  textarea {
    height: 100%;
    padding: 15px;
  }
`;

export default FormContainer;
