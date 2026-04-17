import Navbar from '../components/Navbar';
import '../styles.css';

const techLogo = { width: '40px', height: '40px', verticalAlign: 'middle', marginLeft: '20px', paddingTop: '5px' };
const techLogoWide = { width: '80px', height: '60px', verticalAlign: 'middle', marginLeft: '20px', paddingTop: '5px' };

const Projects = () => {
  return (
    <div style={{ fontFamily: 'Poppins, Arial, sans-serif' }}>
      <Navbar />
      <div className="mt-4 mb-2 text-center">
        <h1>My projects</h1>
      </div>

      {/* Retail Data & BI Modernization */}
      <div className="col-lg-9">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Retail Data &amp; BI Modernization</h4>
            <div className="project-meta mb-2">
              <span>Data Engineer / DevOps</span>
              <span className="meta-sep">·</span>
              <span>Retail</span>
              <span className="meta-sep">·</span>
              <span>01.2026 – Present</span>
            </div>
            <p className="project-outcome"><strong>Outcome:</strong> Delivered a production Azure data platform (landing zone + ETL) enabling Power BI dashboards and AI use cases for a Swiss retail group.</p>
            <p className="card-text"><strong>Technology Used:</strong></p>
            <ul>
              <li>IaC: Terraform with reusable modules (networking, storage, Key Vault, Databricks, NAT gateway, diagnostics)</li>
              <li>Cloud: Azure — Databricks, Data Factory, ADLS Gen2, Key Vault, VNet, Private Endpoints</li>
              <li>ETL: PySpark, Delta Live Tables, Unity Catalog, Databricks Asset Bundles (DAB)</li>
              <li>Source: SQL Server (on-premises) ingested via Azure Data Factory</li>
              <li>CI/CD: Azure DevOps pipelines on self-hosted VMSS agents with OIDC authentication</li>
              <li>Quality: pytest / PySpark unit tests, pre-commit hooks, data quality checks</li>
            </ul>
            <p className="card-text"><strong>Key Features:</strong></p>
            <ul>
              <li>Full Azure landing zone deployed via Terraform, following a Hub &amp; Spoke architecture with private endpoints</li>
              <li>Medallion-architecture PySpark ETL with SCD1/SCD2 merge strategies, CDC change tracking, and a 9-step cost resolution cascade engine for a finance use case</li>
              <li>ADF pipelines extracting data from on-premises SQL Server into ADLS Gen2 staging (full and delta ingestion modes)</li>
              <li>Databricks workspaces with VNet injection, Unity Catalog (storage credentials, external locations, catalogs, role-based grants), Delta Live Tables, and SQL Warehouses for BI</li>
              <li>Azure DevOps pipelines for Terraform deployments, ADF artifact validation/deployment, and Databricks Asset Bundle testing/deployment</li>
              <li>Pair programming with Claude Code as a coding assistant for infrastructure design, code generation, testing, documentation, and debugging — accelerating development pace</li>
            </ul>
            <div className="mt-3">
              <img src="/terraform.svg" alt="Terraform" style={techLogo} />
              <img src="/azure.svg" alt="Azure" style={techLogo} />
              <img src="/databricks.svg" alt="Databricks" style={techLogo} />
              <img src="/python.svg" alt="Python" style={{ ...techLogo, width: '50px', height: '50px' }} />
              <img src="/sql-server.svg" alt="SQL Server" style={techLogoWide} />
              <img src="/azuredevops.svg" alt="Azure DevOps" style={techLogo} />
              <img src="/github.svg" alt="GitHub" style={techLogo} />
            </div>
          </div>
        </div>
      </div>

      {/* Healthcare Data Platform — Infrastructure */}
      <div className="col-lg-9">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Healthcare Data Platform — Cloud Infrastructure (IaC)</h4>
            <div className="project-meta mb-2">
              <span>Data Engineer / DevOps</span>
              <span className="meta-sep">·</span>
              <span>Healthcare</span>
            </div>
            <p className="project-outcome"><strong>Outcome:</strong> Designed and deployed a fully private Azure landing zone using modular Terraform with Hub &amp; Spoke networking and Private Endpoints.</p>
            <p className="card-text"><strong>Technology Used:</strong></p>
            <ul>
              <li>IaC: Terraform (modular, multi-target deployment)</li>
              <li>Cloud: Azure — Databricks, Data Factory, ADLS Gen2, Key Vault, NAT Gateway</li>
              <li>Networking: Hub &amp; Spoke VNet architecture, Private Endpoints, DNS Zones</li>
              <li>CI/CD: Azure DevOps pipelines on self-hosted VMSS agents (WIF/OIDC auth)</li>
              <li>Quality: pre-commit, terraform-docs, TFLint</li>
            </ul>
            <p className="card-text"><strong>Key Features:</strong></p>
            <ul>
              <li>Fully private infrastructure — all resources behind Private Endpoints with default deny</li>
              <li>4 independent Terraform targets: bootstrapping, landing zone, ADF, Databricks</li>
              <li>Hub &amp; Spoke network topology with VNet peering and central Log Analytics</li>
              <li>Automated CI/CD with Azure DevOps pipelines running inside the Hub VNet</li>
            </ul>
            <div className="mt-3">
              <img src="/terraform.svg" alt="Terraform" style={techLogo} />
              <img src="/azure.svg" alt="Azure" style={techLogo} />
              <img src="/databricks.svg" alt="Databricks" style={techLogo} />
              <img src="/azuredevops.svg" alt="Azure DevOps" style={techLogo} />
              <img src="/github.svg" alt="GitHub" style={techLogo} />
            </div>
          </div>
        </div>
      </div>

      {/* Healthcare Data Platform — Solution */}
      <div className="col-lg-9">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Healthcare Data Platform — Solution Layer</h4>
            <div className="project-meta mb-2">
              <span>Data Engineer</span>
              <span className="meta-sep">·</span>
              <span>Healthcare</span>
            </div>
            <p className="project-outcome"><strong>Outcome:</strong> Shipped an end-to-end medallion data platform (ingestion → DLT transformations) on Databricks and Azure Data Factory.</p>
            <p className="card-text"><strong>Technology Used:</strong></p>
            <ul>
              <li>ETL: Databricks Asset Bundles — DLT pipelines (bronze, silver layers)</li>
              <li>Orchestration: Azure Data Factory pipelines, datasets, linked services</li>
              <li>Programming Language: Python, SQL</li>
              <li>CI/CD: Azure DevOps pipelines with reusable templates</li>
              <li>Auth: Workload Identity Federation (OIDC), self-hosted VMSS agent pool</li>
            </ul>
            <p className="card-text"><strong>Key Features:</strong></p>
            <ul>
              <li>End-to-end data platform: ingestion, transformation, and orchestration</li>
              <li>Databricks DLT ETL with medallion architecture (bronze → silver)</li>
              <li>ADF pipelines with managed VNet and private endpoints to storage &amp; Key Vault</li>
              <li>Solution layer decoupled from infrastructure (managed by separate Terraform repo)</li>
            </ul>
            <div className="mt-3">
              <img src="/databricks.svg" alt="Databricks" style={techLogo} />
              <img src="/azure.svg" alt="Azure" style={techLogo} />
              <img src="/python.svg" alt="Python" style={{ ...techLogo, width: '50px', height: '50px' }} />
              <img src="/azuredevops.svg" alt="Azure DevOps" style={techLogo} />
              <img src="/github.svg" alt="GitHub" style={techLogo} />
            </div>
          </div>
        </div>
      </div>

      {/* Refactor infrastructure */}
      <div className="col-lg-9">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Refactor Infrastructure to Reduce Costs</h4>
            <div className="project-meta mb-2">
              <span>Data Engineer</span>
              <span className="meta-sep">·</span>
              <span>Healthcare</span>
            </div>
            <p className="project-outcome"><strong>Outcome:</strong> Reduced infrastructure costs by 10× by migrating workloads from Kubernetes to Azure serverless containers.</p>
            <p className="card-text"><strong>Technology Used:</strong></p>
            <ul>
              <li>Programming Language: Python, SQL</li>
              <li>Cloud Services: Azure Serverless Containers</li>
              <li>CI/CD Tool: Azure DevOps</li>
              <li>Containerization: Docker</li>
            </ul>
            <p className="card-text"><strong>Key Features:</strong></p>
            <ul>
              <li>Reduced infrastructure costs by 10x</li>
              <li>Enhanced existing project functionality with new data sources and features</li>
              <li>Automated deployment processes</li>
            </ul>
            <p className="card-text"><strong>Project Highlights:</strong></p>
            <ul>
              <li>Added a new data source to improve project capabilities</li>
              <li>Developed and integrated new features using Python</li>
              <li>Containerized applications with Docker for consistent deployment and scalability</li>
              <li>Configured Azure DevOps CI/CD pipelines for automated deployment of Dockerized applications</li>
              <li>Migrated from Kubernetes to serverless containers on Azure to reduce operational costs</li>
            </ul>
            <div className="mt-3">
              <img src="/azure.svg" alt="Azure" style={techLogo} />
              <img src="/mongodb.svg" alt="MongoDB" style={techLogoWide} />
              <img src="/python.svg" alt="Python" style={{ ...techLogo, width: '50px', height: '50px' }} />
              <img src="/fastapi.svg" alt="FastAPI" style={techLogo} />
              <img src="/docker.svg" alt="Docker" style={techLogo} />
              <img src="/github.svg" alt="GitHub" style={techLogo} />
            </div>
          </div>
        </div>
      </div>

      {/* SQL Server migration */}
      <div className="col-lg-9">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Data Migration of Finance Data on SQL Server</h4>
            <div className="project-meta mb-2">
              <span>Data Engineer</span>
              <span className="meta-sep">·</span>
              <span>Finance</span>
            </div>
            <p className="project-outcome"><strong>Outcome:</strong> Migrated and modelled finance data on SQL Server with tested ETL stored procedures and validated business requirements.</p>
            <p className="card-text"><strong>Technology Used:</strong></p>
            <ul>
              <li>Database: SQL Server</li>
              <li>Programming Language: SQL, T-SQL, Python</li>
              <li>Documentation: Business requirements documentation tools</li>
              <li>Testing: SQL scripts</li>
            </ul>
            <p className="card-text"><strong>Key Features:</strong></p>
            <ul>
              <li>Understand and document business requirements for data migration</li>
              <li>Design data models for the staging area</li>
              <li>Develop stored procedures for ingestion, transformation, and loading (ETL)</li>
              <li>Implement unit tests and integration tests to ensure data accuracy and reliability</li>
            </ul>
            <div className="mt-3">
              <img src="/sql-server.svg" alt="SQL Server" style={techLogoWide} />
              <img src="/python.svg" alt="Python" style={{ ...techLogo, width: '50px', height: '50px' }} />
              <img src="/github.svg" alt="GitHub" style={techLogo} />
            </div>
          </div>
        </div>
      </div>

      {/* DBA Oracle */}
      <div className="col-lg-9">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">DBA Oracle</h4>
            <div className="project-meta mb-2">
              <span>Database Administrator</span>
              <span className="meta-sep">·</span>
              <span>IT Services</span>
            </div>
            <p className="project-outcome"><strong>Outcome:</strong> Operated Oracle databases (11g → 23c) across customer environments and automated storage monitoring across the fleet with Python.</p>
            <p className="card-text"><strong>Technology Used:</strong></p>
            <ul>
              <li>Database: Oracle (versions 11, 12, 19, 21, 23) Community &amp; Enterprise Editions</li>
              <li>Programming Language: SQL, PL/SQL, Linux commands, Python</li>
              <li>Tickets platform: Automated on JIRA</li>
            </ul>
            <p className="card-text"><strong>Project Highlights:</strong></p>
            <ul>
              <li>Deployment of an Oracle database from scratch on a new server</li>
              <li>Handle incidents &amp; technical tickets on the JIRA platform for customers using our Oracle databases</li>
              <li>Development of a Python script to maintain the storage space of different tablespaces across databases to monitor disk space usage</li>
              <li>Development of numerous stored procedures in PL/SQL</li>
            </ul>
            <div className="mt-3">
              <img src="/oracle.svg" alt="Oracle" style={techLogoWide} />
              <img src="/linux.svg" alt="Linux" style={{ width: '90px', height: '50px', verticalAlign: 'middle', marginLeft: '20px', paddingTop: '5px' }} />
              <img src="/python.svg" alt="Python" style={{ ...techLogo, width: '50px', height: '50px' }} />
              <img src="/flask.svg" alt="Flask" style={{ width: '70px', height: '40px', verticalAlign: 'middle', marginLeft: '10px', paddingTop: '5px' }} />
              <img src="/github.svg" alt="GitHub" style={techLogo} />
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio website */}
      <div className="col-lg-9">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">CV Website using React</h4>
            <div className="project-meta mb-2">
              <span>Personal Project</span>
              <span className="meta-sep">·</span>
              <span>Open Source</span>
            </div>
            <p className="project-outcome"><strong>Outcome:</strong> Built and deployed this portfolio site from scratch with React + Vite, continuously deployed on Netlify.</p>
            <p className="card-text"><strong>Technology Stack:</strong></p>
            <ul>
              <li>Frontend: React</li>
              <li>Build Tool: Vite</li>
              <li>Markup and Styling: HTML, CSS</li>
              <li>UI Framework: Material Kit 2</li>
              <li>Deployment: Netlify</li>
            </ul>
            <p className="card-text"><strong>Key Features:</strong></p>
            <ul>
              <li>Responsive design ensuring optimal viewing on all devices</li>
              <li>Modern, clean, and professional UI with Material Kit 2 components</li>
              <li>Fast and efficient development with Vite&apos;s rapid build and hot module replacement</li>
              <li>Hosted and continuously deployed on Netlify for seamless updates</li>
            </ul>
            <div className="mt-3">
              <img src="/html5.svg" alt="HTML5" style={techLogo} />
              <img src="/css.svg" alt="CSS" style={techLogo} />
              <img src="/vite.svg" alt="Vite" style={techLogo} />
              <img src="/react.svg" alt="React" style={techLogo} />
              <img src="/github.svg" alt="GitHub" style={techLogo} />
              <img src="/netlify.svg" alt="Netlify" style={techLogo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
