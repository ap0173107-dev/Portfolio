import { useState } from "react";
import "./app.css";

const projects = [
  {
    title: "RAG AI Assistant",
    description:
      "A Retrieval-Augmented Generation application using AWS Bedrock, LangChain, FAISS and Streamlit for intelligent document-based question answering.",
    tech: ["Python", "AWS Bedrock", "LangChain", "FAISS", "Streamlit"],
    github: "https://github.com/Adi987p/adityapandey.github.io",
  },
  {
    title: "SMS Spam Detection",
    description:
      "Machine learning application that classifies SMS messages as spam or legitimate using NLP preprocessing and machine learning.",
    tech: ["Python", "NLP", "NLTK", "Scikit-learn", "Streamlit"],
    github: "https://github.com/Adi987p/adityapandey.github.io",
  },
  {
    title: "Machine Learning Projects",
    description:
      "Collection of machine learning projects involving regression, classification, data preprocessing, visualization and model evaluation.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "ML"],
    github: "https://github.com/Adi987p/adityapandey.github.io",
  },
];

const skills = [
  "Python",
  "SQL",
  "C++",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "Machine Learning",
  "NLP",
  "Generative AI",
  "RAG",
  "LangChain",
  "AWS Bedrock",
  "FAISS",
  "Streamlit",
  "Git & GitHub",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            Aditya<span>.</span>
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <nav className={menuOpen ? "nav-links active" : "nav-links"}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-container">

          <div className="hero-content">
            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Aditya <span>Pandey</span>
            </h1>

            <h2>
              Data Analyst <span>•</span> AI/ML Enthusiast{" "}
              <span>•</span> Full-Stack Developer
            </h2>

            <p className="hero-description">
              I build data-driven applications, intelligent AI systems and
              modern web applications with a focus on solving real-world
              problems.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                View Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn secondary"
              >
                View Resume
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Adi987p/adityapandey.github.io"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a href="mailto:ap0173107@email.com">
                Email
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-card">
              <div className="profile-circle">
                AP
              </div>

              <div className="floating-card card-one">
                <span>⌘</span>
                Python
              </div>

              <div className="floating-card card-two">
                <span>◈</span>
                AI / ML
              </div>

              <div className="floating-card card-three">
                <span>&lt;/&gt;</span>
                Full Stack
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-container">

          <div className="section-heading">
            <p>01 — ABOUT</p>
            <h2>Who I am</h2>
          </div>

          <div className="about-grid">

            <div>
              <p className="large-text">
                I'm a Data Analyst with a strong interest in Artificial
                Intelligence, Machine Learning and Full-Stack Development.
              </p>

              <p>
                I completed my B.Tech in Chemical Engineering from
                <strong> NIT Warangal</strong>. My technical journey has
                expanded from data analytics and machine learning to
                Generative AI, RAG systems and modern web development.
              </p>

              <p>
                I enjoy understanding problems deeply, breaking them into
                smaller pieces and building practical solutions using
                technology.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat">
                <strong>NITW</strong>
                <span>B.Tech</span>
              </div>

              <div className="stat">
                <strong>AI/ML</strong>
                <span>Projects</span>
              </div>

              <div className="stat">
                <strong>Data</strong>
                <span>Analytics</span>
              </div>

              <div className="stat">
                <strong>Web</strong>
                <span>Development</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section dark-section">
        <div className="section-container">

          <div className="section-heading">
            <p>02 — EXPERIENCE</p>
            <h2>Where I've worked</h2>
          </div>

          <div className="timeline">

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-date">
                Present
              </div>

              <div className="timeline-content">
                <h3>Data Analyst</h3>
                <h4>PharmaACE</h4>

                <p>
                  Working with data analytics, business problems and
                  data-driven insights in the pharmaceutical analytics
                  domain.
                </p>

                <div className="tags">
                  <span>Data Analysis</span>
                  <span>SQL</span>
                  <span>Python</span>
                  <span>Analytics</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-date">
                Earlier
              </div>

              <div className="timeline-content">
                <h3>AI / ML Projects & Internships</h3>

                <p>
                  Built projects involving Natural Language Processing,
                  machine learning, Generative AI and Retrieval-Augmented
                  Generation.
                </p>

                <div className="tags">
                  <span>Machine Learning</span>
                  <span>NLP</span>
                  <span>Generative AI</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-container">

          <div className="section-heading">
            <p>03 — SKILLS</p>
            <h2>What I work with</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <span className="skill-number">
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                <span>{skill}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <div className="section-container">

          <div className="section-heading">
            <p>04 — PROJECTS</p>
            <h2>Things I've built</h2>
          </div>

          <div className="projects-grid">

            {projects.map((project, index) => (
              <article className="project-card" key={index}>

                <div className="project-top">
                  <span className="project-index">
                    0{index + 1}
                  </span>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-link"
                  >
                    ↗
                  </a>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tags">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section dark-section">
        <div className="section-container">

          <div className="section-heading">
            <p>05 — EDUCATION</p>
            <h2>Academic background</h2>
          </div>

          <div className="education-card">

            <div className="education-year">
              B.Tech
            </div>

            <div>
              <h3>National Institute of Technology, Warangal</h3>

              <p>
                Bachelor of Technology in Chemical Engineering
              </p>

              <div className="education-details">
                <span>CGPA: 8.29</span>
                <span>Merit Scholarship</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section">
        <div className="section-container">

          <div className="section-heading">
            <p>06 — HIGHLIGHTS</p>
            <h2>A few things I'm proud of</h2>
          </div>

          <div className="highlights-grid">

            <div className="highlight">
              <strong>01</strong>
              <h3>Academic Excellence</h3>
              <p>
                B.Tech graduate from NIT Warangal with a strong academic
                foundation.
              </p>
            </div>

            <div className="highlight">
              <strong>02</strong>
              <h3>Merit Scholarship</h3>
              <p>
                Received a two-year merit scholarship during undergraduate
                studies.
              </p>
            </div>

            <div className="highlight">
              <strong>03</strong>
              <h3>Technical Teaching</h3>
              <p>
                Experience teaching programming, mathematics and technical
                concepts.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">

        <div className="contact-container">

          <p className="eyebrow">07 — CONTACT</p>

          <h2>
            Let's build something
            <span> useful.</span>
          </h2>

          <p>
            Have a project, opportunity or interesting problem?
            Feel free to get in touch.
          </p>

          <a
            href="mailto:ap0173107@email.com"
            className="contact-email"
          >
            ap0173107@email.com
          </a>

          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/aditya-pandey-a2262b24a"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/Adi987p/adityapandey.github.io"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          © {new Date().getFullYear()} Aditya Pandey
        </div>

        <div>
          Built with React
        </div>
      </footer>

    </div>
  );
}

export default App;