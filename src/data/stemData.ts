export interface StudentSpotlight {
  id: string;
  name: string;
  major: 'Computer Information Systems' | 'Mathematics' | 'Biology' | 'Business';
  gradYear: number;
  photo: string;
  photoPosition?: string;
  bio: string;
  leadership: string[];
  internships: string[];
  awards: string[];
  certifications: string[];
  achievements: string[];
  featured: boolean;
}

export interface StudentProject {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  team: string[];
  outcomes: string;
  demoUrl?: string;
  githubUrl?: string;
  demoText?: string;
  githubText?: string;
  image: string;
  featured: boolean;
}

export interface Competition {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date?: string;
  award: string;
  students: string[];
  image: string;
  topics?: string[];
  outcomes?: string;
  link?: string;
  category?: 'Hackathon' | 'Honors';
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  category: 'Milestone' | 'Internship' | 'Competition' | 'Event';
  image: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'Workshop' | 'Seminar' | 'Competition' | 'Networking';
}

export interface AcademicProgram {
  name: 'Computer Information Systems' | 'Mathematics' | 'Biology' | 'Business';
  slug: 'computer-information-systems' | 'mathematics' | 'biology' | 'business';
  overview: string;
  careers: string[];
  skills: string[];
  highlights: string[];
}

export const academicPrograms: AcademicProgram[] = [
  {
    name: 'Computer Information Systems',
    slug: 'computer-information-systems',
    overview: 'The Computer Information Systems (CIS) program equips students with the technical expertise and business acumen needed to design, develop, and manage complex information systems. From software engineering to cybersecurity, students learn to build solutions for modern enterprises.',
    careers: ['Software Engineer', 'Cybersecurity Analyst', 'Database Administrator', 'IT Project Manager', 'Systems Analyst'],
    skills: ['Python & Java Development', 'Web & Mobile Engineering', 'Database Management (SQL)', 'Network Security Systems', 'Agile Product Methodologies'],
    highlights: [
      'State-of-the-art network simulation labs.',
      'Annual student participation in national hackathons.',
      'Industry-standard certification prep integrated into coursework.'
    ]
  },
  {
    name: 'Mathematics',
    slug: 'mathematics',
    overview: 'The Mathematics program cultivates critical thinking, analytical reasoning, and rigorous problem-solving skills. Students explore theoretical structures and applied mathematics, preparing them for careers in data science, actuarial modeling, and finance.',
    careers: ['Data Scientist', 'Actuary', 'Quantitative Analyst', 'Operations Researcher', 'Cryptographer'],
    skills: ['Statistical Modeling', 'Linear Algebra & Calculus', 'Data Visualization (R/Python)', 'Predictive Analytics', 'Algorithmic Logic'],
    highlights: [
      'Undergraduate research opportunities in mathematical biology.',
      'Active preparation for actuarial board examinations.',
      'Colloquiums showcasing student proof formulations.'
    ]
  },
  {
    name: 'Biology',
    slug: 'biology',
    overview: 'The Biology program offers a comprehensive study of living systems, from cellular biology to global ecosystems. Combining laboratory research, field studies, and experimental science, this program prepares students for medical school, veterinary fields, and biotechnology careers.',
    careers: ['Medical Practitioner', 'Biotechnologist', 'Environmental Scientist', 'Pharmacologist', 'Clinical Researcher'],
    skills: ['Laboratory Assays & PCR', 'Genetic Sequence Analysis', 'Field Sampling & Ecology', 'Biomedical Ethics', 'Experimental Design'],
    highlights: [
      'Hands-on research in fully equipped molecular biology labs.',
      'Direct partnerships with regional medical networks for clinical shadowing.',
      'Co-authored research publications with department faculty.'
    ]
  },
  {
    name: 'Business',
    slug: 'business',
    overview: 'Bridging technical acumen with management strategy, the Business concentration within the LC STEM community prepares students for quantitative management, operations management, logistics, and data-driven corporate leadership.',
    careers: ['Business Intelligence Analyst', 'Operations Manager', 'Financial Analyst', 'Supply Chain Strategist', 'STEM Entrepreneur'],
    skills: ['Financial Analysis', 'Supply Chain Optimization', 'Market Data Analysis', 'Risk Management', 'Operations Strategy'],
    highlights: [
      'Annual business plan competition with seed funding opportunities.',
      'Mentorship network with STEM industry executives.',
      'Simulation labs modeling real-time corporate supply chain networks.'
    ]
  }
];

