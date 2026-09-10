import Section from "./Section.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/content.js";

function Projects() {
  return (
    <Section id="work" title="Selected work" note="Things I designed, built and shipped">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </Section>
  );
}

export default Projects;
