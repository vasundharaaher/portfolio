function SkillTag({ skill, isActive, onSelect }) {
  return (
    <button
      className={`skill-tag ${isActive ? "skill-tag--active" : ""}`}
      type="button"
      aria-pressed={isActive}
      onClick={() => onSelect(skill.id)}
    >
      {skill.name}
    </button>
  );
}

export default SkillTag;
