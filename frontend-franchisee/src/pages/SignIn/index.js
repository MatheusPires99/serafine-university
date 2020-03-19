import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Input } from "@rocketseat/unform";
import * as Yup from "yup";

import { signInRequest } from "~/store/modules/auth/actions";

import logo from "~/assets/logo.png";
import serafineLogin from "~/assets/serafineLogin.jpg";

import FormContainer from "~/components/FormContainer";
import Spinner from "~/components/Spinner";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("E-mail inválido")
    .required("O e-mail é obrigatório"),
  password: Yup.string().required("A senha é obrigatória")
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={serafineLogin} alt="Serafine Campaign" />
      <div>
        <img src={logo} alt="Universidade Serafine" />

        <FormContainer schema={schema} onSubmit={handleSubmit}>
          <div>
            <Input name="email" type="email" placeholder="E-mail" />
            <FaEnvelope size={14} />
          </div>
          <div>
            <Input name="password" type="password" placeholder="Senha" />
            <FaLock size={14} />
          </div>
          <Link to="/">Esqueci minha senha</Link>
          <button type="submit">{loading ? <Spinner /> : "Entrar"}</button>
        </FormContainer>
      </div>
    </>
  );
}
