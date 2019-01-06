import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Switch,
  Prompt
} from "react-router-dom";
import NavTab from "./NavTab.jsx";

const NavBar = () => {
  return (
    <div>
      <NavTab to="/about" label="About Me" />
      <NavTab to="/resume" label="Resume" />
      <NavTab to="/projects" label="Projects" />
      <NavTab to="/contact" label="Contact Me" />
    </div>
  );
};

export default NavBar;
