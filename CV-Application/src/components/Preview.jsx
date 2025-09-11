export default function Preview({ general, education, experience, skills }) {
  return (
    <div className="cv-preview">
      <div className="general-info-section">
        <h1>{general.name || "Your Name"}</h1>
        <p>{general.email || "your.email@example.com"}</p>
        <p>{general.phone || "123-456-7890"}</p>
      </div>

      <div className="preview-section">
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index}>
            <p>{edu.school}</p>
            <p>{edu.degree}</p>
            <p>{edu.date}</p>
          </div>
        ))}
      </div>

      <div className="preview-section">
        <h3>Experience</h3>
        {experience.map((exp, index) => (
          <div key={index}>
            <p>{exp.company}</p>
            <p>{exp.position}</p>
            <p>{exp.responsibilities}</p>
            <p>
              {exp.from} - {exp.to}
            </p>
          </div>
        ))}
      </div>

      <div className="preview-section">
        <h3>Skills</h3>
        {skills.map((skill, index) => (
          <p key={index}>{skill}</p>
        ))}
      </div>
    </div>
  );
}
