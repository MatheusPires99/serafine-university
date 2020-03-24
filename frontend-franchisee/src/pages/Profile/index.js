import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdChevronRight } from "react-icons/md";
import { Input } from "@rocketseat/unform";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

import { signOut } from "~/store/modules/auth/actions";
import { updateProfileRequest } from "~/store/modules/user/actions";

import FormContainer from "~/components/FormContainer";

import { Content } from "./styles";

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.user);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Content>
      <div>
        <aside>
          <MdChevronRight size={44} color="#ffc72c" />
          <MdChevronRight size={44} color="#ffc72c" />
        </aside>
        <h1>Perfil</h1>
      </div>

      <FormContainer initialData={profile} onSubmit={handleSubmit}>
        <div>
          <Input name="name" placeholder="Nome completo" />
          <FaUser size={14} />
        </div>
        <div>
          <Input
            name="email"
            type="email"
            placeholder="Seu endereço de e-mail"
          />
          <FaEnvelope size={14} />
        </div>

        <hr />

        <div>
          <Input
            name="oldPassword"
            type="password"
            placeholder="Sua senha atual"
          />
          <FaLock size={14} />
        </div>
        <div>
          <Input name="password" type="password" placeholder="Nova senha" />
          <FaLock size={14} />
        </div>
        <div>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Digite mais uma vez sua nova senha"
          />
          <FaLock size={14} />
        </div>

        <button type="submit">Atualizar perfil</button>
      </FormContainer>

      <button type="button" onClick={handleSignOut}>
        Sair da Universidade Serafine
      </button>
    </Content>
  );
}
