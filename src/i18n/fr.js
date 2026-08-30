const fr = {
  code: 'fr',
  label: 'Français',

  meta: {
    home: {
      title: 'Maxence Pachot - Data Engineer, Platform & DataOps',
      description:
        'Data Engineer à Lausanne, Suisse, sur les volets plateforme et DataOps. Je conçois et maintiens des plateformes data sur Azure : infrastructure Terraform, ingestion, lakehouse Databricks et CI/CD.',
    },
    projects: {
      title: 'Projets - Maxence Pachot',
      description:
        'Projets de plateformes data Azure : lakehouse pharmaceutique, Data Platform as a Service multi-clients, migration vers dbt d’une plateforme d’assurance sociale suisse, administration Oracle.',
    },
    notFound: {
      title: 'Page introuvable - Maxence Pachot',
      description: 'Cette page n’existe pas.',
    },
  },

  nav: {
    brand: 'Maxence PACHOT',
    home: 'Accueil',
    projects: 'Projets',
    cv: 'CV',
    menu: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    language: 'Choisir une langue',
    newTab: '(PDF, nouvel onglet)',
    skip: 'Aller au contenu',
  },

  cvFile: '/maxence_pachot_cv_fr.pdf',

  hero: {
    name: 'Maxence PACHOT',
    role: 'Data Engineer · Platform & DataOps',
    stack: 'Azure · Databricks · Terraform · dbt',
    location: 'ELCA Informatique · Lausanne, Suisse',
    photoAlt: 'Portrait de Maxence Pachot',
    pitch:
      'Je conçois et maintiens des plateformes data sur Azure, de l’infrastructure Terraform au lakehouse Databricks, CI/CD comprise. Trois ans et demi de conseil informatique en Suisse : industrie pharmaceutique, assurance sociale, santé.',
    cv: 'Télécharger le CV',
    contact: 'Me contacter',
  },

  whatIDo: {
    heading: 'Ce que je fais',
    items: [
      {
        icon: '/terraform.svg',
        title: 'Plateforme & infrastructure',
        body: 'Landing zones Azure en Terraform : Hub & Spoke, private endpoints par défaut, NAT gateway, DNS privé. Workspaces Databricks avec Unity Catalog. CI/CD sur Azure DevOps et GitHub Actions, authentifiée en OIDC, sans secrets stockés.',
      },
      {
        icon: '/databricks.svg',
        title: 'Data engineering',
        body: 'Ingestion depuis un SQL Server on-premise et des sources SaaS, lakehouse médaillon sur Delta, moteurs de merge SCD1/SCD2, couches de transformation dbt. Le tout en Python et SQL, testé comme du code applicatif.',
      },
      {
        icon: '/azuredevops.svg',
        title: 'Reprise et exploitation',
        body: 'Je livre du code qu’une autre équipe peut reprendre : la logique dans des packages testés plutôt que dans des notebooks, des tests et du lint qui bloquent la CI, une revue obligatoire sur le code partagé.',
      },
    ],
  },

  currentRole: {
    heading: 'Poste actuel',
    title: 'Ingénieur, Business Line Data Analytics & AI',
    employer: 'ELCA Informatique SA, Lausanne',
    period: '03.2023 – aujourd’hui',
    body: 'Société suisse de conseil en informatique. J’interviens sur des projets de plateformes data et de bases de données, pour des clients de l’industrie pharmaceutique, de l’assurance sociale et de la santé.',
    highlight:
      'Depuis septembre 2026, je suis référent technique de la plateforme pharmaceutique : je revois le code de la fondation partagée, sur laquelle deux développeurs livrent chacun leur domaine métier, et j’anime les ateliers avec les équipes métier.',
  },

  skills: {
    heading: 'Compétences',
    note: 'Classées par fréquence d’usage.',
    levels: { daily: 'Au quotidien', solid: 'Solide', working: 'Notions' },
    items: [
      {
        icon: '/azure.svg',
        title: 'Cloud',
        level: 'daily',
        body: 'Azure : Databricks, Data Factory, ADLS Gen2, Key Vault, VNet et private endpoints, NAT gateway, Log Analytics, service principals Entra ID.',
      },
      {
        icon: '/terraform.svg',
        title: 'Infrastructure as code',
        level: 'daily',
        body: 'Terraform : modules réutilisables, state distant, découpage multi-environnements, tflint, terraform-docs et pre-commit. Bicep pour le bootstrap de souscription.',
      },
      {
        icon: '/databricks.svg',
        title: 'Data & lakehouse',
        level: 'daily',
        body: 'Databricks : Unity Catalog, Delta Lake, Delta Live Tables et Lakeflow, Auto Loader, Asset Bundles, SQL Warehouses. Architecture médaillon, merge SCD1/SCD2. dbt, sur Databricks comme sur SQL Server.',
      },
      {
        icon: '/azuredevops.svg',
        title: 'CI/CD & DataOps',
        level: 'daily',
        body: 'Azure DevOps et GitHub Actions : runners auto-hébergés en réseau privé, OIDC et workload identity federation, pre-commit, branch policies, versionnage sémantique.',
      },
      {
        icon: '/python.svg',
        title: 'Langages',
        level: 'daily',
        body: 'Python (PySpark, pytest, ruff), SQL, T-SQL, PL/SQL, Bash. Développement assisté par IA avec Claude Code.',
      },
      {
        icon: '/oracle.svg',
        title: 'Bases de données',
        level: 'solid',
        body: 'Administration Oracle 11g à 23c : déploiement, tuning de performance, PL/SQL, supervision. SQL Server et T-SQL.',
      },
      {
        icon: '/docker.svg',
        title: 'Aussi dans la boîte à outils',
        level: 'working',
        body: 'Dagster, Docker, FastAPI, MongoDB. React et Vite, la stack sur laquelle tourne ce site.',
      },
    ],
  },

  certifications: {
    heading: 'Certifications',
    items: [
      {
        icon: '/databricks.svg',
        title: 'Databricks Certified Data Engineer Associate',
        date: 'nov. 2024',
      },
      {
        icon: '/azure.svg',
        title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
        date: 'sept. 2023',
      },
    ],
  },

  education: {
    heading: 'Formation',
    items: [
      {
        title: 'Master 2 informatique, MIAGE / MBDS',
        school: 'Université Côte d’Azur · 2022 – 2023',
        detail: 'Mobiquité, Big Data & Intégration de Systèmes',
      },
      {
        title: 'Diplôme d’ingénieur généraliste',
        school: 'ESTIA, École Supérieure des Technologies Industrielles Avancées · 2020 – 2023',
      },
      {
        title: 'Classes préparatoires (CPGE), PCSI / PC',
        school: 'Lycée Jacques Amyot, Melun · 2018 – 2020',
        detail: 'Mathématiques, physique et chimie, filière sélective préparant aux écoles d’ingénieurs.',
      },
    ],
  },

  about: {
    heading: 'Langues & statut',
    languagesLabel: 'Langues',
    languages: 'Français (langue maternelle) · Anglais (C1, TOEIC 910)',
    statusLabel: 'Statut',
    status: 'Permis B suisse · domicilié à Renens (VD), en poste à Lausanne.',
  },

  contact: {
    heading: 'Contact',
    email: 'pachot.maxence@gmail.com',
    linkedin: 'LinkedIn @MaxencePachot',
    github: 'GitHub @MaxencePachot',
  },

  footer: {
    rights: 'Tous droits réservés.',
    builtWith: 'Développé avec React et Vite, déployé sur Netlify.',
  },

  notFound: {
    title: 'Page introuvable',
    body: 'Cette URL n’existe pas sur ce site.',
    cta: 'Retour à l’accueil',
  },

  projects: {
    heading: 'Projets',
    intro:
      'Des missions clients : le code est privé et les clients ne sont pas nommés. Voici ce que j’ai construit, et ce que ça a donné.',
    labels: {
      outcome: 'Résultat',
      stack: 'Stack',
    },
    items: [
      {
        id: 'pharma-lakehouse',
        title: 'Lakehouse Azure pour un groupe pharmaceutique',
        role: 'Data Platform Engineer, référent technique depuis 09.2026',
        sector: 'Industrie pharmaceutique · Suisse',
        period: '02.2026 – aujourd’hui',
        outcome:
          'Le groupe est passé d’une souscription Azure vide à un lakehouse en production qui alimente Power BI. J’en ai construit les quatre couches : infrastructure, ingestion, ETL et CI/CD.',
        sections: [
          {
            title: 'Contexte',
            body: 'Les opérations du groupe tournaient sur un SQL Server on-premise, avec un reporting reconstruit en grande partie à la main. L’objectif : un lakehouse cloud gouverné, que les domaines métier peuvent étendre un par un.',
          },
          {
            title: 'Ce que j’ai construit',
            items: [
              'Une landing zone Azure complète en Terraform : 10 modules réutilisables, topologie Hub & Spoke, chaque ressource derrière un private endpoint avec accès public refusé, NAT gateway, zones DNS privées et Log Analytics centralisé.',
              'L’ingestion avec Azure Data Factory : un integration runtime auto-hébergé sur le SQL Server on-premise, piloté par le Change Tracking, et des pipelines paramétrés écrivant les chargements complets et delta dans ADLS Gen2 en parquet.',
              'Un lakehouse médaillon sur Databricks et Unity Catalog : bronze via Auto Loader et Delta Live Tables, silver via MERGE Delta avec SCD1/SCD2. Détection de changement par hash, pilotée par une table de watermark. En gold, des dimensions conformes partagées par tous les domaines et des tables de faits par domaine.',
              'Deux domaines métier en production : la finance, dont la marge brute mensuelle repose sur une cascade de neuf étapes pour résoudre les taux de coût, et le ciblage des campagnes marketing.',
              'La CI/CD sur Azure DevOps : des agents VMSS auto-hébergés dans le réseau, une fédération OIDC plutôt que des secrets stockés, et des pipelines séparés pour Terraform, les artefacts Data Factory et les Databricks Asset Bundles.',
              'Puis le travail de maintenabilité : la logique sortie des notebooks vers un package Python testé, des tests et du lint qui bloquent la CI, et un second relecteur obligatoire sur le cœur partagé.',
            ],
          },
          {
            title: 'Piloter le travail',
            body: 'Depuis septembre 2026, je suis référent technique de la plateforme : deux développeurs prennent chacun un domaine métier, je porte la fondation partagée et revois ce qui y entre, et j’anime les ateliers avec le métier. Un architecte data et un product owner cadrent la direction du projet.',
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
        title: 'Data Platform as a Service : plateforme Azure multi-clients',
        role: 'Platform Engineer / DataOps',
        sector: 'Plateforme interne partagée · onboarding client',
        period: '06.2026 – aujourd’hui',
        outcome:
          'J’ai intégré un client à la plateforme data Terraform partagée du groupe et construit le pont cross-tenant que cette intégration exigeait. J’ai aussi remonté ce qui coinçait : deux contributions mergées, 15 améliorations documentées.',
        sections: [
          {
            title: 'Contexte',
            body: 'Le groupe exploite une Data Platform as a Service : un moteur Terraform générique, versionné et épinglé, que chaque instance client consomme à distance. Intégrer un client, c’est déployer une instance. Quand elle n’a pas suffi, j’ai corrigé le moteur plutôt que l’instance.',
          },
          {
            title: 'Ce que j’ai fait',
            items: [
              'Onboarding complet d’un client sur une souscription Azure neuve : bootstrap de la topologie à 2 VNets, runners GitHub Actions privés, stockage du state Terraform derrière un private endpoint, puis l’instance client elle-même.',
              'Construction du pont cross-tenant : identité via un service principal, réseau via peering de VNets, routage défini par l’utilisateur à travers le firewall du hub et forwarding DNS privé. Rédaction du runbook correspondant, pièges Unity Catalog compris.',
              'Déploiement de la couche Unity Catalog : service principals, groupes, catalogs, storage credentials, external locations, grants et secret scopes.',
              'Construction de la couche pipeline : Databricks Asset Bundles, dbt sur un SQL warehouse Databricks (macro de génération de schéma, matérialisation par couche, tests dbt), pipelines d’ingestion Lakeflow, et promotion de dev vers intégration puis production.',
              'Contribution en retour au moteur partagé : deux pull requests mergées (prise en charge d’une topologie à 2 VNets, et un correctif de normalisation), plus 15 améliorations remontées à l’équipe plateforme, chacune avec l’observation, la cause racine et un correctif proposé. Quatre font l’objet d’une issue.',
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
        title: 'Migration vers dbt d’une plateforme de données d’assurance sociale',
        role: 'Data Engineer',
        sector: 'Assurance sociale suisse, 1er pilier',
        period: '12.2023 – aujourd’hui',
        outcome:
          'Avec un collègue, j’ai migré un ETL SSIS et ses procédures stockées vers dbt, au sein d’une bibliothèque partagée de plus d’un millier de modèles que chaque caisse de compensation importe comme paquet versionné.',
        sections: [
          {
            title: 'Contexte',
            body: 'Des caisses de compensation suisses du 1er pilier, publiques et professionnelles, quittent un système de gestion historique. La couche de transformation était faite de packages SSIS, de procédures stockées et de scripts de post-déploiement : difficile à tester, difficile à relire, et dupliquée par caisse.',
          },
          {
            title: 'Ce que j’ai fait',
            items: [
              'J’ai développé une partie de la chaîne historique, avant de la migrer entièrement vers dbt sur SQL Server avec un collègue.',
              'Je porte 5 des 26 domaines métier, dont les cotisations et les communications fiscales, de l’extraction DB2 jusqu’à l’export.',
              'J’ai couvert chaque domaine de tests de régression et d’intégrité, mis en place le linting sqlfluff sur les fichiers modifiés, et publié la bibliothèque en paquet versionné pour que chaque caisse consomme le même code testé.',
              'L’ensemble est orchestré avec Dagster.',
            ],
          },
          {
            title: 'Résultat',
            body: 'La migration tourne en production. L’équipe travaille en dbt au lieu de SSIS.',
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
          'Modélisation de données',
        ],
      },
      {
        id: 'cost-refactor',
        title: 'Division par 10 du coût d’infrastructure d’une plateforme santé',
        role: 'Data Engineer / DevOps',
        sector: 'Santé · Suisse',
        period: '10.2023 – 01.2024',
        outcome:
          'J’ai migré une plateforme data santé depuis Kubernetes vers des conteneurs serverless Azure, ce qui a divisé la facture d’infrastructure par environ dix.',
        sections: [
          {
            title: 'Ce que j’ai fait',
            items: [
              'Suppression du coût d’un cluster Kubernetes inactif la majeure partie du temps.',
              'Conteneurisation des applications avec Docker, pour un déploiement cohérent et reproductible.',
              'Mise en place de pipelines CI/CD Azure DevOps pour déployer automatiquement les services conteneurisés.',
              'Ajout d’une nouvelle source de données et développement des fonctionnalités qui la consomment, en Python avec FastAPI sur MongoDB.',
            ],
          },
        ],
        stack: ['Conteneurs serverless Azure', 'Docker', 'Python', 'FastAPI', 'MongoDB', 'Azure DevOps'],
      },
      {
        id: 'oracle-dba',
        title: 'Administration de bases de données Oracle',
        role: 'Administrateur de bases de données',
        sector: 'Services informatiques · plusieurs clients',
        period: '03.2023 – aujourd’hui',
        outcome:
          'J’exploite des bases Oracle de la 11g à la 23c sur les environnements clients, et j’ai automatisé la supervision des tablespaces, qui se faisait jusque-là à la main.',
        sections: [
          {
            title: 'Ce que je fais',
            items: [
              'Déploiement de bases Oracle sur de nouveaux serveurs, en partant de zéro : éditions Standard 2 et Enterprise, versions 11g à 23c.',
              'Traitement des incidents et des tickets techniques via JIRA pour les clients hébergés sur nos bases.',
              'Développement de l’outillage Python qui suit l’usage des tablespaces et du disque sur l’ensemble du parc, pour détecter la saturation avant qu’elle ne devienne un incident.',
              'Écriture et optimisation de procédures stockées PL/SQL.',
            ],
          },
        ],
        stack: ['Oracle 11g–23c', 'PL/SQL', 'SQL', 'Python', 'Linux', 'JIRA'],
      },
      {
        id: 'this-site',
        title: 'Ce site',
        role: 'Projet personnel',
        sector: 'Open source',
        period: '2024 – aujourd’hui',
        outcome:
          'Je le développe et le maintiens : un site bilingue, sans JavaScript tiers, avec une Content Security Policy stricte et un déploiement continu sur Netlify.',
        sections: [
          {
            title: 'Notes',
            items: [
              'React 18 et Vite. Le site est servi en français et en anglais sur des URL distinctes, avec alternates hreflang.',
              'Aucune dépendance CDN ni JavaScript tiers : les polices et les styles sont auto-hébergés, et la Content Security Policy est déclarée dans netlify.toml.',
              'Images servies en WebP avec repli JPEG : la photo de profil est passée de 1,3 Mo à 15 Ko.',
              'Déploiement continu sur Netlify depuis GitHub.',
            ],
          },
        ],
        stack: ['React', 'Vite', 'Material Kit 2', 'Netlify', 'HTML', 'CSS'],
      },
    ],
  },
};

export default fr;
