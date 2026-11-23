function ExperienceCard({ experience }) {
  return (
    <article className="experience-card card">
      <header className="experience-card__header">
        <div>
          <h3>{experience.role}</h3>
          <p className="experience-card__company">{experience.company}</p>
        </div>
        <p className="experience-card__period">{experience.period}</p>
      </header>

      <ul className="experience-card__highlights">
        {experience.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceCard;
