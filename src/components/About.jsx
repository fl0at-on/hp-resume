import React from "react";
import { NavLink, Switch, Route, Link } from "react-router-dom";

import AllFriends from "./AllFriends.jsx";
import Friend from "./Friend.jsx";

const About = ({ match }) => {
  return (
    <div>
      <div className="item">
        <h1>I'm a Wizard</h1>
        <h2 className="label success new-label">-Harry </h2>
      </div>
      <hr />
      <ul>
        <li>
          <NavLink activeClassName="selected" to={match.url + "/friends/1"}>
            Friend #1
          </NavLink>
        </li>
        <li>
          <Link activeClassName="selected" to={match.url + "/friends/2"}>
            Friend #2
          </Link>
        </li>
        <li>
          <Link
            activeClassName="selected"
            to={match.url + "/friends/allfriends"}
          >
            All of my friends
          </Link>
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
