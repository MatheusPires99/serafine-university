import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "~/assets/logo.svg";

import { Container, Content, Profile } from "./styles";

export default function Header() {
  const profile = useSelector(state => state.user.user);

  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logo} alt="Serafine" />
        </Link>

        <Profile>
          <strong>{profile.name}</strong>
          <Link to="/profile">Meu perfil</Link>
        </Profile>
      </Content>
    </Container>
  );
}
