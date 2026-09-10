import { profile } from "../data/content.js";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>
          {profile.name} — {profile.role}
        </span>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}

export default Footer;
