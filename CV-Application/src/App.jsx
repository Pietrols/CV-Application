import { useState, useRef } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Preview from "./components/Preview";
import "./styles/App.css";
import "./styles/Preview.css";

export default function App() {
  const [general, setGeneral] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [isEditing, setIsEditing] = useState(true);

  const previewRef = useRef();

  const handleReset = () => {
    setGeneral({
      name: "",
      email: "",
      phone: "",
    });
    setEducation([]);
    setExperience([]);
    setSkills([]);
    setIsEditing(true);
  };

  if (isEditing) {
    return (
      <div className="cv-container">
        <h1 className="cv-title">CV Generator</h1>
        <div className="cv-form">
          <GeneralInfo general={general} setGeneral={setGeneral} />
          <Education education={education} setEducation={setEducation} />
          <Experience experience={experience} setExperience={setExperience} />
          <Skills skills={skills} setSkills={setSkills} />
          <div className="buttons">
            <button className="submit-btn" onClick={() => setIsEditing(false)}>
              Preview CV
            </button>
            <button className="reset-btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="app-container">
        <div className="preview-wrapper">
          <div ref={previewRef}>
            <Preview
              general={general}
              education={education}
              experience={experience}
              skills={skills}
            />
          </div>
          <div className="buttons">
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="download-btn" onClick={() => window.print()}>
              Download PDF
            </button>
          </div>
        </div>
      </div>
    );
  }
}
