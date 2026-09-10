import Section from "./Section.jsx";
import { skills } from "../data/content.js";

function Skills() {
  return (
    <Section id="skills" title="Skills" note="What I work with day to day">
      <div>
        {skills.map((row) => (
          <div className="skill-row" key={row.group}>
            <p className="skill-group">{row.group}</p>
            <ul className="skill-tags">
              {row.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
