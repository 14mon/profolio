import { personal } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container container--narrow">
        <h2 className="section__title">Get in Touch</h2>
        <p className="contact__sub">
          I&apos;m open to new opportunities and collaborations. Feel free to reach out.
        </p>
        <div className="contact__links">
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${personal.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Send an Email
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            LinkedIn Profile
          </a>
        </div>
        <p className="contact__email">{personal.email}</p>
      </div>
    </section>
  );
}
