import Section from "./Section.jsx";
import { experience } from "../data/content.js";

function Experience() {
  return (
    <Section id="experience" title="Experience" note="Over a year across two backend teams">
      {experience.map((job) => (
        <article className="job" key={job.company}>
          <div className="job-head">
            <h3 className="job-role">
              {job.role}
              <span className="job-company">{job.company}</span>
            </h3>
            <span className="job-period">{job.period}</span>
          </div>
          <ul className="bullets">
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </Section>
  );
}

export default Experience;
