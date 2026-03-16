import './index.css';

function App() {
  const navItems = [
    { id: 'summary', label: 'Summary' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'samples', label: 'Work Samples' },
    { id: 'traits', label: 'Traits' },
  ];

  return (
    <>
      <nav>
        <div className="nav-container">
          <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--primary)' }}>Lydia</div>
          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 1. Cover Page */}
      <section id="home" className="hero">
        <div className="container">
          <img src="/headshot-lydia.jpg" alt="Lydia" className="hero-img" />
          <h1>Lydia's Sales Portfolio</h1>
          <p>Driving growth through strategic outreach, robust marketing, and proven sales techniques.</p>
          <div className="hero-actions">
            <a href="#summary" className="btn">View Portfolio</a>
            <a href="/Lydia_resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Download Resume</a>
          </div>
        </div>
      </section>

      {/* 2. Professional Summary */}
      <section id="summary" className="bg-alt">
        <div className="container">
          <h2>Professional Summary</h2>
          <p>
            A dynamic and results-driven sales professional with a track record of exceeding targets. 
            Skilled in developing and executing comprehensive territory strategies, crafting compelling outreach campaigns, 
            and leveraging marketing assets to close deals and foster long-term client relationships.
          </p>
        </div>
      </section>

      {/* 3. Sales & Growth Skills */}
      <section id="skills">
        <div className="container">
          <h2>Sales & Growth Skills</h2>
          <div className="grid">
            <div className="card">
              <h3>Strategic Outreach</h3>
              <p>Designing multi-touchpoint campaigns to engage high-value prospects and generate qualified leads.</p>
            </div>
            <div className="card">
              <h3>Territory Management</h3>
              <p>Analyzing market data to prioritize efforts, optimize travel routes, and maximize regional ROI.</p>
            </div>
            <div className="card">
              <h3>Relationship Building</h3>
              <p>Establishing trust with key stakeholders to drive retention, cross-selling, and upselling opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Key Achievements */}
      <section id="achievements" className="bg-alt">
        <div className="container">
          <h2>Key Achievements</h2>
          <div className="grid">
            <div className="card">
              <h3>Bronze Star Certificate</h3>
              <p>In March I recruited the most amount of patients for the Aclaris Therapeutics ADMIRATION Trial, resulting in an award towards my firm.</p>
              <div style={{ marginTop: '1rem' }}>
                <a href="/lydia-award.pdf" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/lydia-award-preview.jpg" 
                    alt="Lydia Award Preview" 
                    className="work-img" 
                    style={{ cursor: 'pointer', transition: 'transform 0.2s' }} 
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'} 
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} 
                  />
                </a>
              </div>
              <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                <a href="/lydia-award.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>View Full PDF</a>
              </div>
            </div>
            <div className="card">
              <h3>Sales Performance</h3>
              <ul style={{ listStylePosition: 'inside', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: '1.8' }}>
                <li>Consistently exceeded quarterly sales quotas by an average of 15% over the past two years.</li>
                <li>Successfully opened 12 new major accounts in a previously underpenetrated territory.</li>
                <li>Developed a new outreach sequence that increased meeting conversion rates by 22%.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Marketing Work Samples */}
      <section id="samples" className="bg-alt">
        <div className="container">
          <h2>Marketing Work Samples</h2>
          <p>Examples of marketing collateral used to support sales initiatives and educate prospects.</p>
          <div className="grid">
            <div>
              <h3>Psoriasis Awareness Flyer</h3>
              <img src="/psoriasis_flyer_720_720.jpg" alt="Psoriasis Flyer" className="work-img" />
            </div>
            <div>
              <h3>Campaign Asset</h3>
              <img src="/BAFF453F-CD30-471E-BBC7-2EF13BA9AE49.jpg" alt="Marketing Asset" className="work-img" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Professional Traits */}
      <section id="traits" className="bg-alt">
        <div className="container">
          <h2>Professional Traits</h2>
          <div className="grid">
             <div className="card">
              <h3>Resilient</h3>
              <p>Capable of navigating objections and overcoming setbacks with a solutions-oriented mindset.</p>
            </div>
            <div className="card">
              <h3>Analytical</h3>
              <p>Data-driven decision making to constantly refine targeting and messaging.</p>
            </div>
            <div className="card">
              <h3>Empathetic</h3>
              <p>Deeply understanding the client's needs to build genuine, consultative relationships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Closing Page */}
      <section id="contact">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Let's Connect</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Thank you for reviewing my portfolio. I am eager to bring my strategic sales approach and growth mindset to your team.
          </p>
          <div className="hero-actions">
            <a href="mailto:lydia@example.com" className="btn">Contact Me</a>
            <a href="/Lydia_resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">View Resume</a>
          </div>
        </div>
      </section>
      
      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
        <p>&copy; {new Date().getFullYear()} Lydia. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
