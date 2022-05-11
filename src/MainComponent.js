import React, { useState } from "react";
import Select, { components } from "react-select";
import App from "./App";

export default class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showResult: false };
  }

  changeState = (obj) => {
    this.setState((prevState) => ({
      ...prevState,
      ...obj,
    }));
  };
  handleChange = (event) => {
    this.setState({ value: event });
  };

  handleSubmit = (event) => {
   
    this.changeState({ showResult: true });
    event.preventDefault();
  };

  render() {
    return (
      <>
      <div className="home-button">&lt; <a href="http://127.0.0.1:5501/index.html#parser">Home</a></div>
        <h1 className="title"> Resume Analyzer</h1>
        <form onSubmit={this.handleSubmit} className="job-description">
          <label>Recruting field:</label>
          <Field changeState={this.changeState} />
          <label>Sub Skills:</label>
          <Subfields changeState={this.changeState} />
          <label>Experience:</label>
          <Experience changeState={this.changeState} />

          <label>Minimum Education:</label>
          <Education changeState={this.changeState} />

          <label>Languages:</label>
          <Language changeState={this.changeState} />

          <input type="submit" value="Submit" />
        </form>
        <App validFields={this.state}/>
      </>
    );
  }
}

const Field = (props) => {
  const fieldOption = [
    { value: "technology", label: "Technology" },
    { value: "managment", label: "Managment" },
    { value: "clerical", label: "Clerical" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChangee = (selected) => {
    setSelectedOption(selected);
    props.changeState({ field: selected });
  };
  return (
    <div className="selected-info">
      <Select
        defaultValue={selectedOption}
        onChange={handleChangee}
        options={fieldOption}
      />
    </div>
  );
};

const Experience = (props) => {
  const experience = [
    { value: "5", label: "5+" },
    { value: "3", label: "3+" },
    { value: "2", label: "2" },
    { value: "1", label: "1" },
    { value: "0", label: "0" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChangee = (selected) => {
    setSelectedOption(selected);
    props.changeState({ experience: selected });
  };
  return (
    <div className="selected-info">
      <Select
        defaultValue={selectedOption}
        onChange={handleChangee}
        options={experience}
      />
    </div>
  );
};

const Education = (props) => {
  const education = [
    { value: "phd", label: "P.H.D" },
    { value: "masters", label: "Masters" },
    { value: "bachelor", label: "Bachelors" },
    { value: "higher-education", label: "Higher education" },
    { value: "matrix", label: "Matriculation" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChangee = (selected) => {
   
    setSelectedOption(selected);
    props.changeState({ education: selected });
  };
  return (
    <div className="selected-info">
      <Select
        defaultValue={selectedOption}
        onChange={handleChangee}
        options={education}
      />
    </div>
  );
};

const Subfields = (props) => {
  const education = [
    { value: "cse", label: "Computer Science" },
    { value: "it", label: "Information" },
    { value: "ece", label: "Electronic and Communication" },
    { value: "me", label: "Mechinical Engineering" },
    { value: "che", label: "Chemical Engineering" },
    { value: "tt", label: "Textile Engineering" },
    { value: "financial-accounting", label: "Financial Accounting" },
    { value: "managment-accounting", label: "Management Accounting" },
    { value: "hr", label: "Human Resource Accounting" },
    { value: "assistance", label: "Assistance" },
    { value: "c", label: "cpp" },
    { value: "python", label: "python" },
    { value: "java", label: "Java" },
    { value: "android", label: "Android" },
    { value: "window", label: "window" },
    { value: "linux", label: "linux" },
    { value: "javascript", label: "Javscript" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "data structure", label: "Data Structure" },
    { value: "css", label: "CSS" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChangee = (selected) => {
    console.log(selected);
    setSelectedOption(selected);
    props.changeState({ subfields: selected });
  };
  return (
    <div className="selected-info">
      <Select
        isMulti
        defaultValue={selectedOption}
        onChange={handleChangee}
        options={education}
      />
    </div>
  );
};
const Language = (props) => {
  const language = [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "punjabi", label: "Punjabi" },
    { value: "any", label: "Any" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChangee = (selected) => {
    console.log(selected);
    setSelectedOption(selected);
    props.changeState({ language: selected });
  };
  return (
    <div className="selected-info">
      <Select
        isMulti
        defaultValue={selectedOption}
        onChange={handleChangee}
        options={language}
      />
    </div>
  );
};
