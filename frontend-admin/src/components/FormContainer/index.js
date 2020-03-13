import styled from "styled-components";
import { Form } from "@rocketseat/unform";
import { darken } from "polished";

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
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
    border: 1px solid #ddd;
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

  button {
    background: #ffc72c;
    color: #fff;
    font-weight: bold;
    padding: 8px 12px;
    border: 0;
    border-radius: 4px;
    transition: background 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: ${darken(0.05, "#ffc72c")};
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export default FormContainer;
