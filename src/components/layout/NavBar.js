import React, { Component } from "react";
import { NavBarStyled, TextNavbar } from "./NavBarStyled";
import { FiHome } from "react-icons/fi";

export default class NavBar extends Component {
  render() {
    return (
      <NavBarStyled className="navbar navbar-expand-md navbar-dark fixed-top">
        <a
          href="true"
          className="navbar-brand col-sm-3 col-md-2 mr-0 left-align-items-center"
        >
          <FiHome size={36} color="#9DABC0" />
        </a>
        <TextNavbar href="true" className="textNavbar"></TextNavbar>
      </NavBarStyled>
    );
  }
}
