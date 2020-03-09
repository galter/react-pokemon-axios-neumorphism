import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const NavBarStyled = styled.nav`
  display: flex;
  flex-direction: flex-end;
`;

const TextNavbar = styled.div`
  display: flex;
  flex-direction: flex-end;

  @media (max-width: 580px) {
    display: none;
  }

  a {
    text-decoration: none;
    font-size: 1.5rem;
  }
`;

export { NavBarStyled, TextNavbar };
