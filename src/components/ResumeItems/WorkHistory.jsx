import React from "react";
import ResumeItem from "./ResumeItem.jsx";

const WorkHistoryData = {
  items: [
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
  ]
};

const WorkHistory = ({ match }) => {
  return (
    <div className="resume-section">
      <a name="workhistory">
        <h2 className="resume-hdr">Work History</h2>
      </a>

      {WorkHistoryData.items.map(item => {
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
export default WorkHistory;
