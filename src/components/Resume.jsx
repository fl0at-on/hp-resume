import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";

import Education from "../components/ResumeItems/Education.jsx";
import WorkHistory from "../components/ResumeItems/WorkHistory.jsx";
import Accomplishments from "../components/ResumeItems/Accomplishments.jsx";
import Titles from "../components/ResumeItems/Titles.jsx";
import Skills from "../components/ResumeItems/Skills.jsx";

const ResumeData = {
  workhistory: [
    {
      sectionheader: "Auror",
      titleName: "Internship",
      date: "June 1992 - May 1998",
      children:
        "Liased with A. Dumbledore, reducing Horcrux-related concerns around UK by 100% over 7 years."
    },
    {
      sectionheader: "Dumbledore's Army",
      titleName: "Co-Founder",
      date: "October 1995 - May 1998",
      children:
        "Held training sessions for colleagues, increasing Defense Against Dark Arts"
    },
    {
      sectionheader: "S.P.E.W. (Society for the Promotion of Elfish Welfare)",
      titleName: "Secretary",
      date: "1994",
      children: "Took notes about SPEW, upon paying 2 Sickles"
    }
  ],
  education: [
    {
      OWLS: [
        { id: 1, course: "Defense Against the Dark Arts", grade: "O" },
        { id: 2, course: "Care of Magical Creatures", grade: "EE" },
        { id: 3, course: "Charms", grade: "EE" },
        { id: 4, course: "Herbology", grade: "EE" },
        { id: 5, course: "Potions", grade: "EE" },
        { id: 6, course: "Transfiguration", grade: "EE" },
        { id: 7, course: "Astronomy", grade: "A" },
        { id: 8, course: "Divination", grade: "P" },
        { id: 9, course: "History of Magic", grade: "D" }
      ],
      NEWTS: [
        { id: 1, course: "Defense Against the Dark Arts", grade: "n/a" },
        { id: 2, course: "Care of Magical Creatures", grade: "n/a" },
        { id: 3, course: "Charms", grade: "n/a" },
        { id: 4, course: "Herbology", grade: "n/a" },
        { id: 5, course: "Potions", grade: "n/a" },
        { id: 6, course: "Transfiguration", grade: "n/a" },
        { id: 7, course: "Astronomy", grade: "n/a" },
        { id: 8, course: "Divination", grade: "n/a" },
        { id: 9, course: "History of Magic", grade: "n/a" }
      ]
    }
  ],
  titles: [
    {
      sectionheader: "",
      titleName: "",
      date: "",
      children:
        "A Wizard, The Boy Who Lived, The Chosen One, Youngest Seeker in a Century, Roonil Wazlib"
    }
  ],
  accomplishments: [
    {
      sectionheader: "Triwizard Tournament",
      titleName: "Champion",
      date: "1994",
      children: "Bested Cedric Diggory, that loser."
    }
  ],
  skills: [
    {
      sectionheader: "",
      titleName: "",
      date: "",
      children: "Courage, Yelling, Brooming, Hissing, Expelliarmus"
    }
  ]
};

const Resume = ({ match }) => {
  return (
    <div>
      <div className="sub-nav">
        <NavLink
          className="nav-btn"
          activeClassName="nav-btn-active"
          to={match.url + "/education"}
        >
          Education
        </NavLink>

        <NavLink
          className="nav-btn"
          activeClassName="nav-btn-active"
          to={match.url + "/workhistory"}
        >
          Work History
        </NavLink>

        <NavLink
          className="nav-btn"
          activeClassName="nav-btn-active"
          to={match.url + "/accomplishments"}
        >
          Accomplishments
        </NavLink>

        <NavLink
          className="nav-btn"
          activeClassName="nav-btn-active"
          to={match.url + "/titles"}
        >
          Titles
        </NavLink>
        <NavLink
          className="nav-btn"
          activeClassName="nav-btn-active"
          to={match.url + "/skills"}
        >
          Skills
        </NavLink>
        <h2>Harry Potter</h2>

        <div>
          <p className="blur-out-expand" style={{ margin: "0px" }}>
            4 Privet Drive Little Whinging, Surrey, UK
          </p>
          <p className="focus-in-contract" style={{ margin: "0px" }}>
            12 Grimmauld Place, London, UK
          </p>
        </div>
      </div>
      <hr />

      <Switch>
        <Route exact path={match.url + "/education"} component={Education} />
        <Route
          exact
          path={match.url + "/workhistory"}
          component={WorkHistory}
        />
        <Route
          exact
          path={match.url + "/accomplishments"}
          component={Accomplishments}
        />
        <Route
          exact
          path={match.url + "/accomplishments"}
          component={Accomplishments}
        />

        <Route exact path={match.url + "/titles"} component={Titles} />
        <Route exact path={match.url + "/skills"} component={Skills} />
      </Switch>
    </div>
  );
};

export default Resume;
