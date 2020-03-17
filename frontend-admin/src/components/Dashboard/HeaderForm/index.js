import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdClear } from "react-icons/md";

import { Container } from "./styles";

export default function HeaderForm({ id, lowercaseTitle, route }) {
  return (
    <Container>
      <h1>{id ? `Editar ${lowercaseTitle}` : `Cadastrar ${lowercaseTitle}`}</h1>
      <div>
        <Link to={`/${route}`}>
          <MdClear size={24} color="fff" />
          CANCELAR
        </Link>
      </div>
    </Container>
  );
}

HeaderForm.propTypes = {
  id: PropTypes.number.isRequired,
  lowercaseTitle: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
};
