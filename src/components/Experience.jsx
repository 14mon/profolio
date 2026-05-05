import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Experience</h2>
        <div className="timeline">
          {experience.map((job) => (
            <div key={job.id} className="timeline__item">
              <div className="timeline__marker" />
              <div className="timeline__body">
                <div className="timeline__header">
                  <div>
                    <h3 className="timeline__company">{job.company}</h3>
                    <p className="timeline__role">{job.role}</p>
                  </div>
                  <div className="timeline__meta">
                    <span className="badge">{job.type}</span>
                    <span className="timeline__period">{job.period}</span>
                  </div>
                </div>

                {job.subRoles && (
                  <div className="timeline__subroles">
                    {job.subRoles.map((s) => (
                      <span key={s.role} className="timeline__subrole">
                        {s.role} · {s.period}
                      </span>
                    ))}
                  </div>
                )}

                <ul className="timeline__list">
                  {job.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>

                {job.projects && job.projects.length > 0 && (
                  <div className="timeline__projects">
                    <h4 className="timeline__projects-title">Projects</h4>
                    <div className="timeline__projects-grid">
                      {job.projects.map((p) => (
                        <div key={p.name} className="project-card">
                          <div className="project-card__header">
                            {p.logo ? (
                              <img
                                src={p.logo}
                                alt={`${p.name} logo`}
                                className="project-card__logo"
                              />
                            ) : (
                              <div className="project-card__logo-placeholder">
                                {p.name.charAt(0)}
                              </div>
                            )}
                            <h5 className="project-card__name">{p.name}</h5>
                          </div>
                          <p className="project-card__desc">{p.description}</p>
                          <div className="project-card__tags">
                            {p.tags.map((t) => (
                              <span key={t} className="tag">{t}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
