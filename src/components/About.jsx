import { personal } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">About</h2>
        <div className="about__grid">
          <div className="about__text">
            <p>{personal.about}</p>
            <p>
              I specialize in reverse engineering legacy systems, optimizing database structures,
              and building scalable APIs with ASP.NET Core and PostgreSQL. My experience includes
              managing AWS and Azure infrastructure to ensure scalable and high-performance solutions.
            </p>
          </div>
          <div className="about__card">
            <div className="about__detail">
              <span className="about__label">Location</span>
              <span>{personal.location}</span>
            </div>
            <div className="about__detail">
              <span className="about__label">Email</span>
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
            </div>
            <div className="about__detail">
              <span className="about__label">LinkedIn</span>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                ei-myat-myat-mon
              </a>
            </div>
            <div className="about__detail">
              <span className="about__label">Focus</span>
              <span>Backend · DevOps · Cloud</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
