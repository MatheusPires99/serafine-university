import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { Input } from "@rocketseat/unform";
import * as Yup from "yup";

import { forgotPasswordRequest } from "~/store/modules/user/actions";

import { FormContainer } from "~/components/Form";
import Spinner from "~/components/Spinner";

import { Content } from "./styles";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("E-mail inválido")
    .required("O e-mail é obrigatório")
});

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.loading);

  function handleSubmit({ email }) {
    dispatch(forgotPasswordRequest(email));
  }

  return (
    <>
      <Content>
        <h1>Recuperar senha</h1>

        <FormContainer id="submit" schema={schema} onSubmit={handleSubmit}>
          <div>
            <Input name="email" type="email" placeholder="Digite seu e-mail" />
            <FaEnvelope size={14} />
          </div>

          <button type="submit">{loading ? <Spinner /> : "Recuperar"}</button>
        </FormContainer>

        <Link to="/">Voltar</Link>
      </Content>
    </>
  );
}
