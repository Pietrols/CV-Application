import React from "react";
import { useState } from "react";

export default function Skills({ skills, setSkills }) {
  const [skill, setSkill] = useState("");

  function handleChange(e) {
    setSkill(e.target.value);
  }

  function addSkill() {
    if (!skill) return;
    setSkills([...skills, skill]);
    setSkill("");
  }

  return (
    <div className="form-section">
      <h2>Skills</h2>
      <input
        type="text"
        name="skill"
        placeholder="Skill"
        value={skill}
        onChange={handleChange}
      />
      <button className="add-btn" onClick={addSkill}>
        Add Skill
      </button>
    </div>
  );
}
