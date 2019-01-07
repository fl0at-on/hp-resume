import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";

import AllFriends from "./AllFriends.jsx";
import Friend from "./Friend.jsx";

const About = ({ match }) => {
  return (
    <div>
      <div className="item blockquote">
        <blockquote>
          <p>I'm a Wizard</p>
          <footer className="label success new-label">-Harry </footer>
        </blockquote>
      </div>
      <hr />
      <ul>
        <li>
          <NavLink
            className="item"
            activeClassName="selected"
            to={match.url + "/friends/1"}
          >
            Friend #1
          </NavLink>
        </li>
        <li>
          <NavLink
            className="item"
            activeClassName="selected"
            to={match.url + "/friends/2"}
          >
            Friend #2
          </NavLink>
        </li>
        <li>
          <NavLink
            className="item"
            activeClassName="selected"
            to={match.url + "/friends/allfriends"}
          >
            All of my friends
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route
          path={match.url + "/friends/allfriends"}
          component={AllFriends}
        />
        <Route path={match.url + "/friends/:id"} component={Friend} />
      </Switch>
    </div>
  );
};

export default About;
