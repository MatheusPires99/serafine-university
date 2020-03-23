import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

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
  const [categories, setCategories] = useState("");
  const [documents, setDocuments] = useState("");
  const [users, setUsers] = useState("");

  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  useEffect(() => {
    async function loadDetails() {
      try {
        const [
          categoryResponse,
          documentResponse,
          userResponse
        ] = await Promise.all([
          api.get("category"),
          api.get("document"),
          api.get("user")
        ]);

        setCategories(categoryResponse.data.docs);
        setDocuments(documentResponse.data.docs);
        setUsers(userResponse.data.docs);
      } catch (err) {
        toast.error("Falha ao carregar dados");
      }
    }

    loadDetails();
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
          <div>
            <span>Usuários</span>
            <strong>{users.length}</strong>
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
