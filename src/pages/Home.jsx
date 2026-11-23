import { useState } from "react";
import Hero from "../components/Hero";
import ExperienceCard from "../components/ExperienceCard";
import ProjectCard from "../components/ProjectCard";
import { profile, skillGroups } from "../data/homeData";
import { experience } from "../data/expData";
import { projects } from "../data/projectData";
import SkillTag from "../components/SkillTag";
import "./Home.css";

function Home() {
  const [activeSkillId, setActiveSkillId] = useState(null);

  return (
    <main className="home-page">
      <Hero
        name={profile.name}
        role={profile.role}
        introduction={profile.introduction}
      />

      <section
        id="experience"
        className="experience-section"
        aria-labelledby="experience-heading"
      >
        <h2 className="section-heading" id="experience-heading">
          Experience
        </h2>

        <div className="experience-list">
          {experience.map((item) => (
            <ExperienceCard key={item.id} experience={item} />
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="projects-section"
        aria-labelledby="projects-heading"
      >
        <h2 className="section-heading" id="projects-heading">
          Projects
        </h2>

        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="skills-section"
        aria-labelledby="skills-heading"
      >
        <h2 className="section-heading" id="skills-heading">
          Skills
        </h2>

        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article className="skill-group card" key={group.id}>
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <SkillTag
                    key={skill.id}
                    skill={skill}
                    isActive={activeSkillId === skill.id}
                    onSelect={setActiveSkillId}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;