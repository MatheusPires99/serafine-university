import React from "react";
import { Link } from "react-router-dom";

import logo from "~/assets/white-logo.svg";

import { Container } from "./styles";

export default function Error404() {
  return (
    <Container>
      <img src={logo} alt="Serafine" />
      <h1>404 Error.</h1>
      <span>
        Não conseguimos encontrar a página que você estava procurando.
      </span>
      <Link to="/">Voltar a página inicial</Link>
    </Container>
  );
}
