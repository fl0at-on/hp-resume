import React from "react";

const ResumeItem = props => {
  return (
    <div className="">
      <table className="resume-tbl">
        <thead>
          <tr>
            <th className="resume-hdr-1">{props.sectionheader}</th>
            <th className="resume-hdr-2">{props.titleName}</th>
            <th className="resume-hdr-3">{props.date}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="tbl-row">
            <td className="resume-desc" colSpan="3">
              {props.children}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResumeItem;
