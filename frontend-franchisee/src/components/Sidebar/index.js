import React, { useState, useEffect } from "react";

import { Container } from "./styles";

export default function Sidebar() {
  const [fixed, setFixed] = useState(false);

  function listenScrollEvent() {
    if (window.scrollY > 350) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <Container fixed={fixed}>
      <ul>
        <li>Gestão de produtos</li>
        <li>Estoque</li>
        <li>Vendas</li>
        <li>Produtos</li>
      </ul>
    </Container>
  );
}
