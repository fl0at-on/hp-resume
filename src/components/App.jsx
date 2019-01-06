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
import Friend from "./Friend.jsx";
import AllFriends from "./AllFriends.jsx";

const state = {
  users: [
    {
      id: 1,
      name: "Terry"
    },
    {
      id: 2,
      name: "Larry"
    },
    {
      id: 3,
      name: "Gary"
    },
    {
      id: 4,
      name: "Mary"
    }
  ]
};
// const About = () => (
//   <ul>
//     <li>Guten tag from About</li>
//   </ul>
// );
// const Users = ({ match, location, history }) => {
//   const arrIndex = Number(match.params.id) - 1;
//   if (arrIndex < state.users.length) {
//     return (
//       <ul>
//         <li>
//           {state.users[arrIndex].id}: {state.users[arrIndex].name}
//         </li>
//       </ul>
//     );
//   } else {
//     return (
//       <ul>
//         <li>User not found.</li>
//       </ul>
//     );
//   }
// };

const App = () => (
  <BrowserRouter>
    <div className="App">
      <NavBar />
      <hr />
      <Switch>
        <Redirect exact path="/" to="/about" />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
