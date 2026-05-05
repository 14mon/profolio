import { useState, useEffect } from "react";

const links = ["About", "Experience", "Skills", "Education", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo" onClick={(e) => handleNav(e, "hero")}>
          EMM
        </a>
        <nav className={`navbar__links${menuOpen ? " navbar__links--open" : ""}`}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={(e) => handleNav(e, l)}>
              {l}
            </a>
          ))}
        </nav>
        <button
          className="navbar__burger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
