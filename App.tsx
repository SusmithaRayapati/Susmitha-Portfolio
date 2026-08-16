import { FormEvent, useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  Circle,
  Code2,
  Database,
  ExternalLink,
  FileDown,
  Github,
  GraduationCap,
  LayoutDashboard,
  Linkedin,
  Mail,
  Menu,
  PanelTop,
  Send,
  Sparkles,
  TerminalSquare,
  X,
} from 'lucide-react';

type Project = {
  number: string;
  title: string;
  description: string;
  problem: string;
  approach: string;
  tools: string[];
  features: string[];
  accent: string;
  type: 'dashboard' | 'sql' | 'platform' | 'education';
};

const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Certifications', 'Contact'];

const projects: Project[] = [
  {
    number: '01',
    title: 'Netflix Content Insights & Trend Analysis',
    description: 'Explored Netflix content data to uncover patterns across formats, ratings, countries, and release years, then shaped the findings into an interactive Power BI experience.',
    problem: 'How can a large content catalogue be understood quickly by someone making programming or audience decisions?',
    approach: 'Cleaned and transformed the dataset with Python and Pandas, performed exploratory analysis, and translated the findings into a focused dashboard narrative.',
    tools: ['Python', 'Pandas', 'Power BI', 'EDA', 'Data Visualization'],
    features: ['Content mix analysis', 'Ratings and release trends', 'Country-level exploration', 'Interactive dashboard storytelling'],
    accent: 'cyan',
    type: 'dashboard',
  },
  {
    number: '02',
    title: 'BMW Global Sales Performance Dashboard',
    description: 'Built an interactive business intelligence dashboard to analyze BMW sales performance across important business dimensions.',
    problem: 'How can sales performance be viewed from multiple angles without losing the story in spreadsheets?',
    approach: 'Structured the data in Excel and designed a Power BI report that makes comparison and exploration feel immediate.',
    tools: ['Power BI', 'Excel', 'Dashboard', 'Business Intelligence'],
    features: ['Sales performance view', 'Business dimension filters', 'Executive-friendly reporting'],
    accent: 'blue',
    type: 'dashboard',
  },
  {
    number: '03',
    title: 'Grocery Delivery Business Analysis',
    description: 'Performed business analysis on grocery delivery data to answer questions around revenue, customers, orders, products, and store performance.',
    problem: 'Which operational questions can SQL answer when the data spans customers, orders, products, and stores?',
    approach: 'Used joins, aggregations, CTEs, subqueries, and window functions to turn raw tables into business-ready answers.',
    tools: ['SQL', 'JOIN', 'GROUP BY', 'CTE', 'SUBQUERY', 'WINDOW FUNCTIONS'],
    features: ['Revenue analysis', 'Customer and order analysis', 'Product performance', 'Store comparisons'],
    accent: 'amber',
    type: 'sql',
  },
  {
    number: '04',
    title: 'CourseSphere AI',
    description: 'Developed a smart course management platform with a Streamlit frontend, FastAPI backend, and SQLite database.',
    problem: 'How can course records and management workflows stay simple, accessible, and easy to use?',
    approach: 'Connected a lightweight interface to a REST API and database-backed CRUD flow for a practical application experience.',
    tools: ['Python', 'Streamlit', 'FastAPI', 'SQLite'],
    features: ['CRUD operations', 'REST API', 'SQLite persistence', 'Streamlit interface'],
    accent: 'mint',
    type: 'platform',
  },
  {
    number: '05',
    title: 'Student Performance Dashboard',
    description: 'Created an interactive dashboard to analyze student performance and identify meaningful academic patterns.',
    problem: 'How can academic data be made easier to compare and understand at a glance?',
    approach: 'Combined Python, Excel, and Power BI to shape a clear visual reporting experience.',
    tools: ['Python', 'Excel', 'Power BI'],
    features: ['Performance analysis', 'Academic pattern exploration', 'Interactive reporting'],
    accent: 'sky',
    type: 'education',
  },
  {
    number: '06',
    title: 'AI for Enhancing Student Participation',
    description: 'A final-year project focused on analyzing student participation and exploring intelligent approaches for personalized learning and engagement.',
    problem: 'How might participation data support more personalized and engaging online learning experiences?',
    approach: 'Explored analytical and machine learning approaches including clustering, forecasting, and recommendation concepts.',
    tools: ['Python', 'K-Means', 'DBSCAN', 'ARIMA', 'Prophet'],
    features: ['Participation analysis', 'Personalized learning direction', 'Machine learning exploration'],
    accent: 'violet-free',
    type: 'education',
  },
];

