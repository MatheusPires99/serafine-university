import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { signOut } from "~/store/modules/auth/actions";

import api from "~/services/api";

import logo from "~/assets/white-feather.png";
import avatar from "~/assets/avatar.jpg";

import {
  Container,
  Content,
  LogoContainer,
  VerticalLine,
  DashboardInfo,
  Profile
} from "./styles";

export default function Header() {
  const [documents, setDocuments] = useState("");
  const [categories, setCategories] = useState("");

  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get("category");

      setCategories(response.data);
    }

    loadCategories();
  }, []);

  useEffect(() => {
    async function loadDocuments() {
      const response = await api.get("document");

      setDocuments(response.data);
    }

    loadDocuments();
  }, []);

  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="Serafine" />
        <VerticalLine />
        <strong>Universidade</strong>
      </LogoContainer>

      <Content>
        <DashboardInfo>
          <div>
            <span>Categorias</span>
            <strong>{categories.length}</strong>
          </div>
          <div>
            <span>Documentos</span>
            <strong>{documents.length}</strong>
          </div>
        </DashboardInfo>
        <Profile>
          <div>
            <strong>Serafine Clothing</strong>
            <button type="button" onClick={handleSignOut}>
              SAIR
            </button>
          </div>
          <img src={avatar} alt="Serafine" />
        </Profile>
      </Content>
    </Container>
  );
}