export const studentSpotlights: StudentSpotlight[] = [
  {
    id: '1',
    name: 'Jerome Adonis',
    major: 'Computer Information Systems',
    gradYear: 2026,
    photo: '/images/cis-student-success/jerome-adonis-aws-profile.jpeg',
    bio: 'Jerome Adonis has built a diverse technology and consulting background across three industry internships: as a Solutions Architect Intern at AWS, a Software Engineer at Bank of America, and an FSO Technology Consulting Intern at Ernst & Young LLP.',
    leadership: ['FSO Technology Consulting Intern at EY', 'AWS Student Advocate', 'SGA Academic Representative'],
    internships: ['AWS (Solutions Architect Intern)', 'Bank of America (Software Engineer Intern)', 'Ernst & Young LLP (FSO Tech Consulting Intern)'],
    awards: ['AWS Technical Excellence Award', 'Bank of America Scholar'],
    certifications: ['AWS Cloud Practitioner', 'AWS Solutions Architect - Associate'],
    achievements: [
      'Completed 3 high-profile technical internships with industry leaders.',
      'Designed and presented cloud scaling architecture diagrams for enterprise AWS workloads.'
    ],
    featured: true
  },
  {
    id: '2',
    name: 'Francis Boadu',
    major: 'Biology',
    gradYear: 2026,
    photo: '/images/biology-student-success/francis-boadu-duke-research.png',
    bio: 'Francis Boadu joined Duke University School of Medicine as an Undergraduate Student Researcher, conducting oncology research focused on CIC-DUX4 sarcoma. His experience includes mammalian cell culture and cell-based assays in a hybrid research environment.',
    leadership: ['Pre-Med Club Officer', 'Biology Lab Safety Officer', 'Research Group Coordinator'],
    internships: ['Duke University School of Medicine (Undergraduate Student Researcher)'],
    awards: ['Undergraduate Oncology Research Award', 'National Pre-Med Colloquium Poster Winner'],
    certifications: ['Mammalian Cell Culture Certification', 'NIH Biosafety Level 2 Protocol Training'],
    achievements: [
      'Conducted critical biological assays for sarcoma cell line investigations at Duke Medicine.',
      'Presented cancer research findings to an academic board of oncology researchers.'
    ],
    featured: true
  },
  {
    id: '3',
    name: 'Kamar Goudelock',
    major: 'Business',
    gradYear: 2027,
    photo: '/images/business-student-success/kamar-goudelock-wells-fargo-internship.jpeg',
    photoPosition: 'top',
    bio: 'Kamar Goudelock completed a summer internship with Wells Fargo as a Global Operations Control Management Intern. He applied data analytics and AI prompt development to improve processes and make information more accessible. During an Innovation Sprint, his team also advised a nonprofit on improving its website and supporting its community impact.',
    leadership: ['Business & Finance Club President', 'Innovation Sprint Team Captain'],
    internships: ['Wells Fargo (Global Operations Control Management Intern)'],
    awards: ['Wells Fargo Innovation Sprint Champion', 'STEM Business Leadership Award'],
    certifications: ['Agile Project Management foundations', 'Google Business Intelligence Certificate'],
    achievements: [
      'Built custom AI prompts and analytics pipelines to optimize operations controls at Wells Fargo.',
      'Led a consulting sprint that redesigned the community outreach workflow for a Salisbury non-profit.'
    ],
    featured: true
  },
  {
    id: '4',
    name: 'Sally Adenutsi',
    major: 'Mathematics',
    gradYear: 2026,
    photo: '/images/math-student-success/sally-adenutsi-profile.jpeg',
    bio: 'Sally Adenutsi contributed as a STEM Camp Mentor, guiding students in developing their academic and technical skills. She broadened her global perspective as a virtual Delegate at the World Bank Youth Summit and expanded her academic horizons by attending Cato University.',
    leadership: ['World Bank Youth Summit Delegate', 'STEM Camp Coordinator', 'Math Peer Mentor'],
    internships: ['STEM Camp (Lead Mathematics Mentor)'],
    awards: ['Global Youth Leadership Scholar', 'Cato University Travel Fellowship'],
    certifications: ['Advanced Computational Mathematics foundations', 'Mathematics Pedagogy Certificate'],
    achievements: [
      'Served as a delegate representing Livingstone College at the World Bank Youth Summit.',
      'Organized and mentored math and coding workshops for over 50 regional K-12 students.'
    ],
    featured: true
  },
  {
    id: '5',
    name: 'Robert Osei',
    major: 'Biology',
    gradYear: 2027,
    photo: '/images/biology-student-success/robert-osei-poe-center-internship.jpeg',
    bio: 'Robert Osei completed a two-month remote internship with the Poe Center for Health Education in North Carolina, gaining professional experience within a health-education organization.',
    leadership: ['Community Health Ambassador', 'Biology Club Secretary'],
    internships: ['Poe Center for Health Education (Health Education Intern)'],
    awards: ['Community Health Outreach Award', 'Livingstone Service Scholar'],
    certifications: ['HIPAA Professional Standards', 'Community Health Educator Certification'],
    achievements: [
      'Developed interactive health curriculum modules for remote public school outreach.',
      'Co-authored Robeson County health access data presentations for the Mastercard Data Challenge.'
    ],
    featured: false
  },
  {
    id: '6',
    name: 'Emmanuel Amponsah',
    major: 'Business',
    gradYear: 2026,
    photo: '/images/business-student-success/emmanuel-amponsah-business-profile.jpeg',
    bio: 'Emmanuel Amponsah gained experience in asset management and development through an internship with ANCHOR. He also served as an Equity Research Analyst with Orion Equity Research Group, building professional experience across investment research and asset-focused business operations.',
    leadership: ['Equity Research Group Lead', 'Finance Club Secretary'],
    internships: ['ANCHOR (Asset Management and Development Intern)', 'Orion Equity Research Group (Equity Research Analyst)'],
    awards: ['Outstanding Analyst Award', 'Dean\'s List Scholar'],
    certifications: ['Bloomberg Market Concepts', 'Financial Modeling & Valuation Analyst (FMVA)'],
    achievements: [
      'Conducted detailed asset valuation reports and equity analysis for regional portfolios.',
      'Presented market trend forecasts to senior investment managers at Orion.'
    ],
    featured: false
  },
  {
    id: '7',
    name: 'Ellis Dogbe-Gakpetor',
    major: 'Business',
    gradYear: 2027,
    photo: '/images/business-student-success/ellis-dogbe-gakpetor-accesspoint-profile.jpeg',
    bio: 'Ellis Dogbe-Gakpetor serves as a Finance Intern at AccessPoint Health Systems, supporting financial operations and analysis within a healthcare organization.',
    leadership: ['Business Administration SGA Rep', 'STEM Peer Tutor'],
    internships: ['AccessPoint Health Systems (Finance Intern)'],
    awards: ['Healthcare Finance Scholarship Recipient'],
    certifications: ['Advanced Excel for Financial Analysts', 'Healthcare Operations Foundations'],
    achievements: [
      'Analyzed healthcare cost spreadsheets to identify savings in operating budgets.',
      'Built financial tracking models for health systems operations.'
    ],
    featured: false
  },
  {
    id: '8',
    name: 'Jephter Ofori',
    major: 'Computer Information Systems',
    gradYear: 2026,
    photo: '/images/cis-student-success/jephter-ofori-syngenta-profile.jpeg',
    bio: 'Jephter Ofori gained industry experience at Syngenta as a Product Safety Digital and Data Intern, applying data and digital tools within a professional product safety environment.',
    leadership: ['CIS Student Developer Lead', 'Hackathon Mentor'],
    internships: ['Syngenta (Product Safety Digital & Data Intern)'],
    awards: ['Syngenta Digital Innovation Award', 'STEM Hackathon 1st Place Champion'],
    certifications: ['SQL Database Specialist', 'Python Data Science Certification (IBM)'],
    achievements: [
      'Automated product safety reporting pipelines at Syngenta using custom SQL and Python scripts.',
      'Won the WVSU MS-CC Hackathon for Air Quality sensor spoofing anomaly detection.'
    ],
    featured: false
  },
  {
    id: '9',
    name: 'Emmanuel Adrabo',
    major: 'Computer Information Systems',
    gradYear: 2026,
    photo: '/images/cis-student-success/emmanuel-adrabo-daimler-profile.jpeg',
    bio: 'Emmanuel Adrabo served as a Network Administrator Intern at Daimler Trucks North America (Mercedes-Benz), where he handled network troubleshooting and monitoring, provided user support, and assisted with switch and router support.',
    leadership: ['Livingstone Varsity Golf Team Captain', 'Network Lab Lead Assistant'],
    internships: ['Daimler Trucks North America (Network Administrator Intern)'],
    awards: ['Daimler Technical Service Scholar', 'CIAA Scholar-Athlete of the Year'],
    certifications: ['CompTIA Network+', 'Cisco CCNA Prep Certificate'],
    achievements: [
      'Managed network switch configuring and router debugging for enterprise truck manufacturing centers.',
      'Maintained 99.9% network uptime monitoring logs during his internship term.'
    ],
    featured: false
  },
  {
    id: '10',
    name: 'Kuwa-Salama Mbetwa',
    major: 'Computer Information Systems',
    gradYear: 2026,
    photo: '/images/cis-student-success/kuwa-salama-mbetwa-mathnasium-profile.jpeg',
    bio: 'Kuwa-Salama Mbetwa serves as a STEM Education and Technology Associate at Mathnasium in Seattle, WA, combining technical knowledge with instruction to help students build math and STEM skills.',
    leadership: ['Women in CIS Representative', 'Mathnasium Associate Lead'],
    internships: ['Mathnasium Seattle (STEM Education & Tech Associate)'],
    awards: ['Livingstone Community Educator Award'],
    certifications: ['STEM Pedagogy Certificate', 'Introductory Python Instructor'],
    achievements: [
      'Designed a localized mathematics curriculum teaching computational concepts to children.',
      'Instructed over 60 students in logic puzzles, math models, and coding fundamentals.'
    ],
    featured: false
  },
  {
    id: '11',
    name: 'Joel Thompson',
    major: 'Computer Information Systems',
    gradYear: 2027,
    photo: '/images/cis-student-success/joel-thompson-selfhelp-creditunion.jpeg',
    bio: 'Joel Thompson serves as a Community Engagement Analyst Intern with Self-Help Credit Union, applying analytical skills to support community-focused financial initiatives.',
    leadership: ['SGA Senator', 'STEM Peer Mentor'],
    internships: ['Self-Help Credit Union (Community Engagement Analyst Intern)'],
    awards: ['Community Finance Initiative Scholar'],
    certifications: ['Tableau Data Analyst', 'Community Development Finance Certificate'],
    achievements: [
      'Created maps and charts tracing credit distribution trends in underserved urban districts.',
      'Prepared detailed demographic studies and analytical briefings for credit union executives.'
    ],
    featured: false
  },
  {
    id: '12',
    name: 'Patricia Naigaga',
    major: 'Biology',
    gradYear: 2026,
    photo: '/images/biology-student-success/patricia-naigaga-profile.jpeg',
    bio: 'Patricia Naigaga completed a Pharmacy Technician Internship at Walgreens, gaining hands-on experience in pharmaceutical dispensing, prescription processing, inventory management, and patient care coordination.',
    leadership: ['Pre-Med Society VP', 'Livingstone Health Liaison'],
    internships: ['Walgreens (Pharmacy Technician Intern)'],
    awards: ['Walgreens Outstanding Customer Service Intern'],
    certifications: ['Certified Pharmacy Technician (CPhT)', 'Basic Life Support (BLS)'],
    achievements: [
      'Managed prescription logistics and inventory controls at a high-volume Walgreens pharmacy.',
      'Coordinated care logs for seniors and provided crucial translation support for incoming patients.'
    ],
    featured: false
  },
  {
    id: '13',
    name: 'Naomi Nuhamin Bullo',
    major: 'Biology',
    gradYear: 2026,
    photo: '/images/biology-student-success/naomi-nuhamin-bullo-profile.jpeg',
    bio: 'Naomi Nuhamin Bullo built a diverse portfolio of biology-related experience across research and clinical settings, serving as a Davidson College Research Fellow, Atrium Health Summer Intern, and Registered Behavioral Technician at Above and Beyond.',
    leadership: ['Neurodevelopmental Support Volunteer Lead', 'Biology Peer Mentor'],
    internships: ['Davidson College (Research Fellow)', 'Atrium Health (Summer Intern)', 'Above and Beyond (Registered Behavioral Technician)'],
    awards: ['Davidson College Research Fellowship', 'Atrium Health Summer Fellow Award'],
    certifications: ['Registered Behavioral Technician (RBT)', 'Biomedical Research Ethics Certificate'],
    achievements: [
      'Conducted clinical support studies for children with neurological developmental needs.',
      'Drafted clinical observation reports during healthcare operations research at Atrium Health.'
    ],
    featured: false
  },
  {
    id: '14',
    name: 'Darryl Fisher',
    major: 'Biology',
    gradYear: 2027,
    photo: '/images/biology-student-success/darryl-fisher-syngenta-internship.jpeg',
    bio: 'Darryl Fisher gained industry experience at Syngenta as a Product Safety Lab Operations Intern, contributing within a professional laboratory operations environment.',
    leadership: ['Department Safety Monitor', 'Beta Beta Beta Biological Honors Society Rep'],
    internships: ['Syngenta (Product Safety Lab Operations Intern)'],
    awards: ['Syngenta Lab Excellence Scholar'],
    certifications: ['OSHA Laboratory Safety Standards', 'GLP (Good Laboratory Practices) Certificate'],
    achievements: [
      'Oversaw chemical inventories and lab safety audit compliance lists for Syngenta research teams.',
      'Maintained biological sample registries and prepared cell assays under department guidance.'
    ],
    featured: false
  },
  {
    id: '15',
    name: 'Francis Suapim',
    major: 'Mathematics',
    gradYear: 2026,
    photo: '/images/math-student-success/francis-suapim-profile.png',
    bio: 'Francis Suapim was selected to participate in the Advanced Computing Student Collaborative (ACSC) at Chaminade University of Honolulu, Hawaii. The program focused on advanced computing, data science, and AI for societal impact. He conducted research on structural vulnerability among MSMEs in Ghana.',
    leadership: ['Math Club President', 'Advanced Computing Peer Tutor'],
    internships: ['Chaminade University of Honolulu (ACSC Research Fellow)'],
    awards: ['ACSC Fellowship Recipient', 'Mathematics Academic Excellence Scholarship'],
    certifications: ['ACSC Advanced Computing Certificate', 'Python for Data Analysis (IBM)'],
    achievements: [
      'Analyzed economic vulnerability indices for 200+ Ghanaian small businesses using R and Python.',
      'Presented structural vulnerability models to academic judges in Honolulu, Hawaii.'
    ],
    featured: false
  }
];

