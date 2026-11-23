function Hero({ name, role, introduction }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="hero-eyebrow">Hello, I'm</p>
        
        <h1 id="hero-title">{name}</h1>
        <h2>{role}</h2>
        <p className="hero-description">{introduction}</p>

        <div className="hero-actions">
          <a className="primary-button" href="#skills">
            Explore my skills
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;