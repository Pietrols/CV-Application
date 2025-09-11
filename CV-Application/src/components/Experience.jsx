import React from "react";
import { useState } from "react";

export default function Experience({ experience, setExperience }) {
  const [exp, setExp] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    to: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setExp({ ...exp, [name]: value });
  }

  function addExperience() {
    if (!exp.company || !exp.position || !exp.from || !exp.to) return;
    setExperience([...experience, exp]);
    setExp({
      company: "",
      position: "",
      responsibilities: "",
      from: "",
      to: "",
    });
  }
  return (
    <div className="form-section">
      <h2>Experience</h2>
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        value={exp.company}
        onChange={handleChange}
      />
      <input
        type="text"
        name="position"
        placeholder="Position"
        value={exp.position}
        onChange={handleChange}
      />
      <textarea
        name="responsibilities"
        placeholder="Responsibilities"
        value={exp.responsibilities}
        onChange={handleChange}
      />
      <input
        type="text"
        name="from"
        placeholder="From"
        value={exp.from}
        onChange={handleChange}
      />
      <input
        type="text"
        name="to"
        placeholder="To"
        value={exp.to}
        onChange={handleChange}
      />
      <button className="add-btn" onClick={addExperience}>
        Add Experience
      </button>
    </div>
  );
}
