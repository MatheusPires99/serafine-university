import React from "react";
import {
  MdDashboard,
  MdLayers,
  MdInsertDriveFile,
  MdGroup,
  MdPersonAdd
} from "react-icons/md";
import { Link } from "react-router-dom";

import { Container, Navigation, NavigationList } from "./styles";

export default function Sidebar() {
  return (
    <Container>
      <Navigation>
        <span>DOCUMENTAÇÕES</span>
        <NavigationList>
          <Link to="/">
            <MdDashboard size={20} />
            <strong>DASHBOARD</strong>
          </Link>
          <Link to="/categories">
            <MdLayers size={20} />
            <strong>CATEGORIAS</strong>
          </Link>
          <Link to="/documents">
            <MdInsertDriveFile size={20} />
            <strong>DOCUMENTOS</strong>
          </Link>
        </NavigationList>
      </Navigation>
      <Navigation>
        <span>USUÁRIOS</span>
        <NavigationList>
          <Link to="/users">
            <MdGroup size={20} />
            <strong>USUÁRIOS</strong>
          </Link>
          <Link to="/user/new">
            <MdPersonAdd size={20} />
            <strong>CRIAR USUÁRIO</strong>
          </Link>
        </NavigationList>
      </Navigation>
    </Container>
  );
}
