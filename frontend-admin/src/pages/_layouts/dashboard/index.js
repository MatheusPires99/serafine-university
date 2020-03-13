import React from "react";
import PropTypes from "prop-types";

import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";

import { Wrapper, Content, Info, InfoRectangle } from "./styles";

export default function DashboardLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Sidebar />
        <Info>
          <InfoRectangle />
          {children}
        </Info>
      </Content>
    </Wrapper>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.element.isRequired
};
