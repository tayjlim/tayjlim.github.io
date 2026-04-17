import './App.css';
import Background from './Components/particlesPackageBG/bgAnimation';

const skills = [
  {
    title: 'AI / LLM',
    tags: ['LangChain', 'RAG', 'pgvector', 'Claude API', 'OpenAI API', 'OpenRouter', 'MCP', 'Multi-Agent Orchestration', 'Prompt Engineering'],
  },
  {
    title: 'Machine Learning',
    tags: ['CatBoost', 'LightGBM', 'XGBoost', 'Random Forest', 'Stacked Ensembles', 'Walk-Forward Validation', 'Scikit-learn'],
  },
  {
    title: 'Backend',
    tags: ['Python', 'Flask', 'FastAPI', 'Node.js', 'TypeScript', 'REST APIs', 'Supabase', 'PostgreSQL', 'SQL'],
  },
  {
    title: 'Frontend',
    tags: ['SvelteKit', 'Svelte', 'React', 'Next.js', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'Cloud / Infra',
    tags: ['AWS EKS/ECS/Lambda', 'AWS GovCloud', 'Terraform', 'Docker', 'Kubernetes', 'Railway', 'Cloudflare', 'CI/CD', 'RDS', 'S3', 'IAM/KMS'],
  },
];

const projects = [
  {
    name: 'SharpAI',
    url: 'https://sharpai.bet',
    role: 'Founder & Lead Engineer',
    featured: true,
    desc: 'AI-powered sports analytics platform built around Expected Value (EV) — identifying mathematically mispriced odds to generate consistent long-term edge.',
    highlights: [
      'Founded after consistently beating the market (+EV) across 22+ sportsbooks',
      'NFL winner model: +30% ROI across multi-year walk-forward validation with actual closing line odds',
      'ML stack: CatBoost, LightGBM, XGBoost, Random Forest, stacked ensembles',
      'Integrated MCP servers to orchestrate external sports-data tools into LLM workflow',
      'Built RAG-powered chat over pgvector for natural-language queries on picks & stats',
      'Multi-sport +EV finder with real-time devigging across ~60 sportsbooks',
    ],
    tech: ['Python', 'SvelteKit', 'Supabase', 'Railway', 'CatBoost', 'LangChain', 'pgvector', 'MCP', 'TypeScript'],
  },
  {
    name: 'Amigo.Study',
    url: 'https://amigo.study',
    role: 'Full Stack Developer / AI Engineer',
    featured: false,
    desc: 'AI-powered student study platform used at Cornell, UC Berkeley, UCLA, Carnegie Mellon, UPenn, and USC.',
    highlights: [
      'RAG pipeline supporting PDF, Word, Excel, and YouTube video ingestion',
      'OAuth integration for Notion and Google Drive — personal knowledge bases into the RAG pipeline',
      'Node.js/TypeScript backend, Svelte frontend, Supabase',
      'Building native iOS mobile app in Swift',
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
      'Building and shipping a customer-facing AI/ML betting platform end-to-end as sole founder',
      'Python ML service on Railway, SvelteKit/TypeScript frontend, Supabase backend',
      'Engineered real-time data pipeline with independent worker loops and token-bucket rate limiting',
    ],
  },
  {
    company: 'Amigo.Study',
    role: 'Full Stack Developer / AI Engineer',
    date: '2025 – Present',
    bullets: [
      'Architected AI-powered study app with Node.js/TypeScript backend and Svelte frontend',
      'Implemented RAG system with multi-format document processing and YouTube ingestion',
      'Integrated OAuth for Notion and Google Drive knowledge base ingestion',
    ],
  },
  {
    company: 'Accenture Federal Services',
    role: 'Senior Cloud/DevOps Engineer — IRS',
    date: '2025 – Present',
    bullets: [
      'Lead AWS + GCP cloud infrastructure using Terraform IaC with federal security compliance',
      'Multi-environment infrastructure (Dev/Stage/Prod) with Terraform workspaces and reusable modules',
      'Advanced security controls: KMS, IAM, zero-trust, encryption at rest/in transit',
      'EKS/ECS containerization, CI/CD pipelines, cloud cost optimization',
      'Mentor junior engineers in Terraform, Git workflows, and DevOps automation',
    ],
  },
  {
    company: 'Accenture Federal (Smooth Stack)',
    role: 'Cloud Engineer',
    date: '2024 – 2025',
    bullets: [
      'Terraform workspaces for isolated multi-environment infrastructure',
      'Modular Terraform modules to standardize resource creation across teams',
      'Kinesis, EBS, and S3 configuration with performance and cost optimization',
    ],
  },
  {
    company: 'Democracy Lab',
    role: 'Full Stack Developer',
    date: '2023 – 2024',
    bullets: [
      'Next.js front-end with reusable component architecture, Figma to code',
      'Django ORM data models and database schemas',
    ],
  },
];

const education = [
  { school: 'UC Santa Cruz', degree: 'B.S. Technology Information Management', date: 'Jun 2020' },
  { school: 'App Academy', degree: '1,000-hr Full Stack Intensive — <3% acceptance rate', date: 'Jul 2023' },
  { school: 'Las Positas College', degree: 'A.S. Computer Science', date: 'Dec 2017' },
  { school: 'Akamai Partner Program', degree: 'Web App & API Protection Certification', date: 'May 2024' },
];

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Background />

      {/* NAV */}
      <nav>
        <div className="nav-logo">TL</div>
        <ul className="nav-links">
          <li><a href="#about">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero" style={{ padding: 0, maxWidth: 'none' }}>
        <div className="hero-content">
          <div className="hero-tag">Active Security Clearance · Open to Work</div>
          <h1 className="hero-name">Taylor Lim</h1>
          <p className="hero-tagline">AI Engineer. ML Builder. Beating the Market.</p>
          <p className="hero-sub">Senior Software Engineer specializing in AI agents, LLM systems, and production ML — from federal cloud infra to self-funded AI startups.</p>
          <div className="hero-badges">
            <span className="badge">LangChain + RAG</span>
            <span className="badge">MCP Orchestration</span>
            <span className="badge">Production ML Models</span>
            <span className="badge">AWS GovCloud</span>
          </div>
          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">See My Work</a>
            <a href="mailto:tayjlim@gmail.com" className="btn-outline">Get in Touch</a>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <div className="stat-strip">
        <div className="stat">
          <div className="stat-number">+30%</div>
          <div className="stat-label">NFL Model ROI</div>
        </div>
        <div className="stat">
          <div className="stat-number">22+</div>
          <div className="stat-label">Sportsbooks Beaten</div>
        </div>
        <div className="stat">
          <div className="stat-number">60+</div>
          <div className="stat-label">Live Sportsbooks</div>
        </div>
        <div className="stat">
          <div className="stat-number">5+</div>
          <div className="stat-label">Years Engineering</div>
        </div>
      </div>

      {/* SKILLS */}
      <section id="about">
        <div className="section-label">What I Work With</div>
        <h2 className="section-title">Skills & Stack</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.title} className="skill-card">
              <div className="skill-card-title">{s.title}</div>
              <div className="skill-tags">
                {s.tags.map((t) => <span key={t} className="skill-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-label">What I've Built</div>
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.name} className={`project-card ${p.featured ? 'featured' : ''}`}>
              <div className="project-header">
                <div className="project-name">{p.name}</div>
                <a href={p.url} target="_blank" rel="noreferrer" className="project-live">↗ Live</a>
              </div>
              <div className="project-role">{p.role}</div>
              <p className="project-desc">{p.desc}</p>
              <ul className="project-highlights">
                {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
              <div className="project-tech">
                {p.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="section-label">Where I've Worked</div>
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experience.map((e) => (
            <div key={e.company} className="timeline-item">
              <div className="timeline-header">
                <div className="timeline-company">{e.company}</div>
                <div className="timeline-role">{e.role}</div>
                <div className="timeline-date">{e.date}</div>
              </div>
              <ul className="timeline-bullets">
                {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <div className="section-label">Background</div>
        <h2 className="section-title">Education & Certs</h2>
        <div className="edu-grid">
          {education.map((e) => (
            <div key={e.school} className="edu-card">
              <div className="edu-school">{e.school}</div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-date">{e.date}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ maxWidth: 'none', padding: '100px 40px' }}>
        <div className="contact-inner">
          <div className="section-label" style={{ textAlign: 'center' }}>Let's Talk</div>
          <h2 className="section-title" style={{ marginBottom: '20px' }}>Get In Touch</h2>
          <p>I'm open to senior engineering roles, especially at AI-first startups. If you're building something ambitious, I'd love to hear about it.</p>
          <div className="contact-links">
            <a href="mailto:tayjlim@gmail.com" className="btn-primary">tayjlim@gmail.com</a>
            <a href="https://github.com/tayjlim" target="_blank" rel="noreferrer" className="btn-outline">GitHub</a>
            <a href="https://linkedin.com/in/tayjlim" target="_blank" rel="noreferrer" className="btn-outline">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer>
        <p>Built by Taylor Lim · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
