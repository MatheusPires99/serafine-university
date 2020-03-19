import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdSearch, MdAdd } from "react-icons/md";

import { Container, SearchBar } from "./styles";

export default function Header({ title, route, q, setQ }) {
  return (
    <Container>
      <h1>{title}</h1>
      <div>
        <SearchBar>
          <MdSearch color="#ccc" size={22} />
          <input
            type="text"
            placeholder="Digite sua busca..."
            value={q}
            onChange={e => [setQ(e.target.value)]}
          />
        </SearchBar>
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
  route: PropTypes.string,
  q: PropTypes.string.isRequired,
  setQ: PropTypes.string.isRequired
};

Header.defaultProps = {
  route: null
};
