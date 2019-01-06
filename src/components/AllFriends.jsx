import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Switch,
  Prompt,
  Redirect
} from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Resume from "./Resume.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Error from "./Error.jsx";

const friendList = {
  friends: [
    {
      id: 1,
      name: "Ron"
    },
    {
      id: 2,
      name: "Hermione"
    },
    {
      id: 3,
      name: "That's it."
    }
  ]
};
const AllFriends = () => {
  return friendList.friends.map(friend => {
    return (
      <ul key={friend.id}>
        <li>
          #{friend.id}: {friend.name}
        </li>
      </ul>
    );
  });
};

export default AllFriends;
