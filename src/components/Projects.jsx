import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        <div className="projects__grid">
          {projects.map((p) => (
            <div key={p.name} className="project-card">
              <h3 className="project-card__name">{p.name}</h3>
              <p className="project-card__desc">{p.description}</p>
              <div className="project-card__tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
