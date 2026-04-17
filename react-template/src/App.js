import { useEffect, useRef } from 'react';
import './App.css';

const skills = [
  {
    title: 'AI / LLM',
    tags: ['LangChain', 'RAG', 'pgvector', 'Claude API', 'OpenAI API', 'OpenRouter', 'MCP', 'Multi-Agent Orchestration', 'Prompt Engineering'],
  },
  {
    title: 'Machine Learning',
    tags: ['CatBoost', 'LightGBM', 'XGBoost', 'Random Forest', 'Stacked Ensembles', 'Walk-Forward Validation'],
  },
  {
    title: 'Backend',
    tags: ['Python', 'Flask', 'FastAPI', 'Node.js', 'TypeScript', 'REST APIs', 'Supabase', 'PostgreSQL'],
  },
  {
    title: 'Frontend',
    tags: ['SvelteKit', 'React', 'Next.js', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'Cloud / Infra',
    tags: ['AWS (EKS/ECS/Lambda/RDS/S3/IAM/KMS)', 'AWS GovCloud', 'Terraform', 'Docker', 'Kubernetes', 'Railway', 'Cloudflare'],
  },
];

const projects = [
  {
    name: 'SharpAI',
    url: 'https://sharpai.bet',
    role: 'Founder & Lead Engineer',
    date: '2026 – Present',
    desc: 'AI sports analytics platform that finds mathematically mispriced odds for consistent long-term edge.',
    highlights: [
      'Founded after consistently beating the market (+EV) across 22+ sportsbooks',
      'NFL winner model: +30% ROI, multi-year walk-forward, actual closing line odds',
      'ML stack: CatBoost, LightGBM, XGBoost, Random Forest, stacked ensembles',
      'MCP servers orchestrating external sports-data tools into LLM workflow',
      'RAG chat over pgvector for natural-language queries on picks & stats',
      'Real-time devigging EV finder across ~60 sportsbooks',
    ],
    tech: ['Python', 'SvelteKit', 'Supabase', 'Railway', 'CatBoost', 'LangChain', 'pgvector', 'MCP', 'TypeScript'],
  },
  {
    name: 'Amigo.Study',
    url: 'https://amigo.study',
    role: 'Full Stack Developer / AI Engineer',
    date: '2025 – Present',
    desc: 'AI study platform used at Cornell, UC Berkeley, UCLA, CMU, UPenn, and USC.',
    highlights: [
      'RAG pipeline: PDF, PPT, MP4, MP3, YouTube ingestion',
      'OAuth: Notion + Google Drive into personal knowledge base RAG',
      'Used at 6+ top universities across the US',
      'Building native iOS app in Swift',
    ],
    tech: ['Node.js', 'TypeScript', 'Svelte', 'Supabase', 'RAG', 'LLM APIs', 'Swift', 'OAuth'],
  },
];

const experience = [
  {
    company: 'SharpAI',
    role: 'Founder & Lead Engineer',
    date: '2026 – Present',
    bullets: [
      'Building and shipping AI/ML betting platform end-to-end as sole founder',
      'Python ML service on Railway, SvelteKit/TypeScript frontend, Supabase backend',
      'Real-time data pipeline with independent worker loops and token-bucket rate limiting',
    ],
  },
  {
    company: 'Amigo.Study',
    role: 'Full Stack Developer / AI Engineer',
    date: '2025 – Present',
    bullets: [
      'Architected AI study app with Node.js/TypeScript backend and Svelte frontend',
      'RAG system with multi-format document processing and YouTube ingestion',
      'OAuth integration for Notion and Google Drive knowledge base ingestion',
    ],
  },
  {
    company: 'Accenture Federal Services',
    role: 'Senior Cloud/DevOps Engineer — IRS',
    date: '2025 – Present',
    bullets: [
      'AWS + GCP cloud infrastructure using Terraform IaC with federal compliance',
      'EKS/ECS containerization, zero-trust, KMS/IAM, encryption at rest/in transit',
      'Mentor junior engineers in Terraform, Git workflows, and DevOps automation',
    ],
  },
  {
    company: 'Accenture Federal (Smooth Stack)',
    role: 'Cloud Engineer',
    date: '2024 – 2025',
    bullets: [
      'Multi-env Terraform workspaces, modular modules for standardized resource creation',
      'Kinesis, EBS, S3 configuration with performance and cost optimization',
    ],
  },
  {
    company: 'Democracy Lab',
    role: 'Full Stack Developer',
    date: '2023 – 2024',
    bullets: [
      'Next.js, Django, TypeScript, PostgreSQL — reusable component architecture',
    ],
  },
];

const education = [
  { school: 'UC Santa Cruz', degree: 'B.S. Technology Information Management', date: '2020' },
  { school: 'App Academy', degree: '1,000-hr Full Stack — <3% acceptance', date: '2023' },
  { school: 'Las Positas College', degree: 'A.S. Computer Science', date: '2017' },
  { school: 'Akamai', degree: 'Web App & API Protection Cert', date: '2024' },
];

function useFadeIn() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = el.querySelectorAll('.fade-in');
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function App() {
  const mainRef = useFadeIn();

  return (
    <div ref={mainRef}>
      {/* NAV */}
      <nav>
        <div className="nav-logo">TL</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO BENTO */}
      <section className="hero-bento" style={{ padding: '80px 48px 0', maxWidth: 1200 }}>
        <div className="hero-grid">
          <div className="bento-card hero-name-card fade-in">
            <div className="hero-label">AI Engineer / ML Builder</div>
            <h1 className="hero-name">Taylor Lim</h1>
            <p className="hero-tagline">
              Senior engineer specializing in <strong>AI agents</strong>, <strong>production ML</strong>, and <strong>LLM systems</strong> — from federal cloud infra to self-funded AI startups.
            </p>
          </div>

          <div className="bento-card stat-card fade-in">
            <div className="stat-value">+30%</div>
            <div className="stat-label">NFL Model ROI</div>
          </div>

          <div className="bento-card stat-card fade-in">
            <div className="stat-value">22+</div>
            <div className="stat-label">Sportsbooks Beaten</div>
          </div>

          <div className="bento-card stat-card fade-in">
            <div className="stat-value">3</div>
            <div className="stat-label">Sports Modeled</div>
          </div>

          <div className="bento-card clearance-card fade-in">
            <div>
              <div className="clearance-dot" />
            </div>
            <div>
              <div className="clearance-text">Active Security Clearance</div>
              <div className="clearance-sub">Federal — Accenture / IRS</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT + SKILLS */}
      <section id="about">
        <div className="section-label fade-in">About</div>
        <h2 className="section-title fade-in">Skills & Stack</h2>
        <div className="about-grid">
          <div className="bento-card bio-card fade-in">
            <p>
              I build <strong>AI-powered products</strong> from zero to production. My work spans founding a profitable ML sports analytics platform, shipping RAG-powered study tools used at top universities, and leading federal cloud infrastructure at scale. I care about <strong>systems that work</strong> — real ROI, real users, real infra.
            </p>
          </div>
          {skills.map((s) => (
            <div key={s.title} className="skill-card fade-in">
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
        <div className="section-label fade-in">What I've Built</div>
        <h2 className="section-title fade-in">Featured Projects</h2>
        <div className="projects-stack">
          {projects.map((p) => (
            <div key={p.name} className="project-card fade-in">
              <div className="project-header">
                <div className="project-name">{p.name}</div>
                <a href={p.url} target="_blank" rel="noreferrer" className="project-link">
                  {p.url.replace('https://', '')} ↗
                </a>
              </div>
              <div className="project-role">{p.role} · {p.date}</div>
              <p className="project-desc">{p.desc}</p>
              <ul className="project-highlights">
                {p.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
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
        <div className="section-label fade-in">Where I've Worked</div>
        <h2 className="section-title fade-in">Experience</h2>
        <div className="timeline">
          {experience.map((e) => (
            <div key={e.company + e.date} className="timeline-item fade-in">
              <div className="timeline-date">{e.date}</div>
              <div className="timeline-company">{e.company}</div>
              <div className="timeline-role">{e.role}</div>
              <ul className="timeline-bullets">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <div className="section-label fade-in">Background</div>
        <h2 className="section-title fade-in">Education & Certs</h2>
        <div className="edu-grid">
          {education.map((e) => (
            <div key={e.school} className="edu-card fade-in">
              <div className="edu-date">{e.date}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-degree">{e.degree}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <div className="contact-section" id="contact">
        <div className="section-label fade-in" style={{ textAlign: 'center' }}>Let's Talk</div>
        <h2 className="section-title fade-in" style={{ textAlign: 'center' }}>Get In Touch</h2>
        <div className="contact-card fade-in">
          <p>
            Open to senior engineering roles at AI-first startups. If you're building something ambitious, I'd love to hear about it.
          </p>
          <div className="contact-links">
            <a href="mailto:tayjlim@gmail.com" className="contact-link primary">tayjlim@gmail.com</a>
            <a href="https://github.com/tayjlim" target="_blank" rel="noreferrer" className="contact-link">GitHub</a>
            <a href="https://linkedin.com/in/tayjlim" target="_blank" rel="noreferrer" className="contact-link">LinkedIn</a>
          </div>
        </div>
      </div>

      <footer>
        <p>Built by Taylor Lim · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
