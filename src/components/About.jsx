import Section from "./Section.jsx";
import { profile } from "../data/content.js";

function About() {
  return (
    <Section id="about" title="About" note={profile.role}>
      <p className="about-text">{profile.summary}</p>
    </Section>
  );
}

export default About;
