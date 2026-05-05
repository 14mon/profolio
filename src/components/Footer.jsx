import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} {personal.name} · Yangon, Myanmar
        </p>
      </div>
    </footer>
  );
}
