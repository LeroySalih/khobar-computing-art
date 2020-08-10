import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
`;

export default ({ children }) => <Container>{children}</Container>;
