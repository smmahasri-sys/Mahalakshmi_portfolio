import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin,
  Download, Database, Workflow, ShieldCheck, BrainCircuit, Layers3,
  Terminal, ExternalLink, Menu, Sparkles
} from 'lucide-react';
import './styles.css';

const skills = [
  { title: 'Languages & scripting', items: ['Python', 'SQL', 'Shell scripting', 'Unix'] },
  { title: 'Data engineering', items: ['ETL / ELT', 'Data warehousing', 'Apache Spark', 'Apache Airflow', 'AutoSys'] },
  { title: 'Databases', items: ['DB2', 'Teradata', 'MySQL', 'Sybase'] },
  { title: 'Cloud & modern stack', items: ['Azure Blob Storage', 'Snowflake fundamentals', 'dbt — learning'] },
  { title: 'Delivery & tooling', items: ['Git', 'Bitbucket', 'Jenkins', 'CI/CD', 'Jira', 'Rally'] },
  { title: 'BI & reporting', items: ['Tableau', 'Power BI', 'Regulatory reporting', 'Data validation'] },
];

const projects = [
  {
    number: '01',
    category: 'DATA ENGINEERING · PERSONAL PROJECT',
    title: 'Data Pipeline & Semantic Search',
    description: 'A local Python pipeline that turns technology-news articles into queryable company ARR observations and a semantic-search index.',
    details: [
      'Cleans and normalizes article and company metadata.',
      'Models companies, articles, and ARR observations for analysis.',
      'Uses all-MiniLM-L6-v2 embeddings (384 dimensions) and cosine similarity to find related articles.'
    ],
    stack: ['Python', 'Pandas', 'NumPy', 'SQL', 'Sentence Transformers'],
    icon: Database,
    tone: 'mint',
    github: 'https://github.com/'
  },
  {
    number: '02',
    category: 'GENERATIVE AI · PERSONAL PROJECT',
    title: 'HR Assistant — RAG Pipeline',
    description: 'A document-grounded assistant concept that helps users find answers from HR policy documents using retrieval-augmented generation.',
    details: [
      'Prepares policy documents through text extraction and chunking.',
      'Uses embeddings and vector retrieval to find relevant context.',
      'Builds context-aware answers from retrieved policy passages.'
    ],
    stack: ['Python', 'RAG', 'Embeddings', 'Vector Search', 'LLMs'],
    icon: BrainCircuit,
    tone: 'violet',
    github: 'https://github.com/'
  },
  {
    number: '03',
    category: 'BANKING & FINANCIAL SERVICES',
    title: 'APAC Regulatory Reporting Automation',
    description: 'Designed and automated more than 20 Balance Sheet regulatory reports for Australian Finance stakeholders, supporting APRA reporting.',
    details: [
      'Developed and maintained ETL components for BI reporting.',
      'Built stored procedures, database views, and complex SQL queries.',
      'Reduced daily manual reporting effort by approximately four hours while improving reporting accuracy.'
    ],
    stack: ['SQL', 'ETL', 'Data Warehousing', 'Regulatory Reporting'],
    icon: ShieldCheck,
    tone: 'blue',
    github: null
  },
  {
    number: '04',
    category: 'DATA PLATFORM · CLOUD MIGRATION',
    title: 'AI-assisted Archival Data Migration',
    description: 'Used AI-assisted development to accelerate migration workflows for nearly 1 TB of archival data files to Microsoft Azure Blob Storage.',
    details: [
      'Accelerated code generation and migration workflow development.',
      'Supported validation activities for migrated data.',
      'Focused on reducing repetitive manual effort and improving migration efficiency.'
    ],
    stack: ['Python', 'Unix', 'Azure Blob Storage', 'Data Validation'],
    icon: Layers3,
    tone: 'amber',
    github: null
  }
];

