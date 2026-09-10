function ProjectCard({ project }) {
  return (
    <article className="project">
      <h3 className="project-name">
        {project.live ? (
          <a href={project.live} target="_blank" rel="noreferrer">
            {project.name}
          </a>
        ) : (
          project.name
        )}
      </h3>
      <p className="project-kind">{project.kind}</p>

      <ul className="project-stack">
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <ul className="bullets">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      {(project.live || project.repo) && (
        <div className="project-links">
          {project.live && (
            <a
              className="btn btn-solid btn-small"
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Open live site
            </a>
          )}
          {project.repo && (
            <a
              className="btn btn-line btn-small"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
              View code
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
