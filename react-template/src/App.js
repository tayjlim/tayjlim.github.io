import { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';

/* ===== DATA ===== */

const skills = [
  {
    title: 'AI / LLM',
    tags: ['LangChain', 'RAG', 'pgvector', 'Claude API', 'OpenAI', 'OpenRouter', 'MCP', 'Multi-Agent', 'Prompt Engineering'],
  },
  {
    title: 'Machine Learning',
    tags: ['CatBoost', 'LightGBM', 'XGBoost', 'Random Forest', 'Stacked Ensembles', 'Walk-Forward Validation'],
  },
  {
    title: 'Backend',
    tags: ['Python', 'Flask', 'FastAPI', 'Node.js', 'TypeScript', 'Supabase', 'PostgreSQL'],
  },
  {
    title: 'Frontend',
    tags: ['SvelteKit', 'React', 'Next.js', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'Cloud / Infra',
    tags: ['AWS EKS/ECS/Lambda', 'AWS GovCloud', 'Terraform', 'Docker', 'Kubernetes', 'Railway', 'Cloudflare'],
  },
];

const projects = [
  {
    name: 'SharpAI',
    url: 'https://sharpai.bet',
    role: 'Founder & Lead Engineer',
    date: '2026 – Present',
    desc: 'AI-powered sports analytics. Built because I was winning too much.',
    highlights: [
      'Founded after beating the market across 22+ sportsbooks with a +EV system',
      'NFL winner model: +30% ROI, multi-year walk-forward with actual closing line odds',
      'ML stack: CatBoost, LightGBM, XGBoost, Random Forest, stacked ensembles',
      'MCP servers orchestrating external sports-data tools into LLM workflow',
      'RAG chat over pgvector — natural language queries on picks & stats',
      'Real-time +EV finder with devigging across ~60 sportsbooks',
    ],
    tech: ['Python', 'SvelteKit', 'Supabase', 'Railway', 'CatBoost', 'LangChain', 'pgvector', 'MCP'],
  },
  {
    name: 'Amigo.Study',
    url: 'https://amigo.study',
    role: 'Full Stack Developer / AI Engineer',
    date: '2025 – Present',
    desc: 'AI study platform used at Cornell, UC Berkeley, UCLA, CMU, UPenn, USC.',
    highlights: [
      'RAG pipeline: PDF, PPT, MP4, MP3, YouTube ingestion',
      'OAuth integration for Notion + Google Drive knowledge bases',
      'Building native iOS app in Swift',
    ],
    tech: ['Node.js', 'TypeScript', 'Svelte', 'Supabase', 'RAG', 'Swift', 'OAuth'],
  },
];

const experience = [
  { company: 'SharpAI', role: 'Founder', date: '2026 – Present' },
  { company: 'Amigo.Study', role: 'Full Stack / AI Engineer', date: '2025 – Present' },
  { company: 'Accenture Federal Services', role: 'Senior Cloud/DevOps Engineer (IRS)', date: '2025 – Present' },
  { company: 'Accenture Federal (Smooth Stack)', role: 'Cloud Engineer', date: '2024 – 2025' },
  { company: 'Democracy Lab', role: 'Full Stack Developer', date: '2023 – 2024' },
];

const education = [
  { school: 'UC Santa Cruz', degree: 'B.S. Technology Information Management', date: '2020' },
  { school: 'App Academy', degree: '1,000hr Full Stack, <3% acceptance', date: '2023' },
  { school: 'Las Positas College', degree: 'A.S. Computer Science', date: '2017' },
  { school: 'Akamai', degree: 'Web App & API Protection', date: '2024' },
];

const stats = [
  { target: 30, prefix: '+', suffix: '% ROI', label: 'NFL Model ROI' },
  { target: 22, prefix: '', suffix: '+', label: 'Sportsbooks' },
  { target: 60, prefix: '', suffix: '+', label: 'Books Devigged' },
  { target: 5, prefix: '', suffix: '+', label: 'Years Engineering' },
];

/* ===== HOOKS ===== */

// Scroll reveal with IntersectionObserver
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// Animated counter
function useCounter(target, prefix, suffix, shouldStart) {
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    if (!shouldStart) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      const current = Math.round(eased * target);
      if (current !== start) {
        start = current;
        setDisplay(`${prefix}${current}${suffix}`);
      }
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [shouldStart, target, prefix, suffix]);

  return display;
}

// Typewriter effect
function useTypewriter(text, speed = 45) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    setDisplayed('');
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}