function Header() {
  return <header className="topbar">
    <a className="brand" href="#home" aria-label="Mahalakshmi home"><span className="brand-mark">M.</span><span>MAHALAKSHMI S</span></a>
    <nav>
      <a href="#about">About</a><a href="#skills">Skills</a><a href="#work">Projects</a><a href="#experience">Experience</a>
    </nav>
    <a className="nav-cta" href="#contact">Let's connect <ArrowUpRight size={15}/></a>
  </header>;
}

function SectionLabel({ children }) {
  return <div className="section-label"><span className="label-line"></span>{children}</div>;
}

function ProjectCard({ project }) {
  const Icon = project.icon;
  return <article className={`project-card ${project.tone}`}>
    <div className="project-top"><span className="project-number">{project.number}</span><span className="project-icon"><Icon size={21}/></span></div>
    <p className="eyebrow">{project.category}</p>
    <h3>{project.title}</h3>
    <p className="project-desc">{project.description}</p>
    <ul className="project-details">{project.details.map((d, i) => <li key={i}>{d}</li>)}</ul>
    <div className="tags">{project.stack.map(s => <span key={s}>{s}</span>)}</div>
    {project.github && <a className="project-link" href={project.github} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={15}/></a>}
  </article>;
}

function App() {
  return <div className="site-shell">
    <Header />
    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="pulse"></span> DATA ENGINEERING · BENGALURU, INDIA</div>
          <h1>Building data systems<br/>that <span className="accent-text">make sense.</span></h1>
          <p className="hero-intro">I'm Mahalakshmi — a Data Engineer with <strong>7+ years of experience</strong> across ETL development, data warehousing, regulatory reporting, and automation in financial services.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a>
            <a className="button button-secondary" href="/Mahalakshmi-S-Resume.pdf" target="_blank" rel="noreferrer"><Download size={16}/> Download resume</a>
          </div>
          <div className="hero-metrics">
            <div><strong>7+</strong><span>Years in technology</span></div>
            <div><strong>20+</strong><span>Regulatory reports automated</span></div>
            <div><strong>67%</strong><span>Batch time reduction on AML ETL</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-grid"></div>
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <div className="profile-frame"><img src="/profile.jpg" alt="Portrait of Mahalakshmi S" /></div>
          <div className="floating-card card-data"><span className="mini-icon"><Database size={16}/></span><div><strong>Data pipelines</strong><small>Reliable · Observable · Scalable</small></div></div>
          <div className="floating-card card-ai"><span className="mini-icon violet-icon"><Sparkles size={16}/></span><div><strong>AI-assisted workflows</strong><small>Automation with purpose</small></div></div>
          <div className="visual-caption"><span className="caption-dot"></span> Turning complex data into trusted outcomes</div>
        </div>
        <a className="scroll-cue" href="#about"><span></span> SCROLL TO EXPLORE</a>
      </section>

      <section className="about section-wrap section-block" id="about">
        <div className="section-heading"><SectionLabel>01 / ABOUT</SectionLabel><h2>Engineering with a focus<br/>on <span className="muted-heading">reliability and impact.</span></h2></div>
        <div className="about-content">
          <p className="about-lead">I work at the intersection of data engineering, financial reporting, and workflow automation.</p>
          <p>At Morgan Stanley, I support Treasury, Liquidity Risk, and Regulatory Reporting workflows. My experience spans ETL development, SQL performance tuning, distributed data processing, data validation, and collaboration across delivery cycles.</p>
          <p>Earlier at Infosys, I worked on banking and AML data workflows — including an ETL optimization that reduced batch execution time from two hours to 40 minutes.</p>
          <div className="about-note"><Terminal size={18}/><span>Currently deepening my skills in modern data platforms and AI-powered data applications.</span></div>
        </div>
      </section>

      <section className="skills-section section-block" id="skills">
        <div className="section-wrap">
          <div className="section-heading"><SectionLabel>02 / TOOLKIT</SectionLabel><h2>Tools I use to move<br/><span className="muted-heading">data forward.</span></h2></div>
          <div className="skills-grid">{skills.map((group, i) => <div className="skill-group" key={group.title}><div className="skill-index">0{i+1}</div><h3>{group.title}</h3><div className="tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
          <p className="skills-footnote">Snowflake and dbt are listed at the level stated in my resume; this portfolio distinguishes current experience from ongoing learning.</p>
        </div>
      </section>

      <section className="work section-wrap section-block" id="work">
        <div className="work-heading"><div className="section-heading"><SectionLabel>03 / SELECTED WORK</SectionLabel><h2>Projects with a purpose.</h2></div><p>From financial data workflows to semantic search, these projects show how I think about data quality, traceability, and useful outcomes.</p></div>
        <div className="projects-grid">{projects.map(p => <ProjectCard key={p.number} project={p}/>)}</div>
        <div className="project-disclaimer">Project descriptions summarize work and projects from my resume. Public code links can be replaced with specific repositories once selected.</div>
      </section>

      <section className="experience section-block" id="experience">
        <div className="section-wrap">
          <div className="section-heading"><SectionLabel>04 / EXPERIENCE</SectionLabel><h2>A foundation in complex<br/><span className="muted-heading">data environments.</span></h2></div>
          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-date">JAN 2022 — PRESENT</div><div className="timeline-marker"></div>
              <div className="timeline-body"><div className="timeline-title"><div><h3>Morgan Stanley</h3><p>Software Engineer — L3 Associate · Bengaluru</p></div><span className="current-pill">CURRENT</span></div>
                <div className="experience-track"><h4>Treasury CORE — Liquidity Risk & Regulatory Reporting</h4><ul><li>Automated data workflows using Airflow, Python, and SQL on DB2.</li><li>Led and mentored a small engineering team through task allocation, code reviews, and technical guidance.</li><li>Used AI-assisted development to accelerate routine ETL work and supported UAT, regression, and production readiness.</li></ul></div>
                <div className="experience-track"><h4>Balance Sheet & Regulatory Reporting — APAC</h4><ul><li>Designed, tested, and maintained ETL components and complex SQL for BI reporting.</li><li>Used Apache Spark for distributed processing and delivered reporting solutions for Finance stakeholders.</li><li>Contributed to automation of 20+ APAC Balance Sheet regulatory reports.</li></ul></div>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-date">AUG 2019 — JAN 2022</div><div className="timeline-marker"></div>
              <div className="timeline-body"><div className="timeline-title"><div><h3>Infosys Limited</h3><p>Senior Systems Engineer · Banking & Finance</p></div></div>
                <h4>Anti-Money Laundering (AML)</h4><ul><li>Optimized IBM DataStage ETL workflows and SQL queries, reducing batch execution time from 2 hours to 40 minutes (67%).</li><li>Created and scheduled AutoSys jobs, supported job-flow impact analysis, and worked with raw and staging data warehouse layers.</li><li>Performed unit and integration testing and supported deployments.</li></ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="education section-wrap section-block">
        <div className="education-card"><div><SectionLabel>05 / EDUCATION</SectionLabel><h3>B.Tech, Computer Science & Engineering</h3><p>SASTRA University <span>·</span> 2015 — 2019</p></div><div className="education-symbol"><Layers3 size={26}/></div></div>
      </section>

      <section className="contact section-wrap section-block" id="contact">
        <div className="contact-panel"><div className="contact-glow"></div><SectionLabel>06 / GET IN TOUCH</SectionLabel><h2>Let's build something<br/><span className="accent-text">meaningful with data.</span></h2><p>Interested in Data Engineering, ETL, analytics platforms, or AI-powered data applications? I'd be happy to connect.</p>
          <div className="contact-actions"><a className="button button-primary" href="mailto:smmahasri@gmail.com"><Mail size={16}/> Email me <ArrowUpRight size={16}/></a><a className="button button-secondary" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ExternalLink size={14}/></a><a className="button button-secondary" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ExternalLink size={14}/></a></div>
          <div className="contact-meta"><span><MapPin size={14}/> Bengaluru, India</span><span><Mail size={14}/> smmahasri@gmail.com</span></div>
        </div>
      </section>
    </main>
    <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">M.</span><span>MAHALAKSHMI S</span></a><span>Designed for clarity. Built around data.</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
