import React from "react";
import { useState } from "react";

export default function Education({ education, setEducation }) {
  const [edu, setEdu] = useState({
    school: "",
    degree: "",
    date: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setEdu({ ...edu, [name]: value });
  }

  function addEducation() {
    if (!edu.school || !edu.degree || !edu.date) return;
    setEducation([...education, edu]);
    setEdu({
      school: "",
      degree: "",
      date: "",
    });
  }

  return (
    <div className="form-section">
      <h2>Education</h2>
      <input
        type="text"
        name="school"
        placeholder="School Name"
        value={edu.school}
        onChange={handleChange}
      />
      <input
        type="text"
        name="degree"
        placeholder="Degree"
        value={edu.degree}
        onChange={handleChange}
      />
      <input
        type="text"
        name="date"
        placeholder="Graduation Date"
        value={edu.date}
        onChange={handleChange}
      />
      <button className="add-btn" onClick={addEducation}>
        Add Education
      </button>
    </div>
  );
}
