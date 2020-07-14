import React, { Component } from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img
          src="./logo192.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt="Logo"
          loading="lazy"
        />
        Social Graph
      </a>
    </nav>
  );
};

export default NavBar;
