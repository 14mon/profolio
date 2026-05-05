import { skills } from "../data/portfolio";

const categoryMeta = {
  "Languages":               { icon: "</>", rgb: "153, 142, 224" },
  "Backend":                 { icon: "{ }", rgb: "126, 200, 227" },
  "System Design":           { icon: "◈",   rgb: "167, 139, 250" },
  "Cloud — AWS":             { icon: "△",   rgb: "245, 158, 11"  },
  "Cloud — Azure":           { icon: "◉",   rgb: "96, 165, 250"  },
  "Cloud — Other":           { icon: "◇",   rgb: "52, 211, 153"  },
  "DevOps & Infrastructure": { icon: "⚡",  rgb: "192, 132, 252" },
  "Databases":               { icon: "▦",   rgb: "56, 189, 248"  },
  "Payment Integration":     { icon: "◎",   rgb: "251, 191, 36"  },
};

export default function Skills() {
  const totalSkills = skills.reduce((acc, g) => acc + g.items.length, 0);

  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Skills</h2>

        <div className="skills__stats">
          <div className="skills__stat">
            <span className="skills__stat-num">{totalSkills}</span>
            <span className="skills__stat-label">skills</span>
          </div>
          <span className="skills__stat-sep">·</span>
          <div className="skills__stat">
            <span className="skills__stat-num">{skills.length}</span>
            <span className="skills__stat-label">categories</span>
          </div>
        </div>

        <div className="skills__grid">
          {skills.map((group) => {
            const meta = categoryMeta[group.category] || { icon: "◆", rgb: "153, 142, 224" };
            return (
              <div
                key={group.category}
                className="skills__group"
                style={{ "--card-rgb": meta.rgb }}
              >
                <div className="skills__category-header">
                  <span className="skills__icon">{meta.icon}</span>
                  <h3 className="skills__category">{group.category}</h3>
                  <span className="skills__count">{group.items.length}</span>
                </div>
                <div className="skills__items">
                  {group.items.map((item) => (
                    <span key={item} className="skill-badge">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
