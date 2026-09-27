/* ===========================================================================
   Natnicha Rodtong — site content
   ---------------------------------------------------------------------------
   THIS IS THE ONLY FILE YOU NEED TO EDIT to change site content.
   Source of truth in prose form: ../NatnichaR-CV_MASTER.md

     PROFILE   -> home page (hero, about, skills, experience, education)
     PROJECTS  -> projects index + one detail page per entry (matched by slug)

   Adding a project:
     1. add an object to PROJECTS below
     2. copy projects/journi.html to projects/<slug>.html
     3. change the renderProject("<slug>") call at the bottom of that file
   =========================================================================== */

/* ---------------------------------------------------------------------------
   Years of experience are CALCULATED at page load, never hard-coded.
   Anywhere you write {{YEARS}} in the strings below it is replaced with the
   current figure:  (today - startYear/startMonth) - gapYears, floored.
   Tune the two knobs here and every mention on the site updates itself.
--------------------------------------------------------------------------- */
const CAREER = {
  startYear: 2016,
  startMonth: 5,    // started 1 May 2016 — first professional role (Thai NS Solutions)
  gapMonths: 30     // 2.5 years out for the Master's degree, subtracted
};

const PROFILE = {
  name: "Natnicha Rodtong",
  nickname: "Fern",
  role: 'Senior Backend Engineer &amp; <em>Tech Lead</em>',
  availability: "Open to senior backend &amp; tech lead roles",
  tagline:
    "I design and ship cloud-native platforms, distributed systems, and enterprise applications — from reinforcement-learning research on Kubernetes autoscaling to production order-to-cash systems.",
  location: "Bangkok, Thailand",
  email: "nat.rodtong@gmail.com",
  badge: "Bangkok · TU Chemnitz alum",

  // Avatar: GitHub avatar by default. Set to "assets/profile.jpg" to use your own.
  photo: "https://github.com/natnicha.png",
  initials: "NR",

  /* "Download CV" serves this file. Must sit next to index.html and be committed
     alongside the site. Set to "" to fall back to the browser print dialog. */
  cvFile: "NatnichaR-CV_2026.pdf",

  links: {
    github:   "https://github.com/natnicha",
    linkedin: "https://www.linkedin.com/in/natnicha-rodtong",
    medium:   "https://medium.com/@nat.rodtong",
    zenodo:   "https://zenodo.org/records/7789536"
  },

  facts: [
    ["Experience", "{{YEARS}}+ years"],
    ["Focus",      "Web/Application Development · Platform · Cloud"],
    ["Core stack", "Java · Go · Python"],
    ["Cloud",      "AWS · GCP · Kubernetes"],
    ["Education",  "M.Sc. Web Engineering (TU Chemnitz)"],
    ["Languages",  "Thai C2 · English C1 · German B1"],
    ["Remote",     "3.5+ years, fully distributed"]
  ],

  highlights: [
    ["{{YEARS}}+ yrs", "Backend &amp; platform engineering across Thailand and Germany"],
    ["15",      "Microservices led to production go-live as tech lead"],
    ["AWS",     "Certified AI Practitioner — Bedrock, RAG, Guardrails"],
    ["GPA 1.6", "M.Sc. Web Engineering, TU Chemnitz — RL-based K8s autoscaling thesis"],
    ["1 paper", "Published research, Danish Scientific Journal (2023)"],
    ["1M+",     "Monthly readers via CodeX on Medium"]
  ],

  about: [
    "I'm a Senior Backend Engineer and Tech Lead with {{YEARS}}+ years building cloud-native platforms, distributed systems, and enterprise applications — across fintech, e-commerce, logistics, manufacturing, research, and consulting, in both Thailand and Germany.",
    "My core is backend and platform engineering: Java and Spring Boot, Go, Python, Kubernetes, AWS and GCP. I care about the parts that decide whether a system survives contact with production — clean domain boundaries, Zero-Trust security, real test coverage, and CI that catches problems before a reviewer has to. My Master's thesis pushed that further, using reinforcement learning to make Kubernetes horizontal pod autoscaling adapt to machine-learning workloads.",
    "I lead by building alongside the team: architecture discussions, code review, mentoring, and making AI-assisted development (Claude Code, GitHub Copilot) a genuine part of how we work rather than a novelty. After 3.5+ years of fully remote international work I'm at home in agile, multicultural, English-speaking teams — and I write about what I learn."
  ],

  contactBlurb:
    "Open to senior backend, platform, and tech lead opportunities — remote-first or Bangkok-based. Email is the fastest way to reach me.",

  skills: [
    ["Languages",                   ["Java","Go","Python","TypeScript","JavaScript","Node.js","C#","C++","C"]],
    ["Backend &amp; APIs",          ["Spring Boot","FastAPI","Flask","Fiber","Gin","REST APIs","ORM","Microservices"]],
    ["Frontend",                    ["Angular","React","Vite","TypeScript","Bootstrap"]],
    ["Cloud &amp; platform",        ["AWS","S3","AWS Batch","CloudWatch","GCP","Kubernetes","GKE","Docker","CI/CD","Jenkins"]],
    ["Data",                        ["PostgreSQL","Oracle","MS SQL Server","MySQL","MongoDB","ETL","Stored procedures"]],
    ["Architecture &amp; practice", ["Domain-Driven Design","Clean Code","TDD","Zero-Trust","Pair programming","Code review"]],
    ["Security &amp; auth",         ["OAuth 2.0","JWT","SonarQube","Security scanning"]],
    ["AI &amp; ML",                 ["Claude Code","Amazon Bedrock","RAG","Guardrails","PyTorch","Scikit-learn","OWLready2"]],
    ["AI-assisted development",     ["Claude Code","GitHub Copilot","AI-assisted code review","Agentic workflows"]],
    ["Testing",                     ["Pytest","Robot Framework","JMeter","Unit / integration / smoke"]],
    ["Tooling",                     ["Git","GitHub","GitLab","Bitbucket","SVN","Jira","Trello","PowerShell"]],
    ["Analytics &amp; RPA",         ["Power BI","Tableau","UiPath"]]
  ],

  /* current:true -> highlighted dot.  early:true -> hidden behind "show earlier".
     project:"<slug>" -> renders a "Read the case study" link to that project page. */
  experience: [
    {
      role:"Team Leader", org:"IT One (Accenture Thailand partner)",
      where:"Bangkok, Thailand", when:"Dec 2025 – Present", current:true,
      project:"logistics-platform",
      blurb:"Leading a development team building enterprise logistics and order-management platforms for a major building-materials group.",
      points:[
        "Lead end-to-end delivery of a full-stack logistics platform covering order management, delivery coordination, fleet and truck tracking (FleetLink integration), pricing, and billing.",
        "Design and build secure, OAuth 2.0-protected backend services and REST APIs with Java Spring Boot, PostgreSQL, AWS S3, AWS Batch, and Kubernetes, integrated with enterprise systems including SAP S/4HANA.",
        "Delivered a 15-service platform release through full UAT sign-off to production go-live.",
        "Build and maintain the front end with Angular 16 and Bootstrap 5.",
        "Provide technical leadership across architecture, feature delivery, code review, QA, deployment planning, and cross-functional coordination.",
        "Mentor developers and champion Clean Code, automated testing, and AI-assisted development with Claude Code and GitHub Copilot.",
        "Completed advanced AWS Generative AI training — Amazon Bedrock, RAG architectures, and Amazon Guardrails for secure AI applications.",
        "Work in an international, multicultural environment with 80%+ remote collaboration across Thai- and English-speaking teams."
      ],
      stack:["Java","Spring Boot","Angular 16","PostgreSQL","AWS","Kubernetes","OAuth 2.0","Claude Code"]
    },
    {
      role:"Freelance Backend / Full-Stack Engineer", org:"Independent",
      where:"Remote, Thailand", when:"Aug 2025 – Sep 2025",
      project:"search-data-platform",
      blurb:"A full-stack platform for scraping, processing, and searching search-engine data against user-defined keywords.",
      points:[
        "Gathered requirements, designed the system architecture, and implemented scalable features end to end.",
        "Built the backend and RESTful APIs with Go, Gin, and PostgreSQL; the front end with React, Vite, and TypeScript.",
        "Applied Zero-Trust principles with OAuth 2.0 to protect the application.",
        "Implemented a full CI pipeline with automated security scanning, code-coverage analysis, and AI-assisted code review, plus an automated test suite."
      ],
      stack:["Go","Gin","PostgreSQL","React","Vite","TypeScript","OAuth 2.0","CI/CD"]
    },
    {
      role:"Master's Thesis Researcher", org:"Technische Universität Chemnitz",
      where:"Germany · with Fraunhofer ISST, Dortmund", when:"Jul 2024 – Mar 2025",
      project:"k8s-rl-autoscaling",
      blurb:"Adaptive Horizontal Pod Autoscaling based on reinforcement learning in Kubernetes for machine-learning workloads.",
      points:[
        "Implemented and trained a reinforcement-learning agent in PyTorch to optimise Kubernetes resource allocation.",
        "Set up Kubernetes nodes and resource configurations for the experimental environment.",
        "Developed RESTful APIs with Python and FastAPI connecting the RL agent to Kubernetes.",
        "Benchmarked performance under varied load patterns with JMeter and automated the API test suite.",
        "Collaborated with doctoral researchers from Fraunhofer-Institut für Software- und Systemtechnik (ISST).",
        "100% remote, fully English-speaking environment."
      ],
      stack:["Kubernetes","PyTorch","Python","FastAPI","JMeter","Reinforcement learning"]
    },
    {
      role:"Research Assistant (Software Developer)", org:"Fraunhofer IIS",
      where:"Germany · Remote", when:"Jul 2024 – Dec 2024",
      project:"audio-evaluation",
      blurb:"Audio evaluation and classification tooling with the Audio and Media Technology team.",
      points:[
        "Built a solution to evaluate and classify modified audio files against their originals.",
        "Implemented Python processing scripts based on the team's research formula.",
        "Designed and developed a web application presenting evaluation results with integrated playback for human review, improving workflow efficiency and accuracy.",
        "Gathered requirements from researchers and confirmed features with stakeholders.",
        "Built the front end with React, Node.js, and internal libraries."
      ],
      stack:["Python","React","Node.js","Audio processing"]
    },
    {
      role:"Trainee — Master's Degree Internship", org:"Technische Universität Chemnitz",
      where:"Germany", when:"Oct 2023 – Mar 2024", early:true,
      project:"semantic-module-search",
      blurb:"A semantic-search platform for cross-border university modules from European institutions.",
      points:[
        "Engineered a full-stack platform using OWL ontologies to retrieve semantically related modules from user keywords.",
        "Preprocessed ontology data into feature vectors with OWLready2 and modelled module relationships with Scikit-learn.",
        "Built RESTful APIs with Python/FastAPI over PostgreSQL; front end with React, Vite, and TypeScript.",
        "Implemented a CI pipeline with automated security checks, coverage analysis, and AI code review.",
        "Pitched a live demo of the application against competing teams and ran code reviews for teammates."
      ],
      stack:["Python","FastAPI","PostgreSQL","React","OWL","Scikit-learn"]
    },
    {
      role:"Student Software Developer", org:"Technische Universität Chemnitz",
      where:"Germany", when:"Mar 2023 – Aug 2023", early:true,
      project:"pv-calculator",
      blurb:"A photovoltaic calculator estimating electricity generation from live weather and local conditions.",
      points:[
        "Built RESTful APIs in Go (Gin) for the calculation engine and integrated third-party data services into MongoDB.",
        "Engineered the front end with React, Vite, and TypeScript.",
        "Applied a Zero-Trust security model with OAuth 2.0; managed source and CI on GitHub."
      ],
      stack:["Go","Gin","MongoDB","React","Vite","OAuth 2.0"]
    },
    {
      role:"Senior Software Developer", org:"Ascend Money (Ascend Group)",
      where:"Thailand · Remote", when:"Dec 2021 – Dec 2022",
      project:"mutual-fund-backend",
      blurb:"Backend for the mutual-fund investment feature of Thailand's leading e-wallet.",
      points:[
        "Implemented backend services in Go with the Fiber framework.",
        "Applied Clean Code, Test-Driven Development, and 100% pair programming.",
        "Designed and automated unit, smoke, and integration tests.",
        "Ran services on Google Kubernetes Engine with data on GCP; contributed to the GCP → AWS migration using Jenkins.",
        "Mentored junior developers, guiding project kick-off and running regular 1:1s.",
        "Raised code quality and team throughput through thorough peer review."
      ],
      stack:["Go","Fiber","GKE","GCP","AWS","Jenkins","TDD"]
    },
    {
      role:"Python Backend Developer (Part-time)", org:"Blue Pi",
      where:"Thailand", when:"Jul 2020 – Dec 2021", early:true,
      blurb:"Backend microservices for a new e-commerce application with complex business logic.",
      points:[
        "Implemented backend microservices and RESTful APIs with Python (Flask) and ORM over PostgreSQL.",
        "Applied Clean Code, Zero-Trust principles, and Domain-Driven Design.",
        "Designed unit, smoke, and integration tests and automated them with Pytest and Robot Framework.",
        "Delivered with Agile/Jira; source and CI on GitLab."
      ],
      stack:["Python","Flask","PostgreSQL","DDD","Pytest","Robot Framework"]
    },
    {
      role:"Advisory Associate Manager", org:"KPMG Phoomchai Business Advisory",
      where:"Thailand", when:"Jul 2019 – Nov 2021", early:true,
      project:"gov-analytics-platform",
      blurb:"Analytics platforms, ETL systems, and BI solutions for enterprise and government clients.",
      points:[
        "Delivered a data analytics and dashboard platform for an economic and financial government organisation.",
        "Designed the solution architecture and the underlying financial analysis models.",
        "Built scheduled Python scripts and APIs to scrape, process, and serve data; wrote MS SQL stored procedures and views.",
        "Partnered with a vendor to deliver interactive Power BI dashboards for supervisors.",
        "Built a high-efficiency ETL tool with PowerShell automation to remove internal data-workflow bottlenecks.",
        "Designed a new life insurance product with the insurance team under KYC compliance and authored the BRD.",
        "Trained end users and admins, and ran a Power BI enablement session for 10 colleagues."
      ],
      stack:["Python","MS SQL","Power BI","ETL","PowerShell"]
    },
    {
      role:"Co-founder", org:"AllInCode",
      where:"Thailand", when:"Sep 2017 – Jul 2019", early:true,
      project:"ar-dictionary",
      blurb:"An edutainment product — a children's dictionary brought to life with augmented reality.",
      points:[
        "Ran customer analysis with the LEAN canvas and defined product features with the team.",
        "Developed the AR mobile application with Unity, C#, and the Vuforia Engine SDK.",
        "Created animated 3D cartoon models in Blender and integrated them into the app.",
        "Designed the retail packaging (card and box set) for market launch."
      ],
      stack:["Unity","C#","Vuforia","Blender","AR"]
    },
    {
      role:"Data Analyst", org:"KPMG Phoomchai Audit",
      where:"Thailand", when:"Jan 2019 – Jun 2019", early:true,
      blurb:"Analytics supporting audit teams and client decision-making.",
      points:[
        "Prepared, cleansed, and analysed data to surface trends and segment comparisons.",
        "Validated auditors' results against analytics output to ensure accuracy and reliability.",
        'Ran a "Pilot to MS SQL Server" workshop for colleagues with no programming background.'
      ],
      stack:["MS SQL","Data analysis"]
    },
    {
      role:"IT Engineer", org:"Thai NS Solutions",
      where:"Thailand", when:"Jun 2016 – Dec 2018", early:true,
      blurb:"Windows and web applications managing inventory and stock for a steel manufacturing plant.",
      points:[
        "Revamped a legacy Windows application with Java EE, Apache Tomcat, and MS SQL using a customised MVC architecture.",
        "Initiated a new web application with Java Spring Boot.",
        "Designed and implemented tests for reliability; version control with SVN.",
        "Provided ongoing maintenance, debugging, and troubleshooting for existing services.",
        "Mentored junior developers with kick-off guidance and regular 1:1s."
      ],
      stack:["Java EE","Spring Boot","Tomcat","MS SQL","MVC","SVN"]
    },
    {
      role:"Trainee — Bachelor's Internship", org:"NECTEC, NSTDA",
      where:"Thailand", when:"Mar 2014 – Apr 2014", early:true,
      blurb:'Large-scale Simulation Research Laboratory — "OpenStack with GPU Passthrough".',
      points:[
        "Researched and implemented GPU passthrough in Oracle OpenStack to improve performance and resource utilisation.",
        "Configured and set up the OpenStack environment for the project.",
        "Presented GPU-vs-CPU performance findings to the research team."
      ],
      stack:["OpenStack","GPU passthrough","Virtualisation"]
    }
  ],

  education: [
    {
      kicker:"Master's degree",
      title:"M.Sc. Web Engineering",
      sub:"Technische Universität Chemnitz, Germany · 2025 · GPA 1.6",
      body:"Thesis: Adaptive Horizontal Pod Autoscaling Based on Reinforcement Learning in Kubernetes for Machine Learning — in collaboration with Fraunhofer ISST."
    },
    {
      kicker:"Bachelor's degree",
      title:"B.Eng. Computer Engineering — First Class Honours",
      sub:"King Mongkut's University of Technology Thonburi (KMUTT), Thailand · 2016",
      body:"Graduated with first class honours in computer engineering."
    },
    {
      kicker:"Certification",
      title:"AWS Certified AI Practitioner",
      sub:"Amazon Web Services · Feb 2026 – Feb 2029",
      body:"Validates working knowledge of AI/ML and generative AI services on AWS."
    },
    {
      kicker:"Training",
      title:"AWS Generative AI — advanced",
      sub:"Amazon Bedrock · RAG · Amazon Guardrails",
      body:"Building secure, grounded generative-AI applications with retrieval-augmented generation and guardrails."
    }
  ],

  writing: [
    {
      kicker:"Publication",
      title:"Natural language, pair programming, communication &amp; sentiment analysis",
      sub:"Danish Scientific Journal · 27 March 2023",
      body:"Peer-reviewed research on how natural language and communication patterns shape pair-programming outcomes. Analysis notebooks are public on GitHub.",
      link:{ href:"https://zenodo.org/records/7789536", label:"Read the paper" },
      link2:{ href:"https://github.com/natnicha/natural-language-effects-pair-programming", label:"Analysis repo" }
    },
    {
      kicker:"Writing",
      title:"Technical writing on Medium",
      sub:"Writer with CodeX · 1M+ monthly readers",
      body:"Essays and deep dives on backend engineering, cloud-native architecture, and AI-assisted development.",
      link:{ href:"https://medium.com/@nat.rodtong", label:"Read on Medium" }
    },
    {
      kicker:"Beyond code",
      title:"Running &amp; badminton",
      sub:"Stockholm Marathon 2025 · Dresden Marathon · Saxony tournaments 2023",
      body:"Distance running and competitive badminton — the same discipline and perseverance I bring to long delivery cycles.",
      link:null
    }
  ]
};

