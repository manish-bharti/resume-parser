import React from "react";
import './resumePoints.scss';
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
   // console.log(educationScore + " " + fieldScore + " " + experienceScore);
    return <div className="score-container">
        <div className="title-graph-container">
            <div className="field">Education</div>
            <div className="pointsColor">{educationScore}</div>
        </div>
        <div className="title-graph-container">
            <div className="field">Experience</div>
            <div className="pointsColor">{experienceScore}</div>
        </div>

        <div className="title-graph-container">
            <div className="field">Field</div>
            <div className="pointsColor">{fieldScore}</div>
        </div>

    </div>;
  }
}
