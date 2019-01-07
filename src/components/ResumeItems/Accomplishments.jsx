import React from "react";
import ResumeItem from "./ResumeItem.jsx";

const AccomplishmentsData = {
  items: [
    {
      sectionheader: "Triwizard Tournament",
      titleName: "Champion",
      date: "1994",
      children: "Bested Cedric Diggory, that loser."
    }
  ]
};

const Accomplishments = ({ match }) => {
  return (
    <div className="resume-section">
      <a name="accomplishments">
        <h2 className="resume-hdr">Accomplishments</h2>
      </a>

      {AccomplishmentsData.items.map(item => {
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
export default Accomplishments;
