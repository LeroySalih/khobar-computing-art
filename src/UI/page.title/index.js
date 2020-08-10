import React from "react";
import styled from "styled-components";

import LogoImg from "../mr.salih.logo/mr-salih-logo.png";

const Logo = styled.img`
  width: 4rem;
`;

const PageTitleLayout = styled.div`
  display: grid;
  grid-template-areas: "logo title" "children children";
  grid-template-columns: max-content max-content;
`;

const LogoText = styled.div`
  font-family: "Poppins";
  font-size: 3rem;
  margin-left: 1rem;
`;

export default ({ children }) => (
  <PageTitleLayout>
    <Logo src={LogoImg} />
    <LogoText>mr-salih</LogoText>

    <div style={{ gridArea: "children" }}>{children}</div>
  </PageTitleLayout>
);
