import React from "react";
import ResumeItem from "./ResumeItem.jsx";

const TitlesData = {
  items: [
    {
      sectionheader: "",
      titleName: "",
      date: "",
      children:
        "A Wizard, The Boy Who Lived, The Chosen One, Youngest Seeker in a Century, Roonil Wazlib"
    }
  ]
};

const Titles = ({ match }) => {
  return (
    <div className="resume-section">
      <a name="titles">
        <h2 className="resume-hdr">Titles</h2>
      </a>

      {TitlesData.items.map(item => {
        return (
          <ResumeItem
            sectionheader={item.sectionheader}
            titleName={item.titleName}
            date={item.date}
            children={item.children}
          />
        );
      })}
    </div>
  );
};
export default Titles;
