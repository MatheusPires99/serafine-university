import React from "react";
import { Link } from "react-router-dom";

import logo from "~/assets/logo.png";

import { Container, Content, Profile } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Serafine" />

        <Profile>
          <strong>Nome do usuário</strong>
          <Link to="/profile">Meu perfil</Link>
        </Profile>
      </Content>
    </Container>
  );
}
