const en = {
  code: 'en',
  label: 'English',

  meta: {
    home: {
      title: 'Maxence Pachot - Data Engineer, Platform & DataOps',
      description:
        'Data Engineer in Lausanne, Switzerland, on platform and DataOps. I build Azure data platforms end to end: Terraform infrastructure, ingestion, Databricks lakehouse and CI/CD.',
    },
    projects: {
      title: 'Projects - Maxence Pachot',
      description:
        'Azure data platform projects: a pharmaceutical lakehouse, a multi-client Data Platform as a Service, a Swiss social insurance migration to dbt, and Oracle administration.',
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
    menu: 'Toggle navigation',
    skip: 'Skip to content',
    switchTo: 'Lire en français',
    switchShort: 'FR',
  },

  cvFile: '/maxence_pachot_cv.pdf',

  hero: {
    name: 'Maxence PACHOT',
    role: 'Data Engineer · Platform & DataOps',
    stack: 'Azure · Databricks · Terraform · dbt',
    location: 'ELCA Informatique · Lausanne, Switzerland',
    photoAlt: 'Portrait of Maxence Pachot',
    pitch:
      'I build Azure data platforms end to end: the Terraform infrastructure, the ingestion, the Databricks lakehouse and the CI/CD that ships it. Then I keep them running in production.',
    cv: 'Download CV',
    contact: 'Get in touch',
  },

  proof: {
    heading: 'In numbers',
    note: 'All of it from work delivered over the last twelve months.',
    items: [
      { value: '5', label: 'business domains I own in a shared dbt library, out of 26' },
      { value: '10', label: 'reusable Terraform modules running in production on Azure' },
      { value: '2', label: 'pull requests merged into the group’s shared IaC engine' },
    ],
  },

  whatIDo: {
    heading: 'What I do',
    items: [
      {
        icon: '/terraform.svg',
        title: 'Platform & infrastructure',
        body: 'Azure landing zones in Terraform - Hub & Spoke, private endpoints by default, NAT gateway, private DNS. Databricks workspaces with Unity Catalog. CI/CD on Azure DevOps and GitHub Actions, authenticated with OIDC rather than stored secrets.',
      },
      {
        icon: '/databricks.svg',
        title: 'Data engineering',
        body: 'Ingestion from on-premises SQL Server and SaaS sources, a medallion lakehouse on Delta, SCD1/SCD2 merge engines, dbt transformation layers. Written in Python and SQL, and unit-tested like application code.',
      },
      {
        icon: '/azuredevops.svg',
        title: 'Making it last',
        body: 'I ship code other people can pick up: logic in packages rather than notebooks, lint and tests as hard CI gates, code ownership on the shared foundation, conventions written down. And I run the workshops with the business.',
      },
    ],
  },

  currentRole: {
    heading: 'Current role',
    title: 'Data Engineer & Oracle DBA',
    employer: 'ELCA Informatique SA - Lausanne, Switzerland',
    period: '03.2023 – present',
    body: 'Swiss IT consulting firm. I deliver data platform and database projects for customers in pharma, social insurance and healthcare.',
    highlight:
      'Since 09.2026 I am the technical referent on the pharmaceutical data platform: two developers each own a business domain, I own the shared foundation and review what lands in it, and I run the workshops with the business. A data architect and a product owner set the direction.',
  },

  skills: {
    heading: 'Skills',
    note: 'Ordered by how often I actually use them. Only the exceptions are labelled.',
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
        body: 'Terraform - reusable modules, remote state, multi-environment layouts, tflint, terraform-docs and pre-commit. Bicep for subscription bootstrap.',
      },
      {
        icon: '/databricks.svg',
        title: 'Data & lakehouse',
        level: 'daily',
        body: 'Databricks - Unity Catalog, Delta Lake, Delta Live Tables and Lakeflow, Auto Loader, Asset Bundles, SQL Warehouses. Medallion architecture, SCD1/SCD2 merge. dbt, on Databricks and on SQL Server.',
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
        body: 'Dagster, Docker, FastAPI, MongoDB, React and Vite - the stack this site runs on.',
      },
    ],
  },

  howIWork: {
    heading: 'How I work',
    items: [
      'Logic lives in a package, not in a notebook. If it matters, it is importable and unit-tested.',
      'CI gates are hard. A lint error or a failing test fails the build, and the shared foundation always needs a second reviewer.',
      'Conventions get written down. A rule that only lives in someone’s head is not a rule.',
      'Infrastructure is code, and private by default - deny first, then open exactly what is needed.',
      'I use AI coding assistants (Claude Code) every day, for refactors, tests and documentation. It raised my throughput; it did not replace the review.',
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
    linkedin: 'LinkedIn @MaxencePachot',
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
      'Client work, so the code is private and the customers are not named. What follows is what I actually built, and what it changed.',
    labels: {
      outcome: 'Outcome',
      stack: 'Stack',
    },
    items: [
      {
        id: 'pharma-lakehouse',
        title: 'Azure lakehouse for a pharmaceutical group',
        role: 'Data Platform Engineer - technical referent since 09.2026',
        sector: 'Pharma · Switzerland',
        period: '02.2026 – present',
        outcome:
          'Took a Swiss pharmaceutical group from an empty Azure subscription to a production lakehouse feeding Power BI, building all four layers (infrastructure, ingestion, ETL and CI/CD), then turned it into a codebase two new developers could pick up.',
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
              'A medallion lakehouse on Databricks and Unity Catalog: bronze through Auto Loader and Delta Live Tables, silver through Delta MERGE with SCD1/SCD2 and hash-based change detection driven by a watermark table, gold with conformed dimensions shared by every domain plus per-domain fact tables.',
              'Two business domains in production: finance, including the nine-step cost-rate resolution cascade behind the monthly gross margin, and marketing campaign targeting.',
              'CI/CD on Azure DevOps with self-hosted VMSS agents inside the network and OIDC federation instead of stored secrets - separate pipelines for Terraform, Data Factory artifacts and Databricks Asset Bundles.',
              'Then made it maintainable: the logic moved out of the notebooks into a tested Python package, with quality gates in CI and a second reviewer required on the shared core.',
            ],
          },
          {
            title: 'Leading the work',
            body: 'Since September 2026 I am the technical referent on the platform: two developers each own a business domain, I own the shared foundation and review what lands in it, and I run the workshops with the business. A data architect and a product owner set the direction.',
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
        title: 'Data Platform as a Service - multi-client Azure platform',
        role: 'Platform Engineer / DataOps',
        sector: 'Shared internal platform · client onboarding',
        period: '06.2026 – present',
        outcome:
          'Onboarded a client onto the group’s shared Terraform data platform, built the cross-tenant bridge it needed, and fed the friction back upstream as merged code and documented tickets.',
        sections: [
          {
            title: 'Context',
            body: 'The group runs a Data Platform as a Service: a generic Terraform engine, versioned and pinned, that every client instance consumes remotely. Onboarding a client means deploying an instance and, where it does not fit, improving the engine rather than patching the client.',
          },
          {
            title: 'What I did',
            items: [
              'Onboarded a client end to end on a brand-new Azure subscription: bootstrap of the two-VNet topology, private GitHub Actions runners, Terraform state storage behind a private endpoint, then the client instance itself.',
              'Built the cross-tenant bridge: identity through a service principal, network through VNet peering, user-defined routing via the hub firewall and private DNS forwarding. Wrote it up as a runbook, including the Unity Catalog pitfalls that come with it.',
              'Deployed the Unity Catalog layer: service principals, groups, catalogs, storage credentials, external locations, grants and secret scopes.',
              'Built the pipeline layer: Databricks Asset Bundles, dbt on a Databricks SQL warehouse (schema-generation macro, materialisation per layer, dbt tests), Lakeflow ingestion pipelines, and promotion from dev to integration to production.',
              'Contributed back to the shared engine: two pull requests merged (support for a two-VNet topology, and a normalisation fix), plus 15 platform improvements raised with the platform team, each with the observation, the root cause and a proposed fix. Four are tracked as issues.',
            ],
          },
        ],
        stack: [
          'Terraform',
          'Azure',
          'Databricks',
          'Unity Catalog',
          'dbt',
          'Databricks Asset Bundles',
          'GitHub Actions',
          'Bicep',
          'Bash',
        ],
      },
      {
        id: 'social-insurance-dbt',
        title: 'Migrating a social insurance data platform to dbt',
        role: 'Data Engineer',
        sector: 'Swiss social insurance, first pillar',
        period: '12.2023 – present',
        outcome:
          'Replaced an SSIS and stored-procedure ETL with dbt, inside a shared library of over a thousand models that each compensation fund imports as a versioned package.',
        sections: [
          {
            title: 'Context',
            body: 'Swiss first-pillar compensation funds, public and professional, moving off a legacy administration system. The transformation layer was SSIS packages, stored procedures and post-deployment scripts: hard to test, hard to review, and duplicated per fund.',
          },
          {
            title: 'What I did',
            items: [
              'I first built part of that legacy chain myself, then migrated the whole layer to dbt on SQL Server with one colleague, end to end.',
              'I own 5 of the 26 business domains, contributions and tax reporting among them, from the DB2 extract through to the export.',
              'Regression and integrity tests on every domain, sqlfluff linting on changed files, and the library released as a versioned package so each fund consumes the same tested code.',
              'The whole thing is orchestrated with Dagster.',
            ],
          },
          {
            title: 'Outcome',
            body: 'The migration runs in production and the team works in dbt rather than SSIS, which made the transformation layer reviewable, testable and shared across funds instead of rebuilt for each one.',
          },
        ],
        stack: [
          'dbt',
          'SQL Server',
          'T-SQL',
          'DB2',
          'Dagster',
          'sqlfluff',
          'GitHub Actions',
          'Data modelling',
        ],
      },
      {
        id: 'cost-refactor',
        title: 'Cutting infrastructure cost by 10× on a healthcare platform',
        role: 'Data Engineer / DevOps',
        sector: 'Healthcare · Switzerland',
        period: '10.2023 – 01.2024',
        outcome:
          'Migrated a healthcare data platform from Kubernetes to Azure serverless containers, dividing the infrastructure bill by roughly ten.',
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
          'Operate Oracle databases from 11g to 23c across customer environments, and automated the tablespace monitoring that used to be done by hand.',
        sections: [
          {
            title: 'What I do',
            items: [
              'Deploy Oracle databases from scratch on new servers - Community and Enterprise editions, versions 11g through 23c.',
              'Handle incidents and technical tickets through JIRA for the customers running on our databases.',
              'Wrote the Python tooling that tracks tablespace and disk usage across the fleet, so saturation is caught before it becomes an incident.',
              'Write and tune PL/SQL stored procedures.',
            ],
          },
        ],
        stack: ['Oracle 11g–23c', 'PL/SQL', 'SQL', 'Python', 'Linux', 'JIRA'],
      },
      {
        id: 'this-site',
        title: 'This website',
        role: 'Personal project',
        sector: 'Open source',
        period: '2024 – present',
        outcome:
          'Built and maintained from scratch - bilingual, no third-party JavaScript, a strict Content Security Policy, and continuously deployed on Netlify.',
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
