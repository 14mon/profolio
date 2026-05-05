import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section__title">Education</h2>
        <div className="edu__list">
          {education.map((e) => (
            <div key={e.school} className="edu__item">
              <div className="edu__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div>
                <h3 className="edu__degree">{e.degree}</h3>
                <p className="edu__school">{e.school}</p>
                <span className="edu__period">{e.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
