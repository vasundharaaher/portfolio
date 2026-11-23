function ProjectCard({ project }) {
  return (
    <article className="project-card card">
      <h3>{project.title}</h3>
      <p className="project-card__description">{project.description}</p>

      <ul className="project-card__highlights">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <ul className="project-card__technologies" aria-label="Technologies used">
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </article>
  );
}

export default ProjectCard;
