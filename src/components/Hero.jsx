import { personal } from "../data/portfolio";

export default function Hero() {
  const handleNav = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__bg-grid" />
      <div className="hero__bg-glow" />

      <div className="hero__content">
        <div className="hero__left">
          <p className="hero__greeting">whoami</p>
          <h1 className="hero__name">{personal.name}</h1>
          <h2 className="hero__title">{personal.title}</h2>
          <p className="hero__location">
            <span className="hero__location-dot" />
            {personal.location}
          </p>
          <div className="hero__chips">
            <span className="hero__chip">3+ yrs exp</span>
            <span className="hero__chip">AWS · Azure</span>
            <span className="hero__chip">Multi-cloud</span>
            <span className="hero__chip">15+ CI/CD pipelines</span>
          </div>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary" onClick={(e) => handleNav(e, "contact")}>
              Get in Touch
            </a>
            <a href="#experience" className="btn btn--ghost" onClick={(e) => handleNav(e, "experience")}>
              View Work
            </a>
          </div>
        </div>

        <div className="hero__photo-wrap">
          <div className="hero__photo-frame">
            <img
              src="/img/profile.png"
              alt={personal.name}
              className="hero__photo"
            />
          </div>
          <div className="hero__photo-badge">
            <span className="hero__location-dot" />
            Available
          </div>
        </div>
      </div>
    </section>
  );
}
