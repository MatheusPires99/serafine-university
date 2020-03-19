import React from "react";
import PropTypes from "prop-types";

// import Header from "~/components/Header";

import { Wrapper } from "./styles";

export default function DashboardLayout({ children }) {
  return (
    <Wrapper>
      {/* <Header /> */}
      {children}
    </Wrapper>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.element.isRequired
};
