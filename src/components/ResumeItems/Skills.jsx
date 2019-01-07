import React from "react";
import ResumeItem from "./ResumeItem.jsx";

const SkillsData = {
  items: [
    {
      sectionheader: "",
      titleName: "",
      date: "",
      children: "Courage, Yelling, Brooming, Hissing, Expelliarmus"
    }
  ]
};
const Skills = ({ match }) => {
  return (
    <div className="resume-section">
      <a name="skills">
        <h2 className="resume-hdr">Skills</h2>
      </a>
      {SkillsData.items.map(item => {
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
export default Skills;
