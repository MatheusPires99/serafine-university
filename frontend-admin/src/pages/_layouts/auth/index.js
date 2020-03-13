import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Content, SerafineRights } from "./styles";

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
      <SerafineRights>
        Serafine 2020 © Todos os direitos reservados
      </SerafineRights>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired
};