export const studentProjects: StudentProject[] = [
  {
    id: '1',
    title: 'BlueBear Smart Transit App',
    description: 'A comprehensive campus navigation and bus tracking application designed specifically for the campus community. The system integrates real-time GPS telemetry from campus shuttles and provides route optimizations, ride booking for evening security escorts, and live delay notifications.',
    technologies: ['Next.js', 'React Native', 'Node.js', 'MongoDB', 'Mapbox API', 'WebSockets'],
    team: ['Jerome Adonis (CIS)', 'Jephter Ofori (CIS)', 'Kamar Goudelock (Business)'],
    outcomes: 'Successfully piloted with 250+ active students during the spring semester. Reduced shuttle wait times by an average of 4.2 minutes and increased evening escort scheduling efficiency by 30%.',
    demoUrl: 'https://bluebear-transit.livingstone.edu',
    githubUrl: 'https://github.com/livingstone-stem/bluebear-transit',
    image: '/images/cis-student-success/jerome-adonis-aws-profile.jpeg',
    featured: true
  },
  {
    id: '2',
    title: 'Bio-Remediation Water Assayer',
    description: 'A hardware-software hybrid IoT device designed to monitor river basin water quality. Using cellular micro-sensors, the device samples pH, turbidity, microplastic density, and oxygenation levels, uploading the telemetry data directly to an open-source research dashboard.',
    technologies: ['Raspberry Pi', 'Python', 'React', 'Tailwind CSS', 'InfluxDB', 'LoRaWAN'],
    team: ['Francis Boadu (Biology)', 'Sally Adenutsi (Mathematics)'],
    outcomes: 'Deployed three sensor buoys in the Yadkin River basin. Telemetry is used by the EPA regional office for watershed reports. The project won first prize in the Statewide Environmental Design Competition.',
    githubUrl: 'https://github.com/livingstone-stem/river-assayer-iot',
    image: '/images/biology-student-success/francis-boadu-duke-research.png',
    featured: true
  },
  {
    id: '3',
    title: 'OptiWarehouse Supply Chain Engine',
    description: 'An AI-driven warehouse optimization model that simulates stock flow and predicts inventory bottlenecks using historic seasonal sales records. The model suggests shelf layouts to minimize picking times.',
    technologies: ['Python (pandas/NumPy)', 'TensorFlow', 'TypeScript', 'Next.js', 'PostgreSQL'],
    team: ['Emmanuel Amponsah (Business)', 'Francis Suapim (Mathematics)'],
    outcomes: 'Deployed prototype with a regional retail supplier, yielding a 14% improvement in warehouse order-picking speeds and preventing stockouts on high-demand seasonal items.',
    demoUrl: 'https://optiwarehouse-demo.livingstone.edu',
    githubUrl: 'https://github.com/livingstone-stem/optiwarehouse',
    image: '/images/business-student-success/emmanuel-amponsah-business-profile.jpeg',
    featured: false
  },
  {
    id: '4',
    title: 'Student Success Center Digital Timesheet',
    description: 'A digital timesheet system designed to replace paper-based hour tracking for Student Success Center employees. It automatically calculates daily, weekly, and monthly hours, validates entries, supports supervisor and payroll approval, and generates downloadable PDF timesheets.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jsPDF', 'Vercel'],
    team: ['Aïda Garba (Computer Information Systems)'],
    outcomes: 'Developed and deployed a responsive prototype that simplifies employee hour tracking, reduces manual calculations, and creates consistent, payroll-ready timesheets. The system includes automatic hour totals, entry validation, signature sections, and PDF export.',
    demoUrl: 'https://digital-timesheet-fawn.vercel.app/',
    githubUrl: 'https://github.com/Aidarag/lc-stem-website',
    image: '/images/cis-student-success/im-aida-garba-profile.jpeg',
    featured: false
  },
  {
    id: '5',
    title: 'Structural Vulnerability Among MSMEs in Ghana',
    subtitle: 'Advanced Computing Student Collaborative (ACSC) — Honolulu, Hawaii',
    description: 'A research project examining structural vulnerability among micro, small, and medium enterprises in Ghana. Through data analysis and visualization, the study explored the factors that make businesses more vulnerable and highlighted patterns affecting their stability and resilience.',
    technologies: ['Python (Pandas/NumPy)', 'Matplotlib & Seaborn', 'Jupyter Notebooks', 'Data Analysis', 'Data Visualization'],
    team: ['Francis Suapim (Computer Information Systems)'],
    outcomes: 'Selected to participate in the Advanced Computing Student Collaborative, a research program focused on advanced computing, data science, and AI for societal impact. Completed the research project and presented the findings during the program’s final presentation.',
    demoUrl: '#',
    githubUrl: '#',
    demoText: 'View Presentation',
    githubText: 'View Research',
    image: '/images/math-student-success/francis-suapim-acsc-presentation.png',
    featured: false
  },
  {
    id: '6',
    title: 'Shalom Recovery AI',
    subtitle: 'Healthcare Innovation Sprint — June 2026',
    description: 'An AI-powered postoperative care assistant designed to support patients throughout recovery. The solution helps patients follow care instructions, monitor their recovery, and identify concerning symptoms that may require medical attention.',
    technologies: ['Artificial Intelligence', 'Product Design', 'Healthcare Technology', 'Next.js', 'TypeScript', 'Gemini API', 'Vercel'],
    team: ['Aïda Garba — AI Product Lead (Computer Information Systems)'],
    outcomes: 'Awarded 2nd Place in the Healthcare Innovation Sprint. The project was developed and presented as a patient-centered solution for making postoperative recovery more accessible, organized, and responsive.',
    demoUrl: '#',
    demoText: 'View Project',
    image: '/images/cis-student-success/shalom-recovery-ai.png',
    featured: false
  }
];

