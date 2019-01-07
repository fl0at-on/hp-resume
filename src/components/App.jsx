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

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

const scrollUp = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const App = () => (
  <BrowserRouter>
    <div className="App">
      <img
        id="scrollBtn"
        className="scroll-btn"
        onClick={scrollUp}
        src="https://uploads.codesandbox.io/uploads/user/e8eb3050-f94b-4a71-b39f-5fa11a5ee09c/IL55-up-arrow.svg"
      />

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
      <hr />
      <footer style={{ textAlign: "center" }}>Gryffindor4Lyf</footer>
    </div>
  </BrowserRouter>
);

export default App;
