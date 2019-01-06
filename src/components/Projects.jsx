import React from "react";
import { Route, NavLink } from "react-router-dom";

const Projects = ({ match }) => {
  return (
    <div>
      <ul>
        <li>
          <NavLink activeClassName="selected" to={match.url + "/1"}>
            Project 1
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to={match.url + "/2"}>
            Project 2
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to={match.url + "/3"}>
            Project 3
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to={match.url + "/4"}>
            Project 4
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to={match.url + "/5"}>
            Project 5
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to={match.url + "/6"}>
            Project 6
          </NavLink>
        </li>
      </ul>
      <hr />

      <Route
        path={match.url + "/1"}
        render={props => <div>Found the Philosopher's Stone.</div>}
      />
      <Route
        path={match.url + "/2"}
        render={props => <div>Bewitched the mind.</div>}
      />
      <Route
        path={match.url + "/3"}
        render={props => <div>Ensnared the senses.</div>}
      />
      <Route
        path={match.url + "/4"}
        render={props => <div>Bottled fame.</div>}
      />
      <Route
        path={match.url + "/5"}
        render={props => <div>Brewed glory.</div>}
      />
      <Route
        path={match.url + "/6"}
        render={props => <div>Put a stopper in death.</div>}
      />
    </div>
  );
};

export default Projects;
