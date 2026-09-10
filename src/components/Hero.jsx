import { profile } from "../data/content.js";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <p className="hero-status">
            <i></i> Open to full stack roles
          </p>

          <h1>{profile.name}</h1>

          <p className="hero-role">{profile.tagline}</p>

          <div className="hero-actions">
            <a className="btn btn-solid" href="#work">
              See my work
            </a>
            <a className="btn btn-line" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a
              className="btn btn-line"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              Download resume
            </a>
            <a
              className="btn btn-line"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <dl className="hero-facts">
          <dt>Currently</dt>
          <dd>{profile.role} at NS3Edu</dd>
          <dt>Based in</dt>
          <dd>{profile.location}</dd>
          <dt>Shipped</dt>
          <dd>Two live apps, one of them an AI SaaS product</dd>
        </dl>
      </div>
    </section>
  );
}

export default Hero;
