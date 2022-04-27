import React from "react";
import { candidateData } from "../resumeData.js/data1";
import ResumePoints from "./ResumePoints";
import "./showAnalysis.scss";

export default class ShowAnalysis extends React.PureComponent {
  render() {
  
    return (
      <>
        {candidateData.map((data) => {
          return (
            <div className="analysis-container">
              <div>
                <b>Name :- </b>
                {data.name}
              </div>
              <div>
                <b>Main Field :- </b>
                {data.field}
              </div>
              <div>
                <b>Experience :- </b>
                {data.experience}
              </div>
              <div>
                <b>Skills :- </b>
                {data.keySkills.map((skill) => {
                  return <span className="skill">{skill}</span>;
                })}
              </div>
              <div>
                <b>Highest Qualification :- </b>
                {data.qualification.degree}
              </div>
              <ResumePoints requiredFields={this.props.requiredFields} resumedata={data}/>
            </div>
          );
        })}
        
      </>
    );
  }
}
