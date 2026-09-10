// Shared shell for every section: a heading column on the left, content on the right.
function Section({ id, title, note, children }) {
  return (
    <section className="section" id={id}>
      <div className="wrap section-grid">
        <div>
          <h2 className="section-title">{title}</h2>
          {note && <p className="section-note">{note}</p>}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default Section;
