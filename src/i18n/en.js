const en = {
  code: 'en',
  label: 'English',

  meta: {
    home: {
      title: 'Maxence Pachot - Data Engineer, Platform & DataOps',
      description:
        'Data Engineer in Lausanne, Switzerland, on platform and DataOps. I design and maintain Azure data platforms: Terraform infrastructure, ingestion, Databricks lakehouse and CI/CD.',
    },
    projects: {
      title: 'Projects - Maxence Pachot',
      description:
        'Azure data platform projects: a pharmaceutical lakehouse, a data platform for a healthcare group, a DB2 to SQL Server migration for Swiss social insurance, and Oracle administration.',
    },
    notFound: {
      title: 'Page not found - Maxence Pachot',
      description: 'This page does not exist.',
    },
  },

  nav: {
    brand: 'Maxence PACHOT',
    home: 'Home',
    projects: 'Projects',
    cv: 'CV',
    menu: 'Open the menu',
    menuClose: 'Close the menu',
    language: 'Choose a language',
    newTab: '(PDF, opens in a new tab)',
    skip: 'Skip to content',
  },

  cvFile: '/maxence_pachot_cv.pdf',

  hero: {
    name: 'Maxence PACHOT',
    role: 'Data Engineer · Platform & DataOps',
    stack: 'Azure · Databricks · Terraform · dbt',
    location: 'ELCA Informatique · Lausanne, Switzerland',
    photoAlt: 'Portrait of Maxence Pachot',
    pitch:
      'I design and maintain Azure data platforms, from the Terraform infrastructure to the Databricks lakehouse, CI/CD included. Three and a half years in Swiss IT consulting: pharmaceuticals, social insurance, healthcare.',
    cv: 'Download CV',
    contact: 'Get in touch',
  },

  whatIDo: {
    heading: 'What I do',
    items: [
      {
        icon: '/terraform.svg',
        title: 'Platform & infrastructure',
        body: 'Azure landing zones in Terraform: Hub & Spoke, private endpoints by default, NAT gateway, private DNS. Databricks workspaces with Unity Catalog. CI/CD on Azure DevOps and GitHub Actions, authenticated with OIDC, no stored secrets.',
      },
      {
        icon: '/databricks.svg',
        title: 'Data engineering',
        body: 'Ingestion from on-premises SQL Server and SaaS sources, a medallion lakehouse on Delta, SCD1/SCD2 merge engines, dbt transformation layers. In Python and SQL, tested like application code.',
      },
      {
        icon: '/azuredevops.svg',
        title: 'Handover and operation',
        body: 'I ship code another team can pick up: logic in tested packages rather than notebooks, tests and lint that block the CI, mandatory review on shared code.',
      },
    ],
  },

  currentRole: {
    heading: 'Current role',
    title: 'Engineer, Business Line Data Analytics & AI',
    employer: 'ELCA Informatique SA - Lausanne, Switzerland',
    period: '03.2023 – present',
    body: 'Swiss IT consulting firm. I work on data platform and database projects for customers in pharmaceuticals, social insurance and healthcare.',
    highlight:
      'Since September 2026 I am the technical lead on the pharmaceutical platform: I review the code of the shared foundation, on which two developers each deliver their own business domain, and I run the workshops with the business.',
  },

  skills: {
    heading: 'Skills',
    note: 'Ordered by how often I use them.',
    levels: { daily: 'Every day', solid: 'Solid', working: 'Working knowledge' },
    items: [
      {
        icon: '/azure.svg',
        title: 'Cloud',
        level: 'daily',
        body: 'Azure - Databricks, Data Factory, ADLS Gen2, Key Vault, VNet and private endpoints, NAT gateway, Log Analytics, Entra ID service principals.',
      },
      {
        icon: '/terraform.svg',
        title: 'Infrastructure as code',
        level: 'daily',
        body: 'Terraform - reusable modules, remote state, multi-environment layouts, tflint and pre-commit. Bicep for subscription bootstrap.',
      },
      {
        icon: '/databricks.svg',
        title: 'Data & lakehouse',
        level: 'daily',
        body: 'Databricks - Unity Catalog, Delta Lake, Delta Live Tables, Auto Loader, Asset Bundles, SQL Warehouses. Medallion architecture, SCD1/SCD2 merge. dbt, on Databricks and on SQL Server.',
      },
      {
        icon: '/azuredevops.svg',
        title: 'CI/CD & DataOps',
        level: 'daily',
        body: 'Azure DevOps and GitHub Actions, self-hosted runners inside private networks, OIDC and workload identity federation, pre-commit, branch policies, semantic versioning.',
      },
      {
        icon: '/python.svg',
        title: 'Languages',
        level: 'daily',
        body: 'Python (PySpark, pytest, ruff), SQL, T-SQL, PL/SQL, Bash. AI-assisted development with Claude Code.',
      },
      {
        icon: '/oracle.svg',
        title: 'Databases',
        level: 'solid',
        body: 'Oracle 11g to 23c administration - deployment, performance tuning, PL/SQL, monitoring. SQL Server and T-SQL.',
      },
      {
        icon: '/docker.svg',
        title: 'Also in the toolbox',
        level: 'working',
        body: 'Dagster, Docker, FastAPI, MongoDB, React and Vite, the stack this site runs on.',
      },
    ],
  },

  certifications: {
    heading: 'Certifications',
    items: [
      {
        icon: '/databricks.svg',
        title: 'Databricks Certified Data Engineer Associate',
        date: 'Nov 2024',
      },
      {
        icon: '/azure.svg',
        title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
        date: 'Sept 2023',
      },
    ],
  },

  education: {
    heading: 'Education',
    items: [
      {
        title: 'Master 2 in Computer Science - MIAGE / MBDS',
        school: 'Université Côte d’Azur · 2022 – 2023',
        detail: 'Mobiquité, Big Data & Intégration de Systèmes',
      },
      {
        title: 'Engineering degree (diplôme d’ingénieur) - generalist',
        school: 'ESTIA - École Supérieure des Technologies Industrielles Avancées · 2020 – 2023',
      },
      {
        title: 'Classes préparatoires (CPGE) - PCSI / PC',
        school: 'Lycée Jacques Amyot, Melun · 2018 – 2020',
        detail:
          'Selective two-year mathematics, physics and chemistry programme preparing for French engineering schools.',
      },
    ],
  },

  about: {
    heading: 'Languages & status',
    languagesLabel: 'Languages',
    languages: 'French (native) · English (C1 - TOEIC 910)',
    statusLabel: 'Status',
    status: 'Swiss B permit · based in Renens (VD), working in Lausanne.',
  },

  contact: {
    heading: 'Contact',
    email: 'pachot.maxence@gmail.com',
    linkedin: 'LinkedIn pachotmaxence',
    github: 'GitHub @MaxencePachot',
  },

  footer: {
    rights: 'All rights reserved.',
    builtWith: 'Built with React and Vite, deployed on Netlify.',
  },

  notFound: {
    title: 'Page not found',
    body: 'That URL does not exist on this site.',
    cta: 'Back to home',
  },

  projects: {
    heading: 'Projects',
    intro:
      'Five client engagements, where the code is private and the customers are not named, plus this site. Here is what I built, and what came of it.',
    labels: {
      outcome: 'In short',
      stack: 'Stack',
    },
    items: [
      {
        id: 'pharma-lakehouse',
        title: 'Azure lakehouse for a pharmaceutical group',
        role: 'Data Platform Engineer, technical lead since 09.2026',
        sector: 'Pharmaceuticals · Switzerland',
        period: '02.2026 – present',
        outcome:
          'The group went from an empty Azure subscription to a production lakehouse feeding Power BI. I built its four layers: infrastructure, ingestion, ETL and CI/CD.',
        sections: [
          {
            title: 'Context',
            body: 'The group ran its operations on an on-premises SQL Server, with reporting rebuilt largely by hand. The goal was a governed cloud lakehouse that business domains could extend one at a time.',
          },
          {
            title: 'What I built',
            items: [
              'A full Azure landing zone in Terraform - 10 reusable modules, Hub & Spoke topology, every resource behind a private endpoint with public access denied, NAT gateway, private DNS zones and centralised Log Analytics.',
              'Ingestion with Azure Data Factory: a self-hosted integration runtime on the on-premises SQL Server driven by Change Tracking, and parameterised pipelines writing full and delta loads to ADLS Gen2 as parquet.',
              'A medallion lakehouse on Databricks and Unity Catalog: bronze through Auto Loader and Delta Live Tables, silver through Delta MERGE with SCD1/SCD2. Change detection by hash, driven by a watermark table. In gold, conformed dimensions shared by every domain and per-domain fact tables.',
              'Two business domains in production: finance, including the nine-step cost-rate resolution cascade behind the monthly gross margin, and marketing campaign targeting.',
              'CI/CD on Azure DevOps with self-hosted VMSS agents inside the network and OIDC federation instead of stored secrets - separate pipelines for Terraform, Data Factory artifacts and Databricks Asset Bundles.',
              'Then the maintainability work: the logic moved out of the notebooks into a tested Python package, quality gates in CI, and a second reviewer required on the shared core.',
            ],
          },
          {
            title: 'Leading the work',
            body: 'Since September 2026 I am the technical lead on the platform: two developers each own a business domain, I own the shared foundation and review what lands in it, and I run the workshops with the business. A data architect and a product owner set the direction.',
          },
        ],
        stack: [
          'Terraform',
          'Azure',
          'Databricks',
          'PySpark',
          'Delta Lake',
          'Unity Catalog',
          'Azure Data Factory',
          'SQL Server',
          'Azure DevOps',
          'pytest',
          'ruff',
        ],
      },
      {
        id: 'dpaas',
        title: 'Azure data platform for a healthcare group',
        role: 'Platform Engineer / DataOps',
        sector: 'Healthcare · Switzerland',
        period: '06.2026 – present',
        outcome:
          'I deployed the group’s data platform for a healthcare customer and shipped its first pipeline to production. The platform could do neither multi-region nor cross-tenant: I built both.',
        sections: [
          {
            title: 'Context',
            body: 'The group runs a Data Platform as a Service: a generic, versioned Terraform engine that every client instance consumes remotely. This customer came with two constraints the platform did not cover. A deployment across several regions. And a split of responsibilities where we run the compute while the customer keeps its own storage, so two separate Azure tenants.',
          },
          {
            title: 'What I did',
            items: [
              'Deployed the client instance end to end on a brand-new Azure subscription: two-VNet network bootstrap, private CI runners, Terraform state behind a private endpoint.',
              'Built multi-region support into the shared engine, which could only deploy to a single region. That is a platform capability, not a workaround on the client side.',
              'Built the cross-tenant bridge end to end: service principal identity, VNet peering, routing through the hub firewall, private DNS forwarding. The compute stays with us, the storage with the customer.',
              'Unity Catalog governance layer: service principals, groups, catalogs, storage credentials, external locations, grants and secret scopes.',
              'A pilot dbt pipeline on a Databricks SQL warehouse, packaged as a Databricks Asset Bundle, deployed and run by Azure DevOps pipelines I built.',
            ],
          },
          {
            title: 'Outcome',
            body: 'The platform runs in production at the customer.',
          },
        ],
        stack: [
          'Terraform',
          'Azure',
          'Databricks',
          'Unity Catalog',
          'dbt',
          'Databricks Asset Bundles',
          'Azure DevOps',
          'Bicep',
          'Bash',
        ],
      },
      {
        id: 'social-insurance-dbt',
        title: 'DB2 to SQL Server migration for Swiss social insurance',
        role: 'Data Engineer',
        sector: 'Swiss social insurance, first pillar',
        period: '12.2023 – present',
        outcome:
          'Compensation funds are moving off a legacy DB2 system onto SQL Server. I built part of the migration chain in SSIS and stored procedures, before rebuilding the whole of it in dbt with one colleague.',
        sections: [
          {
            title: 'Context',
            body: 'Swiss first-pillar compensation funds, public and professional, are migrating their data from a legacy DB2 system to SQL Server. The project team, myself included, first built the migration chain with SSIS packages, stored procedures and post-deployment scripts, one chain per fund.',
          },
          {
            title: 'What I did',
            items: [
              'With one colleague, I rebuilt that chain end to end in dbt on SQL Server.',
              'I own 5 of the 26 business domains (contributions, tax reporting, billing, subledger accounting, CO2 levy redistribution), from the DB2 extract through to the export.',
              'Each of those domains is covered by regression and integrity tests, and I set up the sqlfluff linting on changed files.',
              'I gathered and documented the business requirements with the stakeholders.',
            ],
          },
          {
            title: 'Outcome',
            body: 'The dbt chain runs in production. It is part of a shared library of over a thousand models, released as a versioned package that each fund imports, instead of an ETL rebuilt for each one. The migration carries on.',
          },
        ],
        stack: ['dbt', 'SQL Server', 'T-SQL', 'DB2', 'Dagster', 'sqlfluff', 'Data modelling', 'Git'],
      },
      {
        id: 'cost-refactor',
        title: 'Infrastructure cost reduction on a healthcare platform',
        role: 'Data Engineer / DevOps',
        sector: 'Healthcare · Switzerland',
        period: '10.2023 – 01.2024',
        outcome:
          'I migrated a healthcare data platform from Kubernetes to Azure serverless containers, which divided the infrastructure bill by roughly ten.',
        sections: [
          {
            title: 'What I did',
            items: [
              'Migrated the running workloads from Kubernetes to Azure serverless containers, removing the cost of a cluster that sat idle most of the time.',
              'Containerised the applications with Docker for consistent, reproducible deployment.',
              'Set up Azure DevOps CI/CD pipelines to deploy the containerised services automatically.',
              'Added a new data source and built the features that consumed it, in Python with FastAPI over MongoDB.',
            ],
          },
        ],
        stack: ['Azure serverless containers', 'Docker', 'Python', 'FastAPI', 'MongoDB', 'Azure DevOps'],
      },
      {
        id: 'oracle-dba',
        title: 'Oracle database administration',
        role: 'Database Administrator',
        sector: 'IT services · several customers',
        period: '03.2023 – present',
        outcome:
          'I operate Oracle databases from 11g to 23c across customer environments, and I automated the tablespace monitoring that used to be done by hand.',
        sections: [
          {
            title: 'What I do',
            items: [
              'Deploy Oracle databases from scratch on new servers - Standard Edition 2 and Enterprise, versions 11g through 23c.',
              'Handle incidents and technical tickets through JIRA for the customers running on our databases.',
              'Maintain the Python tooling I wrote to track tablespace and disk usage across the fleet, so saturation is caught before it becomes an incident.',
              'Write and tune PL/SQL stored procedures.',
            ],
          },
        ],
        stack: ['Oracle 11g–23c', 'PL/SQL', 'SQL', 'Python', 'Linux', 'JIRA'],
      },
      {
        id: 'this-site',
        title: 'This website',
        role: 'Development and maintenance',
        sector: 'Personal project',
        period: '2024 – present',
        outcome:
          'I build and maintain it: bilingual, no third-party JavaScript, a strict Content Security Policy, and continuous deployment on Netlify.',
        sections: [
          {
            title: 'Notes',
            items: [
              'React 18 and Vite, served in French and English on separate URLs with hreflang alternates.',
              'No CDN dependency and no third-party JavaScript: fonts and styles are self-hosted, and the Content Security Policy is declared in netlify.toml.',
              'Images served as WebP with a JPEG fallback - the profile photo went from 1.3 MB to 15 KB.',
              'Continuously deployed on Netlify from GitHub.',
            ],
          },
        ],
        stack: ['React', 'Vite', 'Material Kit 2', 'Netlify', 'HTML', 'CSS'],
      },
    ],
  },
};

export default en;
