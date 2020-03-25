import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { Input } from "@rocketseat/unform";
import * as Yup from "yup";

import { resetPasswordRequest } from "~/store/modules/user/actions";

import { FormContainer } from "~/components/Form";
import Spinner from "~/components/Spinner";

import { Content } from "./styles";

const schema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Digite no mínimo 6 caracteres")
    .required("A senha é obrigatória")
});

export default function ResetPassword({ match }) {
  const { resetToken } = match.params;

  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.loading);

  function handleSubmit({ token, password }) {
    console.tron.log(token, password);

    dispatch(resetPasswordRequest(token, password));
  }

  const initialData = {
    token: resetToken,
    password: ""
  };

  return (
    <>
      <Content>
        <h1>Resetar senha</h1>

        <FormContainer
          initialData={initialData}
          id="submit"
          schema={schema}
          onSubmit={handleSubmit}
        >
          <Input name="token" />

          <div>
            <Input
              name="password"
              type="password"
              placeholder="Digite sua nova senha"
            />
            <FaLock size={14} />
          </div>

          <button type="submit">
            {loading ? <Spinner /> : "Alterar senha"}
          </button>
        </FormContainer>

        <Link to="/">Voltar</Link>
      </Content>
    </>
  );
}

ResetPassword.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      resetToken: PropTypes.node
    }).isRequired
  }).isRequired
};
