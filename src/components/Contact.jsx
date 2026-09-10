import Section from "./Section.jsx";
import { profile } from "../data/content.js";

function Contact() {
  return (
    <Section id="contact" title="Get in touch" note="Usually reply within a day">
      <p className="contact-lead">
        Looking for a full stack or backend developer? Send me the role and I
        will get back to you with what I can bring to it.
      </p>

      <ul className="contact-list">
        <li>
          <span className="contact-label">Email</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        <li>
          <span className="contact-label">Phone</span>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
        </li>
        <li>
          <span className="contact-label">LinkedIn</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            nikhil-lather
          </a>
        </li>
        <li>
          <span className="contact-label">GitHub</span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            nikhil-lather
          </a>
        </li>
        <li>
          <span className="contact-label">Resume</span>
          <a href={profile.resume} target="_blank" rel="noreferrer">
            Download PDF
          </a>
        </li>
      </ul>
    </Section>
  );
}

export default Contact;