/* ===========================================================================
   PROJECTS — each entry also becomes a detail page at projects/<slug>.html
   Fields:
     slug, title, tag (short label), category (drives the filter buttons),
     lede, year, thumb (1-3 chars), featured,
     spec  : [[label, value], ...]      -> the fact strip on the detail page
     stack : []                          -> technology chips
     links : [{href,label}]              -> external links (optional)
     body  : [{h, p?, points?, arch?, callout?, results?}]  -> page content
   =========================================================================== */

const PROJECTS = [
  /* ---------------------------------------------------------------------- */
  {
    slug:"logistics-platform",
    title:"Enterprise Logistics & Order Management Platform",
    tag:"Logistics platform",
    category:"Platform",
    year:"2025 – present",
    thumb:"LP",
    featured:true,
    lede:"A full-stack logistics platform for a major building-materials group — covering order management, delivery coordination, truck tracking, pricing, and billing across 15 microservices.",
    spec:[
      ["Role","Team Leader / Tech Lead"],
      ["Organisation","IT One (Accenture Thailand partner)"],
      ["Timeframe","Dec 2025 – present"],
      ["Team","Cross-functional, 80%+ remote"],
      ["Status","In production"]
    ],
    stack:["Java","Spring Boot","Angular 16","Bootstrap 5","PostgreSQL","AWS S3","AWS Batch","Kubernetes","OAuth 2.0","SAP S/4HANA","Claude Code"],
    links:[],
    body:[
      {
        h:"Overview",
        p:"The platform is the operational backbone for cement and building-materials distribution: customers place orders, the business schedules and dispatches deliveries, trucks are tracked in real time through a FleetLink integration, and the resulting movements feed pricing and billing. I lead the engineering team that designs, builds, and ships it."
      },
      {
        h:"The problem",
        p:"Order handling, delivery coordination, and fleet visibility lived in separate systems and manual processes. Operations teams had no single view of an order from placement to delivery confirmation, and billing depended on data that arrived late and inconsistently. The platform had to unify that flow without disrupting the enterprise systems — including SAP S/4HANA — that the business already runs on."
      },
      {
        h:"What I built and led",
        points:[
          "End-to-end delivery ownership across order management, delivery coordination, fleet and truck tracking (FleetLink), pricing, and billing workflows.",
          "Secure backend services and REST APIs in Java Spring Boot over PostgreSQL, protected with OAuth 2.0 and designed around clear domain boundaries.",
          "Integration with enterprise systems including SAP S/4HANA, so master data and transactional records stay consistent with the systems of record.",
          "Document and batch workloads on AWS S3 and AWS Batch, with services deployed on Kubernetes.",
          "The operational front end in Angular 16 and Bootstrap 5, built for the people who actually schedule trucks and chase deliveries.",
          "Technical leadership: architecture decisions, code review, QA strategy, deployment planning, and cross-functional coordination with business and enterprise teams.",
          "Mentoring and engineering standards — Clean Code, automated testing, and AI-assisted development with Claude Code and GitHub Copilot as a normal part of the workflow."
        ]
      },
      {
        h:"Architecture at a glance",
        arch:
`  Angular 16 SPA  ──HTTPS/OAuth 2.0──▶  API gateway
                                              │
                        ┌─────────────────────┼─────────────────────┐
                        ▼                     ▼                     ▼
                Order services        Delivery / fleet       Pricing & billing
                (Spring Boot)          (Spring Boot)          (Spring Boot)
                        │                     │                     │
                        └──────────┬──────────┴──────────┬──────────┘
                                   ▼                     ▼
                            PostgreSQL            AWS S3 / AWS Batch
                                   │
                                   ▼
                        Enterprise systems (SAP S/4HANA, FleetLink)

              All services containerised and deployed on Kubernetes`
      },
      {
        h:"Results",
        results:[
          ["15","microservices delivered to production go-live"],
          ["100%","UAT sign-off before cutover"],
          ["80%+","remote, cross-border team collaboration"]
        ],
        callout:"<strong>Leading while building.</strong> The most valuable thing I changed was not a service — it was making code review, automated testing, and AI-assisted development part of the team's default rhythm rather than an optional extra."
      }
    ]
  },

  /* ---------------------------------------------------------------------- */
  {
    slug:"k8s-rl-autoscaling",
    title:"Adaptive Kubernetes Autoscaling with Reinforcement Learning",
    tag:"RL autoscaling",
    category:"Research",
    year:"2024 – 2025",
    thumb:"RL",
    featured:true,
    lede:"Master's thesis: a reinforcement-learning agent that replaces threshold-based horizontal pod autoscaling in Kubernetes, tuned for machine-learning workloads — in collaboration with Fraunhofer ISST.",
    spec:[
      ["Role","Master's Thesis Researcher"],
      ["Institution","TU Chemnitz, Germany"],
      ["Collaboration","Fraunhofer ISST, Dortmund"],
      ["Timeframe","Jul 2024 – Mar 2025"],
      ["Result","M.Sc. awarded, GPA 1.6"]
    ],
    stack:["Kubernetes","PyTorch","Python","FastAPI","Flask","JMeter","Reinforcement learning","Docker"],
    links:[],
    repos:[
      { name:"master-thesis-auto-scaler", lang:"Python · PyTorch",
        url:"https://github.com/natnicha/master-thesis-auto-scaler",
        desc:"The main repository. Deep Q-Network agent implemented in PyTorch with the full learning procedure and an ADAM optimizer as default." },
      { name:"master-thesis-docker-manipulation-API", lang:"Python · Flask",
        url:"https://github.com/natnicha/master-thesis-docker-manipulation-API",
        desc:"Centralises communication between the RL agent and services on a Kind Kubernetes cluster, preventing circular dependencies in the architecture." },
      { name:"master-thesis-image-classification", lang:"Python · FastAPI",
        url:"https://github.com/natnicha/master-thesis-image-classification",
        desc:"The target workload under test — an image-classification inference API standing in for a real machine-learning service." }
    ],
    body:[
      {
        h:"Overview",
        p:"Kubernetes' default Horizontal Pod Autoscaler reacts to a threshold: CPU crosses a line, replicas change. That works well for steady web traffic and poorly for machine-learning workloads, where demand is bursty and the cost of a cold replica is high. This thesis asked whether a reinforcement-learning agent could learn a better scaling policy from the cluster's own behaviour."
      },
      {
        h:"Approach",
        points:[
          "Modelled autoscaling as a reinforcement-learning problem: cluster and workload metrics as state, replica-count changes as actions, and a reward balancing responsiveness against resource cost.",
          "Implemented and trained the agent in PyTorch against a live Kubernetes environment rather than a pure simulation.",
          "Built a Python control-plane API (Flask) between the RL agent and the Kubernetes services, deliberately breaking a circular dependency in the architecture — the agent observes, decides, and acts through one clean service boundary.",
          "Built the target workload as a FastAPI image-classification inference service, standing in for a real machine-learning application under load.",
          "Provisioned Kubernetes nodes and resource configurations to create a reproducible experimental environment.",
          "Drove the system with JMeter under varied load patterns — steady, bursty, and ramping — to compare the learned policy against the stock HPA.",
          "Designed test cases and automated tests for the APIs so experiment runs stayed reproducible.",
          "Collaborated with doctoral researchers at Fraunhofer-Institut für Software- und Systemtechnik (ISST) throughout."
        ]
      },
      {
        h:"Architecture at a glance",
        arch:
`     JMeter load generator
              │  (steady / bursty / ramping patterns)
              ▼
     ┌──────────────────────┐        metrics        ┌──────────────────┐
     │  Kind Kubernetes     │ ────────────────────▶ │  Control-plane   │
     │  FastAPI inference   │                       │  API (Flask)     │
     │  workload pods       │ ◀──── scale action ── │                  │
     └──────────────────────┘                       └────────┬─────────┘
                                                             │ state / reward
                                                             ▼
                                                    ┌──────────────────┐
                                                    │  RL agent        │
                                                    │  (PyTorch)       │
                                                    └──────────────────┘`
      },
      {
        h:"What I took from it",
        p:"Two things carried straight back into production work. First, treating an autoscaler as a policy problem rather than a threshold problem changes how you instrument a system — you start collecting the signals a decision actually needs. Second, putting a clean API between a research component and the infrastructure it controls is what made the experiments repeatable; it is the same boundary discipline that keeps microservices maintainable.",
        callout:"<strong>Research with a production accent.</strong> The agent ran against a real cluster through a real API, not a simulator — which meant every architectural shortcut showed up as an experiment that would not reproduce."
      }
    ]
  },

  /* ---------------------------------------------------------------------- */
  {
    slug:"search-data-platform",
    title:"Search-Data Processing & Search Platform",
    tag:"Search-data platform",
    category:"Full-stack",
    year:"2025",
    thumb:"SD",
    featured:true,
    lede:"A full-stack platform that scrapes, processes, and searches search-engine result data against user-defined keywords — built solo, from requirements to CI pipeline.",
    spec:[
      ["Role","Freelance Backend / Full-Stack Engineer"],
      ["Client","Independent engagement"],
      ["Timeframe","Aug 2025 – Sep 2025"],
      ["Team","Solo"],
      ["Status","Delivered"]
    ],
    stack:["Go","Gin","PostgreSQL","React","Vite","TypeScript","OAuth 2.0","GitHub Actions","Zero-Trust"],
    links:[],
    body:[
      {
        h:"Overview",
        p:"The client needed to track how a set of keywords surfaced across search engines over time, and to query the accumulated results. I owned the whole thing: requirements, architecture, backend, frontend, security, tests, and the delivery pipeline."
      },
      {
        h:"What I built",
        points:[
          "Requirements gathering and system architecture design before a line of code — including the data model for keyword sets, crawl runs, and results.",
          "A scalable Go backend with Gin exposing RESTful APIs over PostgreSQL, handling scraping, processing, and query workloads.",
          "A React + Vite + TypeScript front end for defining keyword sets, triggering runs, and searching results.",
          "Zero-Trust security throughout, with OAuth 2.0 protecting the application.",
          "A comprehensive CI pipeline: automated security scanning, code-coverage analysis, and AI-assisted code review on every change.",
          "Designed and implemented automated test cases across the API surface."
        ]
      },
      {
        h:"Why the CI mattered",
        p:"On a solo engagement there is no second reviewer. The pipeline had to be the reviewer — security scanning to catch dependency and code issues, coverage gates to stop untested paths landing, and AI-assisted review as a consistent second opinion on every diff. That combination is what let a single engineer ship something the client could trust in production.",
        callout:"<strong>Zero-Trust by default.</strong> OAuth 2.0 and explicit authorisation on every endpoint, rather than an implicit trust boundary that quietly becomes the security model."
      }
    ]
  },

  /* ---------------------------------------------------------------------- */
  {
    slug:"semantic-module-search",
    title:"Cross-Border University Module Search",
    tag:"Semantic search",
    category:"Full-stack",
    year:"2023 – 2024",
    thumb:"OWL",
    lede:"A centralised platform for university modules across European institutions, using OWL ontologies and machine learning to return semantically related results — not just keyword matches.",
    spec:[
      ["Role","Trainee — Master's Degree Internship"],
      ["Institution","TU Chemnitz, Germany"],
      ["Timeframe","Oct 2023 – Mar 2024"],
      ["Team","Developer team, English-speaking"],
      ["Outcome","Live demo pitched against competing teams"]
    ],
    stack:["Python","FastAPI","PostgreSQL","React","Vite","TypeScript","OWL","OWLready2","Scikit-learn"],
    links:[],
    repos:[
      { name:"BeAcross", lang:"Full-stack",
        url:"https://github.com/natnicha/BeAcross",
        desc:"The Across initiative platform — a single place to search modules offered across European cross-border universities." }
    ],
    body:[
      {
        h:"Overview",
        p:"Students looking for modules across European partner universities faced the usual problem: every institution describes the same subject differently. A keyword search for \"distributed systems\" misses a module called \"verteilte Systeme\" or \"cloud architecture\". The platform used OWL ontologies to model what modules are actually about, so a search returns semantically related results rather than string matches."
      },
      {
        h:"What I built",
        points:[
          "Full-stack engineering of the platform: React + Vite + TypeScript front end, Python/FastAPI RESTful APIs, PostgreSQL storage.",
          "Preprocessed OWL ontology module data and converted it into feature vectors with OWLready2.",
          "Modelled relationships between modules and retrieved related results using Scikit-learn.",
          "A comprehensive CI pipeline with automated security checks, code-coverage analysis, and AI-assisted code review.",
          "Designed and implemented automated test cases across the stack.",
          "Requirements gathering with stakeholders, then feature brainstorming and prioritisation with the developer team.",
          "Thorough code review for teammates — the fastest lever on both quality and team speed.",
          "Pitched a live demo of the application against competing teams."
        ]
      },
      {
        h:"The interesting part",
        p:"Turning an ontology into something a search box can use is a translation problem. OWLready2 gives you the formal structure; Scikit-learn gives you similarity. The work was in choosing a feature representation that preserved enough of the ontology's meaning to make the similarity scores defensible to a domain expert — a curriculum coordinator who knows perfectly well which modules are equivalent."
      }
    ]
  },

  /* ---------------------------------------------------------------------- */
  {
    slug:"mutual-fund-backend",
    title:"Mutual-Fund Investment Backend for a Leading E-Wallet",
    tag:"Fintech backend",
    category:"Platform",
    year:"2021 – 2022",
    thumb:"FIN",
    featured:true,
    lede:"Backend services powering a mutual-fund investment feature inside one of Thailand's leading e-wallets — built in Go on GKE, with 100% pair programming and TDD.",
    spec:[
      ["Role","Senior Software Developer"],
      ["Organisation","Ascend Money (Ascend Group)"],
      ["Timeframe","Dec 2021 – Dec 2022"],
      ["Team","Fully remote, agile"],
      ["Domain","Fintech / investments"]
    ],
    stack:["Go","Fiber","GKE","GCP","AWS","Jenkins","TDD","Pair programming","GitLab CI"],
    links:[],
    body:[
      {
        h:"Overview",
        p:"Adding regulated investment products to a consumer e-wallet means the backend has to be correct in ways a typical CRUD service does not. Orders touch real money, settlement timing matters, and the audit trail is not optional. I built backend services for the mutual-fund investment feature in Go with the Fiber framework."
      },
      {
        h:"What I did",
        points:[
          "Implemented backend services in Go and Fiber for the mutual-fund investment flow.",
          "Gathered and discussed requirements with the product team, then brainstormed features with the developer team.",
          "Employed Clean Code principles, Test-Driven Development, and 100% pair programming.",
          "Designed test cases spanning unit, smoke, and integration levels, and automated them.",
          "Ran services on Google Kubernetes Engine with data on Google Cloud Platform.",
          "Contributed to the migration of services from GCP to AWS, using Jenkins for continuous build, test, and deployment automation.",
          "Mentored junior developers — guiding project initiation and running regular 1:1 sessions.",
          "Raised code quality and team throughput through thorough peer code review.",
          "Delivered in a 100% remote environment with Agile/Jira and GitLab CI."
        ]
      },
      {
        h:"On 100% pair programming",
        p:"Pairing every hour of every day sounds expensive until you work in a domain where a defect is a financial incident. Two people on a transaction boundary catch the edge case that one person rationalises away. It also made mentoring structural rather than scheduled — juniors learned the domain by building it, not by being told about it afterwards.",
        callout:"<strong>Cloud migration in flight.</strong> Moving services from GCP to AWS while continuing to ship features is a discipline problem more than a technology one: keep the deployment path automated, and the migration becomes a series of small reversible steps."
      }
    ]
  },

  /* ---------------------------------------------------------------------- */
  {
    slug:"journi",
    title:"Journi — Cross-Platform Travel Planner",
    tag:"Journi",
    category:"Product",
    year:"2025",
    thumb:"JRN",
    featured:true,
    lede:"A personal project: a modern cross-platform web app that turns scattered travel notes into a structured, visual multi-day itinerary.",
    spec:[
      ["Role","Solo — design & engineering"],
      ["Type","Independent project"],
      ["Timeframe","Ongoing"],
      ["Status","Open source"],
      ["Repo","github.com/natnicha/journi-web"]
    ],
    stack:["React","Vite","TypeScript"],
    links:[],
    repos:[
      { name:"journi-web", lang:"TypeScript · React",
        url:"https://github.com/natnicha/journi-web",
        desc:"The full application — plan, organise, and visualise multi-day trips with destinations, activities, and notes." }
    ],
    body:[
      {
        h:"Overview",
        p:"Planning a trip usually ends up spread across a notes app, a map, a spreadsheet, and a browser with thirty tabs. Journi pulls that into one place: create a multi-day itinerary, then manage destinations, activities, and notes per day, with the whole trip visible at a glance."
      },
      {
        h:"What it does",
        points:[
          "Build multi-day itineraries with day-by-day structure.",
          "Manage the essentials per entry — destinations, activities, and free-form notes.",
          "Visualise the whole trip so gaps and over-packed days are obvious before you travel.",
          "Cross-platform by construction: a responsive web app rather than a native build per platform."
        ]
      },
      {
        h:"Why I built it",
        p:"Partly because I travel and wanted the tool. Partly because a personal project is where I get to make the frontend decisions I do not always own at work — component boundaries, state shape, and how much structure to impose on a user before it becomes a chore. React with Vite and TypeScript keeps the feedback loop fast enough that the app stays fun to extend."
      }
    ]
  },

  /* ---------------------------------------------------------------------- */
  {
    slug:"audio-evaluation",
    title:"Audio Evaluation & Classification Tooling",
    tag:"Audio evaluation",
    category:"Research",
    year:"2024",
    thumb:"AUD",
    lede:"Research tooling for Fraunhofer IIS: Python processing that classifies modified audio files against their originals, plus a web app that lets researchers listen to and judge the results.",
    spec:[
      ["Role","Research Assistant (Software Developer)"],
      ["Institution","Fraunhofer IIS, Germany"],
      ["Timeframe","Jul 2024 – Dec 2024"],
      ["Team","Audio and Media Technology"],
      ["Mode","100% remote, English-speaking"]
    ],
    stack:["Python","React","Node.js","Audio signal processing"],
    links:[],
    body:[
      {
        h:"Overview",
        p:"The Audio and Media Technology team needed to evaluate how audio files change after modification — and to do it at a scale where listening to every pair by hand was not viable. I built the processing pipeline that scored the files automatically, and the web application that made the remaining human judgement fast."
      },
      {
        h:"What I built",
        points:[
          "Python scripts implementing the team's research formula to process audio files and evaluate modified versions against their originals.",
          "A classification step producing comparable scores across the evaluation set.",
          "A web application presenting evaluation results with integrated playback modules, so a researcher can inspect a result and hear it in the same view.",
          "Front end built with React, Node.js, and the institute's internal component libraries.",
          "Requirements gathered directly from the researcher team, with features confirmed with stakeholders before build."
        ]
      },
      {
        h:"The impact",
        p:"The measurable win was workflow: automatic scoring narrowed the set that needed human attention, and putting playback next to the numbers removed the constant context-switch between a results file and an audio player. Accuracy improved for the same reason — the judgement happened with the evidence in front of the researcher.",
        callout:"<strong>Built for domain experts.</strong> The users were audio researchers, not software users. The interface had to fit how they already reasoned about the material rather than teaching them a new abstraction."
      }
    ]
  },

  /* ---------------------------------------------------------------------- */
  {
    slug:"pv-calculator",
    title:"Photovoltaic Generation Calculator",
    tag:"PV calculator",
    category:"Full-stack",
    year:"2023",
    thumb:"PV",
    lede:"A web application estimating solar electricity generation for a specific product and manufacturer, using real-time weather data and local site conditions.",
    spec:[
      ["Role","Student Software Developer"],
      ["Institution","TU Chemnitz, Germany"],
      ["Timeframe","Mar 2023 – Aug 2023"],
      ["Mode","English-speaking environment"],
      ["Status","Delivered"]
    ],
    stack:["Go","Gin","MongoDB","React","Vite","TypeScript","OAuth 2.0"],
    links:[],
    repos:[
      { name:"…photovoltaic-system-app", lang:"Frontend",
        url:"https://github.com/natnicha/database-web-techniques-photovoltaic-system-app",
        desc:"The web prototype: calculates output for a chosen manufacturer and product from current weather data and local conditions." },
      { name:"…photovoltaic-system-services", lang:"Go",
        url:"https://github.com/natnicha/database-web-techniques-photovoltaic-system-services",
        desc:"Backend services and RESTful APIs running the generation calculations." },
      { name:"…photovoltaic-system-batch", lang:"Python",
        url:"https://github.com/natnicha/database-web-techniques-photovoltaic-system-batch",
        desc:"Batch processing over the ingested weather and product datasets." },
      { name:"…photovoltaic-system-cron", lang:"Go",
        url:"https://github.com/natnicha/natnicha-database-web-techniques-photovoltaic-system-cron",
        desc:"Scheduled ingestion pulling third-party weather and conditions data into MongoDB." }
    ],
    body:[
      {
        h:"Overview",
        p:"Prospective solar customers want one number: how much electricity will this panel actually generate where I live? Answering it means combining manufacturer specifications with live weather data and local conditions — then presenting the result in a way a non-engineer trusts."
      },
      {
        h:"What I built",
        points:[
          "RESTful APIs in Go with the Gin framework to run the generation calculations.",
          "Integration of third-party weather and conditions services, with data ingested into MongoDB.",
          "A React + Vite + TypeScript front end for entering site details and reading the estimate.",
          "A Zero-Trust security model with OAuth 2.0 protecting the application.",
          "Requirements gathered from stakeholders, then broken down into a defined task set.",
          "Source management and CI pipelines on GitHub."
        ]
      },
      {
        h:"Design note",
        p:"The calculation is only as good as the data behind it, so the ingestion path mattered more than the arithmetic. Storing raw third-party responses in MongoDB before transformation meant a changed upstream format was a reprocessing job rather than lost data."
      }
    ]
  },

  /* ---------------------------------------------------------------------- */
  {
    slug:"gov-analytics-platform",
    title:"Government Analytics & BI Platform",
    tag:"Analytics platform",
    category:"Data & BI",
    year:"2019 – 2021",
    thumb:"BI",
    lede:"A data analytics and dashboard platform for an economic and financial government organisation — architecture, data pipelines, financial models, and the BI layer on top.",
    spec:[
      ["Role","Advisory Associate Manager"],
      ["Organisation","KPMG Phoomchai Business Advisory"],
      ["Timeframe","Jul 2019 – Nov 2021"],
      ["Client","Government (economic & financial)"],
      ["Scope","Architecture → delivery → training"]
    ],
    stack:["Python","MS SQL Server","Power BI","ETL","PowerShell","Stored procedures"],
    links:[],
    body:[
      {
        h:"Overview",
        p:"A government organisation in the economic and financial sector needed to move from periodic manual reporting to a platform its supervisors could interrogate directly. I led the technical solution: architecture, the models underneath it, the pipelines that fed it, and the enablement that made it stick after we left."
      },
      {
        h:"What I delivered",
        points:[
          "Solution architecture for the analytics and dashboard platform, plus the financial analysis models it computed.",
          "Scheduled Python scripts and APIs to scrape, process, and retrieve data from source systems.",
          "MS SQL stored procedures and views for efficient downstream processing.",
          "Interactive Power BI dashboards, delivered in partnership with a vendor, giving supervisors a direct view of the data.",
          "A high-efficiency ETL tool with PowerShell automation and MS SQL procedures, removing bottlenecks in internal data workflows.",
          "Requirements gathering and stakeholder discussions, with analysis handed to the development team.",
          "Training for end users and administrators on system usage and maintenance."
        ]
      },
      {
        h:"Beyond the platform",
        points:[
          "Partnered with the insurance team to design a new life insurance product under KYC compliance, and authored the BRD that guided technical development.",
          "Executed mystery shopping to assess the customer journey for that product.",
          "Delivered a Power BI enablement session for 10 colleagues, taking them through the full lifecycle from requirements gathering to solution delivery so they could build client dashboards independently."
        ],
        callout:"<strong>Consulting taught me the handover.</strong> A platform nobody can maintain after the engagement ends is a liability. Training the client's admins was as much of the deliverable as the code."
      }
    ]
  },

  /* ---------------------------------------------------------------------- */
  {
    slug:"ar-dictionary",
    title:"AR Children's Dictionary",
    tag:"AR edutainment",
    category:"Product",
    year:"2017 – 2019",
    thumb:"AR",
    lede:"Co-founded product: a printed children's dictionary that comes alive through a mobile AR app — 3D animated models triggered by the cards themselves.",
    spec:[
      ["Role","Co-founder"],
      ["Company","AllInCode, Thailand"],
      ["Timeframe","Sep 2017 – Jul 2019"],
      ["Scope","Product, engineering, packaging"],
      ["Type","Edutainment / consumer"]
    ],
    stack:["Unity","C#","Vuforia Engine SDK","Blender","3D animation","AR"],
    links:[],
    body:[
      {
        h:"Overview",
        p:"A physical card set plus a mobile app: point the phone at a card and the word becomes an animated 3D character. The goal was a learning product children actually want to pick up, where the printed object and the digital layer reinforce each other instead of competing."
      },
      {
        h:"What I did",
        points:[
          "Customer analysis with the LEAN canvas to validate who the product was for before building it.",
          "Defined and brainstormed product features with the development team.",
          "Developed the AR mobile application with Unity, C#, and the Vuforia Engine SDK.",
          "Created 3D cartoon models with animation in Blender and integrated them into the app.",
          "Designed the product packaging — the cards and box set — for market launch.",
          "Managed delivery with Agile methodology and GitHub."
        ]
      },
      {
        h:"What co-founding taught me",
        p:"Everything that is not code is still the product. Packaging design, unit economics, and who exactly buys a children's dictionary turned out to matter as much as marker-tracking performance. It is the clearest lesson I carry into tech leadership: the engineering is necessary, not sufficient."
      }
    ]
  }
];
