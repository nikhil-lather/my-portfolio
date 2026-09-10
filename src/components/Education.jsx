import Section from "./Section.jsx";
import { education } from "../data/content.js";

function Education() {
  return (
    <Section id="education" title="Education" note={education.year}>
      <p className="edu-degree">{education.degree}</p>
      <p className="edu-meta">{education.institution}</p>
    </Section>
  );
}

export default Education;
