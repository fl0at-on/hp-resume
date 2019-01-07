import React from "react";
import NavTab from "./NavTab.jsx";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavTab to="/about" labelName="About Me" />
      <NavTab to="/resume" labelName="Resume" />
      <NavTab to="/projects" labelName="Projects" />
      <NavTab to="/contact" labelName="Contact Me" />
    </div>
  );
};

export default NavBar;
