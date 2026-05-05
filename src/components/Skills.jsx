import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Skills</h2>
        <div className="skills__grid">
          {skills.map((group) => (
            <div key={group.category} className="skills__group">
              <h3 className="skills__category">{group.category}</h3>
              <div className="skills__items">
                {group.items.map((item) => (
                  <span key={item} className="skill-badge">
                    {item}
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