const skillGroups = [
  { label: 'Data Analytics', icon: BarChart3, skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'EDA', 'Data Cleaning'] },
  { label: 'SQL & Database', icon: Database, skills: ['SQL', 'Joins', 'Subqueries', 'CTEs', 'Window Functions', 'Aggregations'] },
  { label: 'Business Intelligence', icon: LayoutDashboard, skills: ['Power BI', 'DAX', 'Power Query', 'Excel', 'Tableau', 'Dashboard Development'] },
  { label: 'Development', icon: Code2, skills: ['HTML', 'CSS', 'Flask', 'Django', 'FastAPI', 'Streamlit'] },
  { label: 'Tools', icon: TerminalSquare, skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'] },
];

const certifications = [
  ['Intellipaat SQL', 'Intellipaat', '05 / 2025'],
  ['Intellipaat Excel', 'Intellipaat', '10 / 2025'],
  ['Python Essentials 1', 'Cisco Networking Academy', '10 / 2024'],
  ['Python Basic', 'HackerRank', 'Year not provided'],
  ['Generative AI Mastermind', 'Outskill', '06 / 2025'],
];

const timeline: [string, string, string, string, string, string[]][] = [
  ['2026', 'Infosys Springboard', 'Data Visualization Intern', 'February 2026 – April 2026', 'Worked with data visualization and analysis using real-world datasets and developed insights through visual reporting.', ['Excel', 'Power BI', 'Data Visualization']],
  ['2025', 'Yuvaan IT Labs', 'Data Analytics Intern', 'June 2025 – August 2025', 'Worked on data analysis, data preparation, visualization, and extracting meaningful insights from datasets.', ['Python', 'SQL', 'Power BI']],
  ['2024', 'Think Champ Pvt Ltd', 'Python Full Stack Intern', 'July 2024 – August 2024', 'Gained practical experience in Python-based application and web development.', ['Python', 'Flask', 'Web Development']],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSent(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="cursor-glow" aria-hidden="true" />
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark"><Circle size={11} fill="currentColor" /></span>
          Susmitha<span className="brand-dot">.</span>
        </a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-resume" href="/Susmitha_Resume_new.pdf" download><FileDown size={15} /> Resume</a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <main>
        <section className="hero section-frame" id="home">
          <div className="hero-copy reveal-up">
            <div className="eyebrow"><span className="status-dot" /> Available for data analytics opportunities</div>
            <h1>Turning data into <em>meaningful insights.</em></h1>
            <p className="hero-subtitle">I’m Susmitha, a Computer Science Engineering student passionate about Data Analytics, Business Intelligence, and solving real-world problems with data.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="/Susmitha_Resume_new.pdf" download>Download resume <FileDown size={16} /></a>
            </div>
            <div className="social-row">
              <a href="https://www.linkedin.com/in/susmitharayapati/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ExternalLink size={12} /></a>
              <a href="https://github.com/SusmithaRayapati" target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ExternalLink size={12} /></a>
            </div>
          </div>
          <DashboardVisual />
          <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDownRight size={17} /></a>
        </section>

        <section className="tech-strip" aria-label="Technologies">
          <span className="strip-label">Working across</span>
          {['Python', 'SQL', 'Power BI', 'Excel', 'Pandas', 'NumPy', 'Tableau', 'FastAPI'].map((tech, index) => <span className="tech-item" key={tech}><span className="tech-number">0{index + 1}</span>{tech}</span>)}
        </section>

        <section className="section-frame about-section" id="about">
          <SectionIntro number="01" label="Profile" title={<>A curious mind for <em>clearer decisions.</em></>} />
          <div className="about-grid">
            <div className="about-copy"><p className="lead-copy">I’m a Computer Science Engineering student focused on Data Analytics and Business Intelligence. I enjoy transforming raw data into meaningful insights through data cleaning, exploratory analysis, SQL, visualization, and dashboard development.</p><p>Through internships and personal projects, I have worked with Python, SQL, Power BI, Excel, data visualization, APIs, and application development.</p><p>I’m looking for opportunities where I can use analytical thinking and technical skills to solve real business problems and continuously grow as a Data Analyst.</p><a className="text-link" href="#contact">Let’s start a conversation <ArrowUpRight size={16} /></a></div>
            <div className="what-card"><div className="card-kicker">What I do <Sparkles size={15} /></div>{[['01', 'Data Cleaning & Preparation'], ['02', 'SQL & Business Analysis'], ['03', 'Interactive Dashboards'], ['04', 'Data Visualization']].map(([num, label]) => <div className="what-row" key={num}><span>{num}</span><strong>{label}</strong><ChevronRight size={17} /></div>)}</div>
          </div>
        </section>

        <section className="metrics-section section-frame" aria-label="Professional metrics">
          {[['400+', 'DSA problems solved'], ['3', 'Internship experiences'], ['6+', 'Featured projects'], ['5+', 'Analytics & BI technologies']].map(([value, label]) => <div className="metric" key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </section>

        <section className="section-frame experience-section" id="experience">
          <SectionIntro number="02" label="Experience" title={<>Learning by working <em>with real data.</em></>} />
          <div className="timeline">
            {timeline.map(([year, company, role, dates, description, tags]) => <article className="timeline-item" key={company}><div className="timeline-year">{year}</div><div className="timeline-marker" /><div className="timeline-content"><div className="timeline-top"><div><h3>{company}</h3><p className="role">{role}</p></div><span>{dates}</span></div><p>{description}</p><div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}
          </div>
        </section>

        <section className="section-frame skills-section" id="skills">
          <SectionIntro number="03" label="Capabilities" title={<>Tools that turn questions into <em>answers.</em></>} />
          <div className="skill-grid">{skillGroups.map(({ label, icon: Icon, skills }) => <article className="skill-card" key={label}><div className="skill-icon"><Icon size={20} /></div><h3>{label}</h3><div className="skill-pills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div>
        </section>

        <section className="section-frame projects-section" id="projects">
          <SectionIntro number="04" label="Selected work" title={<>A closer look at what I’ve <em>built.</em></>} description="A collection of projects where I turn data, technology, and ideas into practical solutions." />
          <div className="project-list">{projects.map((project, index) => <ProjectCard key={project.number} project={project} featured={index === 0} onOpen={() => setSelectedProject(project)} />)}</div>
        </section>

        <section className="section-frame certifications-section" id="certifications">
          <SectionIntro number="05" label="Credentials" title={<>Always sharpening the <em>toolkit.</em></>} />
          <div className="credential-layout"><div className="cert-grid">{certifications.map(([title, provider, year]) => <article className="cert-card" key={title}><div className="cert-icon"><Check size={15} /></div><div><h3>{title}</h3><p>{provider}</p></div><span>{year}</span></article>)}</div><div className="achievement-panel"><div className="card-kicker">Beyond the screen <ArrowUpRight size={15} /></div><h3>Small wins,<br /><em>steady momentum.</em></h3><ul><li><strong>400+</strong><span>DSA Problems Solved</span></li><li><strong>180</strong><span>Days Coding Challenge · GeeksforGeeks</span></li><li><strong>2025</strong><span>IEEE Day Ambassador</span></li><li><strong>01</strong><span>Hackadamia Hackathon</span></li></ul></div></div>
        </section>

        <section className="education-section section-frame"><div className="education-mark"><GraduationCap size={28} /></div><div><span className="section-label">Education</span><h2>B.Tech — Computer Science & Engineering</h2><p>NBKR Institute of Science & Technology (NBKRIST) <span>·</span> JNTUA Affiliated</p></div><span className="education-date">2022 — 2026</span></section>

        <section className="learning-section section-frame"><div><span className="section-label">Currently exploring</span><h2>Next on the learning curve.</h2></div><div className="learning-list">{['Advanced SQL', 'Power BI & DAX', 'Business Analytics', 'Data Visualization', 'Python for Data Analytics'].map((item, index) => <div key={item}><span>0{index + 1}</span>{item}<ArrowUpRight size={16} /></div>)}</div></section>

        <section className="cta-section section-frame"><div className="data-lines" aria-hidden="true"><span /><span /><span /><span /><span /></div><div className="cta-content"><span className="section-label">Open to what’s next</span><h2>Let’s turn data<br />into <em>decisions.</em></h2><p>I’m actively looking for opportunities where I can apply my analytical and technical skills to real-world problems.</p><div className="hero-actions"><a className="button button-primary" href="/Susmitha_Resume_new.pdf" download>Download resume <FileDown size={16} /></a><a className="button button-outline-light" href="https://www.linkedin.com/in/susmitharayapati/" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16} /></a></div></div></section>

        <section className="section-frame contact-section" id="contact"><div className="contact-intro"><SectionIntro number="06" label="Contact" title={<>Let’s make something <em>meaningful.</em></>} description="Have an opportunity, project, or simply want to connect? I’d love to hear from you." /><div className="contact-links"><a href="mailto:rayapatisusmitha445@gmail.com"><Mail size={17} /> rayapatisusmitha445@gmail.com <ArrowUpRight size={14} /></a><a href="https://www.linkedin.com/in/susmitharayapati/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a><a href="https://github.com/SusmithaRayapati" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a></div></div><form className="contact-form" onSubmit={handleSubmit}><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label><label>Message<textarea required name="message" placeholder="Tell me a little about the opportunity..." rows={4} /></label><button className="button button-primary" type="submit">{formSent ? <>Message ready to send <Check size={16} /></> : <>Send message <Send size={16} /></>}</button>{formSent && <p className="form-note">Thanks for reaching out. Please send the prepared message to my email to continue the conversation.</p>}</form></section>
      </main>

      <footer className="site-footer section-frame"><a className="brand" href="#home"><span className="brand-mark"><Circle size={11} fill="currentColor" /></span>Susmitha<span className="brand-dot">.</span></a><p>Data Analyst <span>•</span> Python <span>•</span> SQL <span>•</span> Power BI</p><div><a href="https://www.linkedin.com/in/susmitharayapati/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/SusmithaRayapati" target="_blank" rel="noreferrer">GitHub</a><span>© 2026 Rayapati Susmitha</span></div></footer>

      {selectedProject && <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}><article className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details"><X size={19} /></button><span className="project-number">{selectedProject.number} / 06</span><h2 id="project-modal-title">{selectedProject.title}</h2><p className="modal-description">{selectedProject.description}</p><div className="modal-visual"><ProjectVisual type={selectedProject.type} /></div><div className="modal-details"><div><span className="section-label">Problem</span><p>{selectedProject.problem}</p></div><div><span className="section-label">Approach</span><p>{selectedProject.approach}</p></div></div><div className="modal-bottom"><div><span className="section-label">Tools & technologies</span><div className="tag-list">{selectedProject.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div><div><span className="section-label">Key features</span><ul>{selectedProject.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div></div></article></div>}
    </div>
  );
}

function SectionIntro({ number, label, title, description }: { number: string; label: string; title: React.ReactNode; description?: string }) {
  return <div className="section-intro"><div className="section-index"><span>{number}</span><span className="index-line" /></div><div><span className="section-label">{label}</span><h2>{title}</h2>{description && <p>{description}</p>}</div></div>;
}

function DashboardVisual() {
  return <div className="dashboard-wrap reveal-up delay-1"><div className="dashboard-topline"><span><span className="live-dot" /> analytics / overview</span><span>Q2 — 2026 <ArrowUpRight size={13} /></span></div><div className="dashboard-window"><div className="dash-header"><span>Performance overview</span><span className="dash-muted">Updated just now</span></div><div className="dash-stats"><div><span>Data points analysed</span><strong>24,680</strong><small className="positive"><ArrowUpRight size={12} /> 18.4% this quarter</small></div><div><span>Insight confidence</span><strong>94.8<span>%</span></strong><div className="confidence-bar"><i /></div></div></div><div className="chart-panel"><div className="chart-heading"><span>Trend analysis</span><span className="chart-legend"><i /> signal <i /> baseline</span></div><div className="line-chart"><svg viewBox="0 0 500 150" preserveAspectRatio="none" aria-label="Trend analysis chart"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#4dd7f7" stopOpacity=".26" /><stop offset="100%" stopColor="#4dd7f7" stopOpacity="0" /></linearGradient></defs><path className="chart-area" d="M0,124 C28,111 35,116 58,104 S95,104 120,84 S151,94 179,70 S220,87 247,57 S278,74 304,47 S333,65 359,33 S390,51 416,27 S455,40 500,8 V150 H0Z" /><path className="chart-line" d="M0,124 C28,111 35,116 58,104 S95,104 120,84 S151,94 179,70 S220,87 247,57 S278,74 304,47 S333,65 359,33 S390,51 416,27 S455,40 500,8" /><circle cx="359" cy="33" r="4" /><circle cx="500" cy="8" r="4" /></svg></div><div className="chart-axis"><span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span></div></div><div className="dash-bottom"><div className="mini-bars"><span className="mini-label">Category mix</span><div className="bars"><i style={{ height: '48%' }} /><i style={{ height: '80%' }} /><i style={{ height: '62%' }} /><i style={{ height: '94%' }} /><i style={{ height: '73%' }} /><i style={{ height: '100%' }} /><i style={{ height: '82%' }} /></div></div><div className="query-card"><span><TerminalSquare size={12} /> query.sql</span><code><b>SELECT</b> insights<br />&nbsp;&nbsp;<b>FROM</b> clean_data<br />&nbsp;&nbsp;<b>WHERE</b> signal = <i>true</i>;</code></div></div></div><div className="float-card float-card-a"><span className="float-icon"><Database size={14} /></span><span>SQL Analysis<small>clean queries</small></span><ArrowUpRight size={14} /></div><div className="float-card float-card-b"><span className="float-icon green"><BarChart3 size={14} /></span><span>Power BI<small>visual reporting</small></span><ArrowUpRight size={14} /></div><div className="data-coordinate">DATA / 01 <span>•</span> INSIGHT / 02</div></div>;
}

function ProjectCard({ project, featured, onOpen }: { project: Project; featured?: boolean; onOpen: () => void }) {
  return <article className={`project-card ${featured ? 'featured' : ''}`}><div className="project-info"><span className="project-number">{project.number} / 06</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tools.slice(0, featured ? 5 : 4).map((tool) => <span key={tool}>{tool}</span>)}</div><button className="project-link" onClick={onOpen}>View project details <ArrowUpRight size={16} /></button></div><div className="project-visual"><ProjectVisual type={project.type} /></div></article>;
}

function ProjectVisual({ type }: { type: Project['type'] }) {
  if (type === 'sql') return <div className="visual-sql"><span><TerminalSquare size={14} /> business_analysis.sql</span><pre><b>WITH</b> monthly_sales <b>AS</b> (<br />&nbsp;&nbsp;<b>SELECT</b> store_id, <b>SUM</b>(revenue)<br />&nbsp;&nbsp;<b>FROM</b> orders<br />&nbsp;&nbsp;<b>GROUP BY</b> store_id<br />)<br /><b>SELECT</b> * <b>FROM</b> monthly_sales<br /><b>ORDER BY</b> revenue <b>DESC</b>;</pre><div className="sql-result">6 rows returned <span>00.24s</span></div></div>;
  if (type === 'platform') return <div className="visual-platform"><div className="platform-top"><span><PanelTop size={15} /> CourseSphere</span><span>Dashboard <ArrowUpRight size={13} /></span></div><div className="platform-body"><span className="platform-kicker">COURSE CATALOGUE</span><strong>Manage learning<br />with clarity.</strong><div className="course-bars"><i /><i /><i /></div><span className="platform-pill">12 active courses</span></div><div className="platform-side"><span>TRACK</span><strong>84%</strong><div className="circle-progress"><i /></div></div></div>;
  return <div className={`visual-dashboard ${type}`}><div className="visual-dashboard-top"><span><LayoutDashboard size={14} /> report / insights</span><span>•••</span></div><div className="visual-dashboard-main"><div className="visual-bar-chart"><i style={{ height: '42%' }} /><i style={{ height: '68%' }} /><i style={{ height: '55%' }} /><i style={{ height: '86%' }} /><i style={{ height: '71%' }} /><i style={{ height: '100%' }} /></div><div className="visual-donut"><span>72<small>%</small></span></div></div><div className="visual-dashboard-foot"><span>CONTENT TYPE</span><span><i className="dot-cyan" /> Movies</span><span><i className="dot-blue" /> Series</span></div></div>;
}

export default App;
