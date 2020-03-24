import React from "react";
import { MdChevronRight } from "react-icons/md";
import { Input } from "@rocketseat/unform";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

import FormContainer from "~/components/FormContainer";

import { Content } from "./styles";

export default function Profile() {
  return (
    <Content>
      <div>
        <aside>
          <MdChevronRight size={44} color="#ffc72c" />
          <MdChevronRight size={44} color="#ffc72c" />
        </aside>
        <h1>Perfil</h1>
      </div>

      <FormContainer>
        <div>
          <Input name="name" placeholder="Nome complete" />
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

      <button type="button">Sair da Universidade Serafine</button>
    </Content>
  );
}