/* ===== COMPONENTS ===== */

function StatCard({ target, prefix, suffix, label, index }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const value = useCounter(target, prefix, suffix, inView);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="stat-card fade-up"
      style={{ transitionDelay: `calc(${index} * 80ms)` }}
    >
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function MagneticButton({ children, className, href, onClick }) {
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    e.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
  }, []);

  const handleMouseLeave = useCallback((e) => {
    e.currentTarget.style.transform = '';
  }, []);

  if (href) {
    return (
      <a
        href={href}
        className={className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}

/* ===== APP ===== */

export default function App() {
  useScrollReveal();
  const tagline = useTypewriter('AI Engineer. ML Builder. Beating the Market.');

  return (
    <div>
      {/* NAV */}
      <nav>
        <div className="nav-logo">TL</div>
        <ul className="nav-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1 className="hero-name fade-up">TAYLOR LIM</h1>
        <p className="hero-tagline fade-up" style={{ transitionDelay: '100ms' }}>
          {tagline}<span className="cursor" />
        </p>

        <div className="stat-row">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </div>

        <div className="cta-row fade-up" style={{ transitionDelay: '400ms' }}>
          <MagneticButton href="#projects" className="cta-btn primary">
            View My Work
          </MagneticButton>
          <MagneticButton href="#contact" className="cta-btn secondary">
            Get In Touch
          </MagneticButton>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="section-label fade-up">What I Work With</div>
        <h2 className="section-title fade-up">Skills & Stack</h2>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <div
              key={s.title}
              className="skill-card fade-up"
              style={{ '--i': i, transitionDelay: `calc(${i} * 80ms)` }}
            >
              <div className="skill-card-title">{s.title}</div>
              <div className="skill-tags">
                {s.tags.map((t) => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-label fade-up">What I've Built</div>
        <h2 className="section-title fade-up">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className="glow-card project-card fade-up"
              style={{ transitionDelay: `calc(${i} * 80ms)` }}
            >
              <div className="project-header">
                <div className="project-name">{p.name}</div>
                <a href={p.url} target="_blank" rel="noreferrer" className="project-link">
                  {p.url.replace('https://', '')} &#8599;
                </a>
              </div>
              <div className="project-role">{p.role} &middot; {p.date}</div>
              <p className="project-desc">"{p.desc}"</p>
              <ul className="project-highlights">
                {p.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="section-label fade-up">Where I've Worked</div>
        <h2 className="section-title fade-up">Experience</h2>
        <div className="timeline">
          {experience.map((e, i) => (
            <div
              key={e.company + e.date}
              className="timeline-item fade-up"
              style={{ transitionDelay: `calc(${i} * 80ms)` }}
            >
              <div className="timeline-date">{e.date}</div>
              <div className="timeline-company">{e.company}</div>
              <div className="timeline-role">{e.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <div className="section-label fade-up">Background</div>
        <h2 className="section-title fade-up">Education & Certs</h2>
        <div className="edu-grid">
          {education.map((e, i) => (
            <div
              key={e.school}
              className="edu-card fade-up"
              style={{ transitionDelay: `calc(${i} * 80ms)` }}
            >
              <div className="edu-date">{e.date}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-degree">{e.degree}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <div className="contact-section" id="contact">
        <div className="section-label fade-up" style={{ textAlign: 'center' }}>Let's Talk</div>
        <h2 className="section-title fade-up" style={{ textAlign: 'center' }}>Get In Touch</h2>
        <div className="contact-card fade-up">
          <p>Open to senior engineering roles at AI-first companies. If you're building something ambitious, I'd love to hear about it.</p>
          <div className="contact-links">
            <MagneticButton href="mailto:tayjlim@gmail.com" className="contact-link primary">
              tayjlim@gmail.com
            </MagneticButton>
            <MagneticButton href="https://github.com/tayjlim" className="contact-link">
              GitHub
            </MagneticButton>
            <MagneticButton href="https://linkedin.com/in/tayjlim" className="contact-link">
              LinkedIn
            </MagneticButton>
          </div>
        </div>
      </div>

      <footer>
        <p>Built by Taylor Lim &middot; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
