import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdDone, MdClear } from "react-icons/md";

import Spinner from "~/components/Spinner";

import { Container, SubmitButton } from "./styles";

export default function HeaderForm({
  id,
  lowercaseTitle,
  route,
  buttonLoading
}) {
  return (
    <Container>
      <h1>{id ? `Editar ${lowercaseTitle}` : `Cadastrar ${lowercaseTitle}`}</h1>
      <div>
        <SubmitButton form="submit" loading={buttonLoading}>
          {buttonLoading ? (
            <Spinner />
          ) : (
            <>
              <MdDone size={24} color="#fff" /> SALVAR
            </>
          )}
        </SubmitButton>
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
  route: PropTypes.string.isRequired,
  buttonLoading: PropTypes.bool.isRequired
};
