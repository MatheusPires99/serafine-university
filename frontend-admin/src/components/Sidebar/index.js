import React from "react";
import {
  MdLayers,
  MdInsertDriveFile,
  MdGroup,
  MdPersonAdd
} from "react-icons/md";
import { NavLink } from "react-router-dom";

import { Container, Navigation, NavigationList } from "./styles";

export default function Sidebar() {
  return (
    <Container>
      <Navigation>
        <span>DOCUMENTAÇÕES</span>
        <NavigationList>
          <NavLink to="/categories" activeClassName="selected">
            <MdLayers size={20} />
            <strong>CATEGORIAS</strong>
          </NavLink>
          <NavLink to="/documents" activeClassName="selected">
            <MdInsertDriveFile size={20} />
            <strong>DOCUMENTOS</strong>
          </NavLink>
        </NavigationList>
      </Navigation>

      <Navigation>
        <span>USUÁRIOS</span>
        <NavigationList>
          <NavLink to="/users" activeClassName="selected">
            <MdGroup size={20} />
            <strong>USUÁRIOS</strong>
          </NavLink>
          <NavLink to="/user/new" activeClassName="selected">
            <MdPersonAdd size={20} />
            <strong>CRIAR USUÁRIO</strong>
          </NavLink>
        </NavigationList>
      </Navigation>
    </Container>
  );
}
