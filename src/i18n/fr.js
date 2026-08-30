const fr = {
  code: 'fr',
  label: 'Français',

  meta: {
    home: {
      title: 'Maxence Pachot - Data Engineer, Platform & DataOps',
      description:
        'Data Engineer à Lausanne, Suisse, sur les volets plateforme et DataOps. Je construis des plateformes data Azure de bout en bout : infrastructure Terraform, ingestion, lakehouse Databricks et CI/CD.',
    },
    projects: {
      title: 'Projets - Maxence Pachot',
      description:
        'Projets de plateformes data Azure : lakehouse pharmaceutique, Data Platform as a Service multi-clients, migration vers dbt d’une plateforme d’assurance sociale suisse, administration Oracle.',
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
    skip: 'Aller au contenu',
    switchTo: 'Read in English',
    switchShort: 'EN',
  },

  cvFile: '/maxence_pachot_cv_fr.pdf',

  hero: {
    name: 'Maxence PACHOT',
    role: 'Data Engineer · Platform & DataOps',
    stack: 'Azure · Databricks · Terraform · dbt',
    location: 'ELCA Informatique · Lausanne, Suisse',
    photoAlt: 'Portrait de Maxence Pachot',
    pitch:
      'Je construis des plateformes data Azure de bout en bout : l’infrastructure Terraform, l’ingestion, le lakehouse Databricks et la CI/CD qui les livre. Puis je les fais tenir en production.',
    cv: 'Télécharger le CV',
    contact: 'Me contacter',
  },

  proof: {
    heading: 'En chiffres',
    note: 'Tout provient de travaux livrés au cours des douze derniers mois.',
    items: [
      { value: '5', label: 'domaines métier dont je suis responsable dans une bibliothèque dbt, sur 26' },
      { value: '10', label: 'modules Terraform réutilisables en production sur Azure' },
      { value: '2', label: 'pull requests mergées dans le moteur IaC partagé du groupe' },
    ],
  },

  whatIDo: {
    heading: 'Ce que je fais',
    items: [
      {
        icon: '/terraform.svg',
        title: 'Plateforme & infrastructure',
        body: 'Landing zones Azure en Terraform - Hub & Spoke, private endpoints par défaut, NAT gateway, DNS privé. Workspaces Databricks avec Unity Catalog. CI/CD sur Azure DevOps et GitHub Actions, authentifiée en OIDC plutôt qu’avec des secrets stockés.',
      },
      {
        icon: '/databricks.svg',
        title: 'Data engineering',
        body: 'Ingestion depuis SQL Server on-premise et sources SaaS, lakehouse médaillon sur Delta, moteurs de merge SCD1/SCD2, couches de transformation dbt. Écrit en Python et SQL, et testé unitairement comme du code applicatif.',
      },
      {
        icon: '/azuredevops.svg',
        title: 'Le faire durer',
        body: 'Je livre du code que d’autres peuvent reprendre : la logique dans des packages plutôt que dans des notebooks, lint et tests en gate CI bloquante, propriété du code sur la fondation partagée, conventions écrites. Et j’anime les ateliers avec le métier.',
      },
    ],
  },

  currentRole: {
    heading: 'Poste actuel',
    title: 'Data Engineer & DBA Oracle',
    employer: 'ELCA Informatique SA - Lausanne, Suisse',
    period: '03.2023 – aujourd’hui',
    body: 'Société suisse de conseil en informatique. Je livre des projets de plateformes data et de bases de données pour des clients de la pharma, de l’assurance sociale et de la santé.',
    highlight:
      'Depuis 09.2026, je suis référent technique de la plateforme data pharmaceutique : deux développeurs prennent chacun un domaine métier, je porte la fondation partagée et revois ce qui y entre, et j’anime les ateliers avec le métier. Un architecte data et un product owner cadrent la direction du projet.',
  },

  skills: {
    heading: 'Compétences',
    note: 'Classées par fréquence d’usage réelle. Seules les exceptions sont étiquetées.',
    levels: { daily: 'Au quotidien', solid: 'Solide', working: 'Notions' },
    items: [
      {
        icon: '/azure.svg',
        title: 'Cloud',
        level: 'daily',
        body: 'Azure - Databricks, Data Factory, ADLS Gen2, Key Vault, VNet et private endpoints, NAT gateway, Log Analytics, service principals Entra ID.',
      },
      {
        icon: '/terraform.svg',
        title: 'Infrastructure as code',
        level: 'daily',
        body: 'Terraform - modules réutilisables, state distant, découpage multi-environnements, tflint, terraform-docs et pre-commit. Bicep pour le bootstrap de souscription.',
      },
      {
        icon: '/databricks.svg',
        title: 'Data & lakehouse',
        level: 'daily',
        body: 'Databricks - Unity Catalog, Delta Lake, Delta Live Tables et Lakeflow, Auto Loader, Asset Bundles, SQL Warehouses. Architecture médaillon, merge SCD1/SCD2. dbt, sur Databricks et sur SQL Server.',
      },
      {
        icon: '/azuredevops.svg',
        title: 'CI/CD & DataOps',
        level: 'daily',
        body: 'Azure DevOps et GitHub Actions, runners auto-hébergés en réseau privé, OIDC et workload identity federation, pre-commit, branch policies, versionnage sémantique.',
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
        body: 'Administration Oracle 11g à 23c - déploiement, tuning de performance, PL/SQL, supervision. SQL Server et T-SQL.',
      },
      {
        icon: '/docker.svg',
        title: 'Aussi dans la boîte à outils',
        level: 'working',
        body: 'Dagster, Docker, FastAPI, MongoDB, React et Vite - la stack sur laquelle tourne ce site.',
      },
    ],
  },

  howIWork: {
    heading: 'Ma façon de travailler',
    items: [
      'La logique vit dans un package, pas dans un notebook. Si c’est important, c’est importable et testé unitairement.',
      'Les gates CI sont bloquantes. Une erreur de lint ou un test qui échoue casse le build, et la fondation partagée exige toujours un second relecteur.',
      'Les conventions s’écrivent. Une règle qui ne vit que dans la tête de quelqu’un n’est pas une règle.',
      'L’infrastructure est du code, et privée par défaut - on refuse d’abord, puis on ouvre exactement ce qu’il faut.',
      'J’utilise des assistants de code IA (Claude Code) tous les jours, pour les refactorings, les tests et la documentation. Ça a augmenté mon débit ; ça n’a pas remplacé la revue.',
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
        title: 'Master 2 informatique - MIAGE / MBDS',
        school: 'Université Côte d’Azur · 2022 – 2023',
        detail: 'Mobiquité, Big Data & Intégration de Systèmes',
      },
      {
        title: 'Diplôme d’ingénieur - généraliste',
        school: 'ESTIA - École Supérieure des Technologies Industrielles Avancées · 2020 – 2023',
      },
      {
        title: 'Classes préparatoires (CPGE) - PCSI / PC',
        school: 'Lycée Jacques Amyot, Melun · 2018 – 2020',
        detail: 'Mathématiques, physique et chimie - filière sélective préparant aux écoles d’ingénieurs.',
      },
    ],
  },

  about: {
    heading: 'Langues & statut',
    languagesLabel: 'Langues',
    languages: 'Français (langue maternelle) · Anglais (C1 - TOEIC 910)',
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
      'Des missions clients : le code est privé et les clients ne sont pas nommés. Ce qui suit, c’est ce que j’ai réellement construit, et ce que ça a changé.',
    labels: {
      outcome: 'Résultat',
      stack: 'Stack',
    },
    items: [
      {
        id: 'pharma-lakehouse',
        title: 'Lakehouse Azure pour un groupe pharmaceutique',
        role: 'Data Platform Engineer - référent technique depuis 09.2026',
        sector: 'Pharmaceutique · Suisse',
        period: '02.2026 – aujourd’hui',
        outcome:
          'J’ai emmené un groupe pharmaceutique suisse d’une souscription Azure vide à un lakehouse en production alimentant Power BI, en construisant les quatre couches (infrastructure, ingestion, ETL et CI/CD), puis j’en ai fait une base de code que deux nouveaux développeurs peuvent reprendre.',
        sections: [
          {
            title: 'Contexte',
            body: 'Le groupe exploitait ses opérations sur un SQL Server on-premise, avec un reporting reconstruit en grande partie à la main. L’objectif : un lakehouse cloud gouverné, que les domaines métier peuvent étendre un par un.',
          },
          {
            title: 'Ce que j’ai construit',
            items: [
              'Une landing zone Azure complète en Terraform - 10 modules réutilisables, topologie Hub & Spoke, chaque ressource derrière un private endpoint avec accès public refusé, NAT gateway, zones DNS privées et Log Analytics centralisé.',
              'L’ingestion avec Azure Data Factory : un integration runtime auto-hébergé sur le SQL Server on-premise piloté par le Change Tracking, et des pipelines paramétrés écrivant les chargements complets et delta dans ADLS Gen2 en parquet.',
              'Un lakehouse médaillon sur Databricks et Unity Catalog : bronze via Auto Loader et Delta Live Tables, silver via MERGE Delta avec SCD1/SCD2 et détection de changement par hash pilotée par une table de watermark, gold avec des dimensions conformes partagées par tous les domaines et des tables de faits par domaine.',
              'Deux domaines métier en production : la finance, dont la cascade de résolution de taux de coût en neuf étapes derrière la marge brute mensuelle, et le ciblage des campagnes marketing.',
              'La CI/CD sur Azure DevOps avec des agents VMSS auto-hébergés dans le réseau et une fédération OIDC plutôt que des secrets stockés - des pipelines séparés pour Terraform, les artefacts Data Factory et les Databricks Asset Bundles.',
              'Puis la mise en maintenabilité : la logique sortie des notebooks vers un package Python testé, des gates qualité en CI, et un second relecteur obligatoire sur le cœur partagé.',
            ],
          },
          {
            title: 'Piloter le travail',
            body: 'Depuis septembre 2026, je suis référent technique de la plateforme : deux développeurs prennent chacun un domaine métier, je porte la fondation partagée et revois ce qui y entre, et j’anime les ateliers avec le métier. Un architecte data et un product owner cadrent la direction du projet.',
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
        title: 'Data Platform as a Service - plateforme Azure multi-clients',
        role: 'Platform Engineer / DataOps',
        sector: 'Plateforme interne partagée · onboarding client',
        period: '06.2026 – aujourd’hui',
        outcome:
          'J’ai onboardé un client sur la plateforme data Terraform partagée du groupe, construit le pont cross-tenant qu’elle exigeait, et renvoyé les frictions en amont sous forme de code mergé et de tickets documentés.',
        sections: [
          {
            title: 'Contexte',
            body: 'Le groupe exploite une Data Platform as a Service : un moteur Terraform générique, versionné et épinglé, que chaque instance client consomme à distance. Onboarder un client, c’est déployer une instance et, quand elle ne convient pas, améliorer le moteur plutôt que rustiner le client.',
          },
          {
            title: 'Ce que j’ai fait',
            items: [
              'Onboarding complet d’un client sur une souscription Azure neuve : bootstrap de la topologie 2 VNets, runners GitHub Actions privés, stockage du state Terraform derrière un private endpoint, puis l’instance client elle-même.',
              'Construction du pont cross-tenant : identité via un service principal, réseau via peering de VNets, routage défini par l’utilisateur à travers le firewall du hub et forwarding DNS privé. Rédaction du runbook correspondant, y compris les pièges Unity Catalog qui vont avec.',
              'Déploiement de la couche Unity Catalog : service principals, groupes, catalogs, storage credentials, external locations, grants et secret scopes.',
              'Construction de la couche pipeline : Databricks Asset Bundles, dbt sur un SQL warehouse Databricks (macro de génération de schéma, matérialisation par couche, tests dbt), pipelines d’ingestion Lakeflow, et promotion de dev vers intégration puis production.',
              'Contribution en retour au moteur partagé : deux pull requests mergées (support d’une topologie 2 VNets, et un correctif de normalisation), plus 15 améliorations plateforme remontées à l’équipe plateforme, chacune avec l’observation, la cause racine et un correctif proposé. Quatre sont suivies en tant qu’issues.',
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
          'Remplacement d’un ETL SSIS et procédures stockées par dbt, au sein d’une bibliothèque partagée de plus d’un millier de modèles que chaque caisse de compensation importe comme paquet versionné.',
        sections: [
          {
            title: 'Contexte',
            body: 'Des caisses de compensation suisses du 1er pilier, publiques et professionnelles, quittant un système de gestion historique. La couche de transformation était faite de packages SSIS, de procédures stockées et de scripts de post-déploiement : difficile à tester, difficile à relire, et dupliquée par caisse.',
          },
          {
            title: 'Ce que j’ai fait',
            items: [
              'J’ai d’abord développé une partie de cette chaîne historique, puis migré toute la couche vers dbt sur SQL Server avec un collègue, de bout en bout.',
              'Je porte 5 des 26 domaines métier, dont les cotisations et les communications fiscales, de l’extraction DB2 jusqu’à l’export.',
              'Tests de régression et d’intégrité sur chaque domaine, linting sqlfluff sur les fichiers modifiés, et la bibliothèque publiée en paquet versionné pour que chaque caisse consomme le même code testé.',
              'L’ensemble est orchestré avec Dagster.',
            ],
          },
          {
            title: 'Résultat',
            body: 'La migration tourne en production et l’équipe travaille en dbt plutôt qu’en SSIS, ce qui rend la couche de transformation relisible, testable et mutualisée entre caisses au lieu d’être reconstruite pour chacune.',
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
          'Migration d’une plateforme data santé de Kubernetes vers des conteneurs serverless Azure, divisant la facture d’infrastructure par environ dix.',
        sections: [
          {
            title: 'Ce que j’ai fait',
            items: [
              'Migration des charges de travail de Kubernetes vers des conteneurs serverless Azure, supprimant le coût d’un cluster inactif la majeure partie du temps.',
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
          'J’exploite des bases Oracle de la 11g à la 23c sur les environnements clients, et j’ai automatisé la supervision des tablespaces qui se faisait à la main.',
        sections: [
          {
            title: 'Ce que je fais',
            items: [
              'Déploiement de bases Oracle from scratch sur de nouveaux serveurs - éditions Community et Enterprise, versions 11g à 23c.',
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
          'Développé et maintenu de zéro - bilingue, sans JavaScript tiers, avec une Content Security Policy stricte et un déploiement continu sur Netlify.',
        sections: [
          {
            title: 'Notes',
            items: [
              'React 18 et Vite, servi en français et en anglais sur des URLs distinctes avec alternates hreflang.',
              'Aucune dépendance CDN ni JavaScript tiers : polices et styles sont auto-hébergés, et la Content Security Policy est déclarée dans netlify.toml.',
              'Images servies en WebP avec repli JPEG - la photo de profil est passée de 1,3 Mo à 15 Ko.',
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