export const competitions: Competition[] = [
  {
    id: '1',
    title: 'CIAA STEM Hackathon',
    subtitle: 'Celebrating Regional Development Excellence',
    description: 'The LC STEM team went head-to-head with 12 universities in a 36-hour sprint to build AI-driven solutions addressing clean energy bottlenecks. Our team designed a community solar share platform using Next.js and predictive load modeling.',
    date: 'February 2026',
    award: '1st Place Overall Champion',
    students: ['Jerome Adonis', 'Jephter Ofori', 'Kamar Goudelock'],
    image: '/images/cis-student-success/jerome-adonis-aws-profile.jpeg',
    topics: ['AI Load Modeling', 'Next.js', 'Clean Energy', 'Predictive Analytics'],
    outcomes: 'Secured 1st Place out of 12 regional university teams in a 36-hour sprint, developing a prototype community solar sharing platform.',
    link: 'https://ciaa.com/hackathon'
  },
  {
    id: '2',
    title: 'National Pre-Med Research Symposium',
    subtitle: 'Showcasing Undergraduate Biological Discoveries',
    description: 'Francis Boadu presented his co-authored research paper on gene-editing pathways for cancer cell regulation before an academic board of researchers. The presentation focused on targeted cellular delivery systems.',
    date: 'November 2025',
    award: 'Outstanding Undergraduate Presentation Award',
    students: ['Francis Boadu'],
    image: '/images/biology-student-success/francis-boadu-duke-research.png',
    topics: ['Gene Editing', 'Oncology', 'Cellular Biology', 'Targeted Delivery'],
    outcomes: 'Awarded Outstanding Undergraduate Presentation honors among 50+ national research papers; co-authored publication featured in Journal of Student Research.',
    link: 'https://symposium.premed-research.org'
  },
  {
    id: '3',
    title: 'Carolinas Data Science Bowl',
    subtitle: 'Solving Urban Planning Bottlenecks',
    description: 'LC Mathematics students developed a predictive model to map food deserts in Salisbury and outline optimal community garden sites based on census income, transit, and soil quality parameters.',
    date: 'April 2026',
    award: 'Best Social Impact Solution Award',
    students: ['Sally Adenutsi', 'Francis Suapim'],
    image: '/images/math-student-success/sally-adenutsi-profile.jpeg',
    topics: ['Data Modeling', 'GIS Analysis', 'Python', 'Urban Planning'],
    outcomes: 'Recognized with the Best Social Impact Solution Award. Proposed garden sites are currently under review with the Salisbury City Council.',
    link: 'https://datasciencebowl.org'
  },
  {
    id: '4',
    title: 'Sensor Spoofing Detection for PurpleAir Air Quality Networks',
    subtitle: 'First Place, MS-CC Hackathon at West Virginia State University',
    description: 'A Python based trust and stress scoring model that uses statistical deviation analysis to detect spoofed sensors in PurpleAir air quality networks. Awarded first place at the MS-CC Hackathon at West Virginia State University.',
    date: 'April 2026',
    award: '1st Place Winner',
    students: ['Cephas Osei Bonsu', 'Prosper Nasangma', 'Amos Abdulai', 'Michael Atayi'],
    image: '/images/achievements/ms-cc-hackathon-2026-team.jpeg',
    topics: ['Python', 'Statistical Deviation Analysis', 'Cyber Physical Systems Security', 'Anomaly Detection', 'IoT Sensor Networks'],
    outcomes: 'Placed first in the cyber physical systems security track at the MS-CC Hackathon, hosted by the Minority Serving Cyberinfrastructure Consortium at West Virginia State University.',
    category: 'Hackathon'
  },
  {
    id: '5',
    title: 'Bringing the Clinic to the House',
    subtitle: 'Selected from 106 HBCU Teams, 2026 Mastercard Data Challenge',
    description: 'A data driven healthcare access solution for Robeson County, North Carolina, developed for the 2026 Mastercard Data Challenge after our team was selected from a field of 106 HBCU applicants.',
    date: '2026',
    award: 'Selected from 106 HBCU Teams',
    students: ['Robert Osei', 'Amos Abdulai', 'Aida Garbia', 'Swetaskhi Nanda'],
    image: '/images/achievements/mastercard-data-challenge-2026-team.jpeg',
    topics: ['Healthcare Access', 'Data Analysis', 'Robeson County, NC', 'Community Health'],
    outcomes: 'Produced for the 2026 Mastercard Data Challenge, hosted by the AUC Data Science Initiative, where the Livingstone College team was one of those selected from 106 competing HBCU teams.',
    category: 'Honors'
  }
];

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'LC STEM Students Win Big at Microsoft Hackathon',
    date: 'April 15, 2026',
    summary: 'A team of Computer Information Systems majors clinched the first-place trophy at the Microsoft HBCU Hackathon by designing a next-gen disaster communications router.',
    content: 'A team of Computer Information Systems majors clinched the first-place trophy at the Microsoft HBCU Hackathon in Charlotte, North Carolina. Facing competition from over twenty prominent HBCUs, the LC STEM team built "NetBeacon", a hardware-software solution enabling emergency communication during power grid failure.\n\nThe team, led by Jerome Adonis, utilized low-power Bluetooth mesh networks and Next.js to deploy a lightweight routing dashboard. In addition to a $10,000 cash prize, Microsoft offered full-time internship placements to all three team members.',
    category: 'Competition',
    image: '/images/cis-student-success/jerome-adonis-aws-profile.jpeg'
  },
  {
    id: '2',
    title: 'Senior Biology Major Francis Boadu Appointed Duke Research Scholar',
    date: 'March 20, 2026',
    summary: 'Francis Boadu has been selected for a prestigious research fellowship at Duke University School of Medicine to support his cancer genetics investigations.',
    content: 'Senior Biology major Francis Boadu has been selected to join the Duke University School of Medicine research collaboration. This highly competitive program provides student researchers hands-on access to advanced clinical oncology research operations.\n\nFrancis, who has specialized in molecular biology and mammalian cell culture, plans to explore gene-editing pathways for cancer cell regulation. "Our department research labs gave me the keys to explore complex biological hypotheses," said Francis.',
    category: 'Milestone',
    image: '/images/biology-student-success/francis-boadu-duke-research.png'
  },
  {
    id: '3',
    title: 'Summer Internship Placements Break Department Records',
    date: 'May 2, 2026',
    summary: 'LC STEM student community reports that 60% of upperclassmen have secured summer internships at top-tier firms including Google, Microsoft, and Novartis.',
    content: 'The LC STEM student community is proud to announce a record-breaking year for student placement. As of May, 60% of junior and senior majors have secured technical summer internships at leading companies and national research labs.\n\nStudents will be working in roles ranging from Software Engineering to Actuarial Risk Analysis and Oncology Research. "Our focus on hands-on project building and professional certification prep is directly translating into high-demand internship offers," stated Dr. Sarah Jenkins, Community Mentor.',
    category: 'Internship',
    image: '/images/business-student-success/kamar-goudelock-wells-fargo-internship.jpeg'
  }
];

