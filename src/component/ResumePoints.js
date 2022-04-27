import React from "react";
import "./resumePoints.scss";
import ShowScoreColor from "./ShowScoreColor";
export default class ResumePoints extends React.PureComponent {
  render() {
    const { requiredFields, resumedata } = this.props;
    const scoreMatrix = {
      education: {
        phd: 5,
        masters: 4,
        bachelor: 3,
        "higher-education": 2,
        matrix: 1,
      },
    };

    let educationScore =
      5 +
      scoreMatrix.education[resumedata.qualification.degree] -
      scoreMatrix.education[requiredFields.education.value];
    let fieldScore = requiredFields.field.value === resumedata.field ? 5 : 0;
    let experienceScore =
      5 + resumedata.experience - requiredFields.experience.value;
      const totalScore=fieldScore===0?0:educationScore+fieldScore+experienceScore;
    // console.log(educationScore + " " + fieldScore + " " + experienceScore);
    return (
      <>
        <div className="which-color">
          <span
            style={{
              width: "20px",
              height: "4px",
              background: "red",
              display: "inline-block",
              marginRight:'10px',
            }}
          ></span>
          <span>Low</span>
        </div>
        <div className="which-color">
          <span
            style={{
              width: "20px",
              height: "4px",
              background: "orange",
              display: "inline-block",
              marginRight:'10px',
            }}
          ></span>
          <span> Medium</span>
        </div>
        <div className="which-color">
          <span
            style={{
              width: "20px",
              height: "4px",
              background: "green",
              display: "inline-block",
              marginRight:'10px',
            }}
          ></span>
          <span>High</span>
        </div>
        <div className="score-container">
          <div className="total-score">{totalScore}</div>
          <div className="title-graph-container">
            <div className="field">Education</div>
            <ShowScoreColor score={educationScore} />
          </div>
          <div className="title-graph-container">
            <div className="field">Experience</div>
            <ShowScoreColor score={experienceScore} />
          </div>

          <div className="title-graph-container">
            <div className="field">Field</div>
            <ShowScoreColor score={fieldScore} />
          </div>
        </div>
      </>
    );
  }
}
