import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.div``;

export default () => (
  <NavBar>
    <Link to="/">Home</Link>
    <Link to="/Challenges">Challenges</Link>
  </NavBar>
);
