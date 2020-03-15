import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdSearch, MdAdd } from "react-icons/md";

import { Container } from "./styles";

export default function Header({ title, route }) {
  return (
    <Container>
      <h1>{title}</h1>
      <div>
        <form action="">
          <input type="text" placeholder="Digite sua busca..." />
          <button type="submit">
            <MdSearch color="#fff" size={24} />
          </button>
        </form>
        <Link to={`/${route}/new`}>
          <MdAdd color="#fff" size={24} />
          NOVO
        </Link>
      </div>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
};
