import Navbar from '../components/Navbar';
import '../styles.css';

const skillIcon = { width: '22px', height: '22px', verticalAlign: 'middle', marginRight: '6px' };
const certIcon = { width: '28px', height: '28px', verticalAlign: 'middle', marginRight: '8px' };

const Home = () => {
  return (
    <div style={{ fontFamily: 'Poppins, Arial, sans-serif' }}>
      <Navbar />

      {/* Hero */}
      <div className="container mt-5">
        <div className="row">
          <div className="card card-profile">
            <div className="card-avatar">
              <img className="img" src="/diplome.jpg" alt="Maxence Pachot" style={{ display: 'block', margin: '0 auto', width: '40%' }} />
            </div>
            <div className="card-body text-center">
              <h4 className="card-title">Maxence PACHOT</h4>
              <h6 className="card-category text-gray">Data Engineer · Lausanne, Switzerland</h6>
              <p className="card-description text-center">
                Data Engineer with 3+ years of experience building cloud data platforms on Azure.
                Specialised in Infrastructure as Code with Terraform, Databricks &amp; PySpark ETL, and Azure DevOps CI/CD.
              </p>
              <a href="/maxence_pachot_cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-round">Download CV</a>
              <span> </span>
              <a href="mailto:pachot.maxence@gmail.com" className="btn btn-primary btn-round">Contact</a>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="container mt-4">
        <div className="row">
          <div className="card">
            <div className="card-header card-header-primary">
              <h4 className="card-title">Skills</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <strong>
                    <img src="/azure.svg" alt="Azure" style={skillIcon} />
                    Cloud
                  </strong>
                  <div>Azure — Databricks, Data Factory, ADLS Gen2, Key Vault, VNet, Private Endpoints</div>
                </div>
                <div className="col-md-6 mb-3">
                  <strong>
                    <img src="/terraform.svg" alt="Terraform" style={skillIcon} />
                    Infrastructure as Code
                  </strong>
                  <div>Terraform (modular, multi-target), Hub &amp; Spoke networking</div>
                </div>
                <div className="col-md-6 mb-3">
                  <strong>
                    <img src="/databricks.svg" alt="Databricks" style={skillIcon} />
                    Data &amp; ETL
                  </strong>
                  <div>Databricks, PySpark, Delta Live Tables, Unity Catalog, Databricks Asset Bundles, medallion architecture</div>
                </div>
                <div className="col-md-6 mb-3">
                  <strong>
                    <img src="/azuredevops.svg" alt="Azure DevOps" style={skillIcon} />
                    CI/CD
                  </strong>
                  <div>Azure DevOps (self-hosted VMSS agents, OIDC), Git, pre-commit hooks</div>
                </div>
                <div className="col-md-6 mb-3">
                  <strong>
                    <img src="/python.svg" alt="Python" style={skillIcon} />
                    Programming
                  </strong>
                  <div>Python, SQL, PL/SQL, T-SQL, Bash. Productive with AI coding assistants (Claude Code).</div>
                </div>
                <div className="col-md-6 mb-3">
                  <strong>
                    <img src="/sql-server.svg" alt="Databases" style={skillIcon} />
                    Databases
                  </strong>
                  <div>SQL Server, Oracle (11g → 23c), MongoDB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="container mt-4">
        <div className="row">
          <div className="card">
            <div className="card-header card-header-primary">
              <h4 className="card-title">Certifications</h4>
            </div>
            <div className="card-body">
              <ul style={{ marginBottom: 0, listStyle: 'none', paddingLeft: 0 }}>
                <li className="mb-2">
                  <img src="/databricks.svg" alt="Databricks" style={certIcon} />
                  Databricks Certified Data Engineer Associate
                  <span style={{ color: '#888', marginLeft: '8px' }}>— Nov 2024</span>
                </li>
                <li className="mb-2">
                  <img src="/azure.svg" alt="Azure" style={certIcon} />
                  Microsoft Certified: Azure Fundamentals (AZ-900)
                  <span style={{ color: '#888', marginLeft: '8px' }}>— Sept 2023</span>
                </li>
                <li>
                  <img src="/terraform.svg" alt="Terraform" style={certIcon} />
                  HashiCorp Certified: Terraform Associate
                  <em style={{ color: '#888', marginLeft: '8px' }}>(in progress)</em>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="container mt-4">
        <div className="row">
          <div className="card">
            <div className="card-header card-header-primary">
              <h4 className="card-title">Education</h4>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <strong>Master 2 in Computer Science — MIAGE / MBDS</strong>
                <div style={{ color: '#666' }}>Université Nice Sophia Antipolis · 2022 – 2023</div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>Mobiquité, Big Data &amp; Intégration de Systèmes</div>
              </div>
              <div className="mb-3">
                <strong>Engineering Degree (Diplôme d&apos;ingénieur) — Generalist</strong>
                <div style={{ color: '#666' }}>ESTIA — École Supérieure des Technologies Industrielles Avancées · 2020 – 2023</div>
              </div>
              <div>
                <strong>Classes Préparatoires (CPGE) — PCSI / PC</strong>
                <div style={{ color: '#666' }}>Lycée Jacques Amyot, Melun · 2018 – 2020</div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>Mathematics, Physics &amp; Chemistry — selective two-year program preparing for French engineering schools</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About & Languages */}
      <div className="container mt-4">
        <div className="row">
          <div className="card">
            <div className="card-header card-header-primary">
              <h4 className="card-title">About &amp; Languages</h4>
            </div>
            <div className="card-body">
              <p><strong>Languages:</strong> French (native) · English (professional)</p>
              <p style={{ marginBottom: 0 }}>
                Outside of work, I&apos;m a football fan — I enjoy both watching the game and analysing team performance data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="container mt-4">
        <div className="row">
          <div className="card">
            <div className="card-header card-header-primary">
              <h4 className="card-title">Contact</h4>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <img src="/gmail.svg" alt="GMail" style={{ width: '24px', height: '24px', verticalAlign: 'middle', marginRight: '4px' }} />
                <a href="mailto:pachot.maxence@gmail.com" target="_blank" rel="noopener noreferrer">
                  pachot.maxence@gmail.com
                </a>
              </div>
              <div className="mb-3">
                <img src="/linkedin.svg" alt="LinkedIn" style={{ width: '24px', height: '24px', verticalAlign: 'middle', marginRight: '4px' }} />
                <a href="https://www.linkedin.com/in/maxence-pachot-6801761b7" target="_blank" rel="noopener noreferrer">
                  LinkedIn @MaxencePachot
                </a>
              </div>
              <div>
                <img src="/github.svg" alt="GitHub" style={{ width: '24px', height: '24px', verticalAlign: 'middle', marginRight: '4px' }} />
                <a href="https://github.com/MaxencePachot" target="_blank" rel="noopener noreferrer">
                  GitHub @MaxencePachot
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
