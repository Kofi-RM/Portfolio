import './App.css'

const projects = [
  { number: '01', title: 'Recall Roster', type: 'UGA Capstone · 2024', description: 'Manage emergency contacts and send mass SMS alerts.', stack: ['React', '.NET Core', 'SQL Server'], href: 'https://github.com/Kofi-RM/recall-roster', accent: 'lime' },
  { number: '02', title: 'Pro Tasker', type: 'Per Scholas Final Project · 2026', description: 'Create projects, organize tasks, and track progress.', stack: ['React', 'TypeScript', 'Node.js', 'MongoDB'], href: 'https://pro-tasker-1.onrender.com/', accent: 'blue' },
  { number: '03', title: 'iTunes Gallery', type: 'Self-directed project · 2026', description: 'Upload, search, and view image and video collections.', stack: ['React', 'Express', 'MongoDB', 'Cloudinary'], href: 'https://itunes-gallery.onrender.com/', accent: 'coral' },
  { number: '04', title: 'Vision Lab', type: 'Computer vision project · 2026', description: 'Detect objects and compare image classification models.', stack: ['Python', 'Flask', 'YOLOv8', 'Vision Transformer'], href: 'https://github.com/Kofi-RM/MP3', accent: 'violet' },
]

function ArrowUpRight() { return <span className="arrow" aria-hidden="true">↗</span> }

function App() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="wordmark" href="#top">
          KRM<span>_</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="availability" href="mailto:kofireevesmiller@gmail.com">
          <i /> Available for work
        </a>
      </nav>

      <header className="hero" id="top">
        <p className="eyebrow">Software engineer · Woodstock, GA</p>
        <h1>
          Kofi Reeves-Miller
        </h1>
      </header>

      <section className="work section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <p className="count">04 / 04</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.accent}`} key={project.title}>
              <div className="card-top">
                <span>{project.number}</span>
                <span className="project-symbol">✦</span>
              </div>
              <div className="project-content">
                <p className="project-type">{project.type}</p>
                <h2>{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                {project.href ? (
                  <a
                    className="project-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {new URL(project.href).hostname === "github.com"
                      ? "View code on GitHub"
                      : "Live demo"}{" "}
                    <ArrowUpRight />
                  </a>
                ) : (
                  <span className="project-link private">
                    Local build · Demo available on request
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="footer-bottom">
          <span>© 2026 Kofi Reeves-Miller</span>
          <a href="tel:+14707862142">470-786-2142</a>
          <a href="mailto:kofireevesmiller@gmail.com">kofireevesmiller@gmail.com</a>
        </div>
      </footer>
    </main>
  );
  ;
}
export default App