export const upcomingEvents: EventItem[] = [
  {
    id: '1',
    title: 'AI & Data Science Workshop',
    date: 'September 12, 2026',
    time: '2:00 PM - 4:00 PM',
    location: 'Duncan Science Building, Room 204',
    description: 'Learn the fundamentals of machine learning modeling using Python and scikit-learn. Bring your laptop; lunch will be provided.',
    category: 'Workshop'
  },
  {
    id: '2',
    title: 'STEM Career Networking Dinner',
    date: 'September 28, 2026',
    time: '6:00 PM - 8:30 PM',
    location: 'Student Center Ballroom',
    description: 'An exclusive networking event connecting STEM students with corporate recruiters from Google, FedEx, Novartis, and Duke Energy. Business professional attire required.',
    category: 'Networking'
  },
  {
    id: '3',
    title: 'Annual LC STEM Hackathon',
    date: 'October 16-17, 2026',
    time: '9:00 AM (Friday) - 6:00 PM (Saturday)',
    location: 'STEM Innovation Center',
    description: 'A 24-hour team-based competition to design, build, and pitch software solving campus sustainability bottlenecks. Cash prizes and internship interviews for winners.',
    category: 'Competition'
  },
  {
    id: '4',
    title: 'Undergraduate Research Colloquium',
    date: 'November 4, 2026',
    time: '1:00 PM - 5:00 PM',
    location: 'Duncan Science Building Lecture Hall',
    description: 'STEM students present their independent research projects, laboratory discoveries, and mathematical proofs before faculty and peers.',
    category: 'Seminar'
  }
];
