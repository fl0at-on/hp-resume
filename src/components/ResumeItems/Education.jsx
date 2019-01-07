import React from "react";
import ResumeItem from "./ResumeItem.jsx";

/*
TO DO: format the Table Row/Value as an array {course/grade} to map over
 */

const tableData = {
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
};

const Education = props => {
  {
    console.log(props);
  }
  return (
    <div>
      <h2 className="resume-hdr">Education</h2>
      <div className="resume-section-body">
        <h3>Hogwarts</h3>
        <div>1991 - D.N.F.</div>
        <div style={{ width: "auto" }}>
          <table>
            <thead>
              <tr>
                <th colSpan="2">O.W.L.s</th>
              </tr>

              <tr>
                <th>Course</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {tableData.OWLS.map(item => {
                return (
                  <tr key={item.id} className="tbl-row">
                    <td>{item.course}</td>
                    <td>{item.grade}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th colSpan="2" className="tooltip">
                  N.E.W.T.s
                  <span className="tooltiptext">
                    didn't finish school - lul
                  </span>
                </th>
              </tr>

              <tr>
                <th>Course</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {tableData.NEWTS.map(item => {
                return (
                  <tr key={item.id} className="tbl-row">
                    <td>{item.course}</td>
                    <td>{item.grade}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Education;
