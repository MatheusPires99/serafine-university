import React from "react";
import PropTypes from "prop-types";

import Header from "~/components/Header";
import Footer from "~/components/Footer";

import { Wrapper } from "./styles";

export default function DashboardLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.element.isRequired
};
