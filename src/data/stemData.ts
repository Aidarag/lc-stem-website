export interface StudentSpotlight {
  id: string;
  name: string;
  major: 'Computer Information Systems' | 'Mathematics' | 'Biology' | 'Business';
  gradYear: number;
  photo: string;
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
  description: string;
  technologies: string[];
  team: string[];
  outcomes: string;
  demoUrl?: string;
  githubUrl?: string;
  image: string;
  featured: boolean;
}

export interface Competition {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  award: string;
  students: string[];
  image: string;
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
  overview: string;
  careers: string[];
  skills: string[];
  highlights: string[];
}

export const academicPrograms: AcademicProgram[] = [
  {
    name: 'Computer Information Systems',
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
    overview: 'The Mathematics program cultivates critical thinking, analytical reasoning, and rigorous problem-solving skills. Students explore theoretical structures and applied mathematics, preparing them for careers in data science, actuarial modeling, finance, and cryptography.',
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
    overview: 'Bridging technical acumen with management strategy, the Business concentration within the STEM department prepares students for quantitative management, operations management, logistics, and data-driven corporate leadership.',
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
    name: 'Marcus Vance',
    major: 'Computer Information Systems',
    gradYear: 2027,
    photo: '/images/student-showcase/student1.jpeg',
    bio: 'Marcus is a passionate developer dedicated to building secure, accessible web technologies. After joining the Livingstone STEM department, he co-founded the student developer club and has served as lead mentor for incoming freshmen. His research focuses on blockchain architectures for digital credentialing.',
    leadership: ['Co-Founder of Student Developer Alliance', 'STEM Department Tutor', 'Resident Advisor'],
    internships: ['Microsoft (Software Engineering Intern)', 'Vercel (Frontend Dev Intern)'],
    awards: ['Livingstone STEM Scholar of the Year (2025)', 'First Place, Black Enterprise Hackathon'],
    certifications: ['AWS Cloud Practitioner', 'CompTIA Security+'],
    achievements: [
      'Built and deployed the Livingstone STEM Dev Alliance student portal.',
      'Presented research paper on decentralized ledger security at the National Black Data Processing Associates (BDPA) conference.'
    ],
    featured: true
  },
  {
    id: '2',
    name: 'Aaliyah Jones',
    major: 'Biology',
    gradYear: 2026,
    photo: '/images/student-showcase/student2.jpeg',
    bio: 'Aaliyah specializes in genetics and molecular biology. She has completed two summer research fellowships at UNC Chapel Hill and plans to pursue an MD-PhD in oncology. Aaliyah is also a champion track athlete and leads community health awareness campaigns in Salisbury.',
    leadership: ['Vice President of Pre-Med Club', 'Livingstone Health Ambassadors Coordinator', 'STEM Peer Mentor'],
    internships: ['UNC Lineberger Comprehensive Cancer Center (Fellow)', 'Novartis (Biotech Research Intern)'],
    awards: ['NSF Research Fellowship Recipient', 'CIAA Scholar-Athlete of the Year (2025)'],
    certifications: ['Clinical Laboratory Assistant (CLA)', 'First Aid & CPR Coordinator'],
    achievements: [
      'Co-authored a paper on gene-editing pathways in cancer cell research published in the Journal of Student Research.',
      'Spearheaded a campus-wide free health-screening initiative servicing 350+ community members.'
    ],
    featured: true
  },
  {
    id: '3',
    name: 'Tariq Simmons',
    major: 'Mathematics',
    gradYear: 2027,
    photo: '/images/student-showcase/student3.jpeg',
    bio: 'Tariq is fascinated by data science, machine learning, and its intersections with social equity. He enjoys building mathematical models to predict and mitigate urban resource bottlenecks. Tariq is an active chess competitor and organizes youth coding workshops.',
    leadership: ['Captain of Livingstone Chess Team', 'Salisbury Youth Coding Mentor'],
    internships: ['Google (Data Science & Analytics Intern)', 'Oak Ridge National Laboratory (Computing Intern)'],
    awards: ['Thurgood Marshall College Fund Scholar', 'Goldman Sachs Math Excellence Award'],
    certifications: ['Google Data Analytics Professional Certificate', 'Python for Data Science (IBM)'],
    achievements: [
      'Developed a predictive routing algorithm that optimized campus transit schedules, saving 15% in operational emissions.',
      'Competed in the Harvard College Data Science Hackathon, placing in the top 5% nationally.'
    ],
    featured: true
  },
  {
    id: '4',
    name: 'Maya Lin',
    major: 'Business',
    gradYear: 2026,
    photo: '/images/student-showcase/student4.jpeg',
    bio: 'Maya combines business logic with STEM innovation to design optimized supply chains. She has worked on consulting projects with local retail systems to introduce digital warehouse management. Maya hopes to start her own eco-friendly logistics enterprise.',
    leadership: ['President of Livingstone Entrepreneurship Club', 'Student Senator'],
    internships: ['FedEx Supply Chain (Logistics Intern)', 'Deloitte (Strategic Advisory Intern)'],
    awards: ['Dean\'s List (All Semesters)', 'National Black MBA Association Undergrad Scholar'],
    certifications: ['Lean Six Sigma Yellow Belt', 'Agile Scrum Master (ASM)'],
    achievements: [
      'Redesigned the logistics flow for a local food pantry, boosting distribution capacity by 22% during peak holidays.',
      'Won the Livingstone College Business Pitch Competition with a zero-waste packaging model.'
    ],
    featured: false
  },
  {
    id: '5',
    name: 'Devin Carter',
    major: 'Computer Information Systems',
    gradYear: 2028,
    photo: '/images/student-showcase/student5.jpeg',
    bio: 'Devin is a freshman prodigy who built his first mobile app in middle school. Now studying CIS, he focus on mobile architecture and natural language processing. In his first semester, Devin won the regional collegiate hackathon by designing an AI-driven disaster relief router.',
    leadership: ['CIS Freshman Representative', 'Hackathon Team Captain'],
    internships: ['IBM (AI Dev Apprentice - Summer Incoming)'],
    awards: ['Salisbury Regional Hackathon Grand Prize Winner', 'STEM Emerging Leader Scholarship'],
    certifications: ['Meta iOS Developer Certificate'],
    achievements: [
      'Designed "ResQLink", a localized peer-to-peer communications app that works without internet during power outages.',
      'Built a custom chat assistant for the Livingstone library to catalog historical archives.'
    ],
    featured: false
  },
  {
    id: '6',
    name: 'Gabriella Patel',
    major: 'Biology',
    gradYear: 2027,
    photo: '/images/student-showcase/student6.jpeg',
    bio: 'Gabriella focuses on environmental science and cellular botany. She conducts field studies along regional river basins to measure microplastic concentrations. Gabriella is an advocate for eco-conscious urban developments.',
    leadership: ['Eco-STEM Club President', 'Salisbury River Watch Volunteer Lead'],
    internships: ['US Environmental Protection Agency (EPA Research Fellow)'],
    awards: ['Udall Scholar nominee', 'Livingstone Green Innovation Grant recipient'],
    certifications: ['Water Quality Assessor certificate'],
    achievements: [
      'Mapped and cataloged microplastic accumulation sites across a 15-mile stretch of the Yadkin River basin.',
      'Presented environmental research at the North Carolina Academy of Science Conference.'
    ],
    featured: false
  },
  {
    id: '7',
    name: 'Kevin Zhao',
    major: 'Mathematics',
    gradYear: 2026,
    photo: '/images/student-showcase/student7.jpeg',
    bio: 'Kevin is an actuarial science focus student who loves statistical modeling and probability theory. He has already passed the first two professional actuarial exams (P & FM) and acts as an assistant teacher for advanced statistics classes.',
    leadership: ['President of Math Club', 'Teaching Assistant - Applied Statistics'],
    internships: ['Prudential Financial (Actuarial Intern)', 'Allstate (Risk Analysis Intern)'],
    awards: ['Society of Actuaries Undergrad Scholar', 'STEM Academic Excellence Award'],
    certifications: ['Passed SOA Exam P (Probability)', 'Passed SOA Exam FM (Financial Mathematics)'],
    achievements: [
      'Created an open-source statistical library in R used by students to model historical weather insurance payouts.',
      'Organized the first campus-wide math modeling bowl with 8 participating universities.'
    ],
    featured: false
  },
  {
    id: '8',
    name: 'Sophia Ross',
    major: 'Business',
    gradYear: 2027,
    photo: '/images/student-showcase/student8.jpeg',
    bio: 'Sophia is a quantitative business student specializing in market analytics. She works with local Salisbury small businesses to implement data-driven pricing models and digital marketing funnels.',
    leadership: ['STEM Women in Leadership Secretary', 'TMCF Campus Ambassador'],
    internships: ['Target Corporate (Quantitative Retail Intern)', 'PwC (Audit & Analytics Intern)'],
    awards: ['Livingstone Leadership Scholar', 'Salisbury Business Council Scholarship'],
    certifications: ['Tableau Desktop Specialist', 'Google Analytics Expert Certificate'],
    achievements: [
      'Consulted for 3 local minority-owned businesses, resulting in a 35% average increase in online conversions.',
      'Organized the STEM Career Fair prep event, helping 120+ students refine their digital portfolios.'
    ],
    featured: false
  }
];

export const studentProjects: StudentProject[] = [
  {
    id: '1',
    title: 'BlueBear Smart Transit App',
    description: 'A comprehensive campus navigation and bus tracking application designed specifically for Livingstone College. The system integrates real-time GPS telemetry from campus shuttles and provides route optimizations, ride booking for evening security escorts, and live delay notifications.',
    technologies: ['Next.js', 'React Native', 'Node.js', 'MongoDB', 'Mapbox API', 'WebSockets'],
    team: ['Marcus Vance (CIS)', 'Devin Carter (CIS)', 'Sophia Ross (Business)'],
    outcomes: 'Successfully piloted with 250+ active students during the spring semester. Reduced shuttle wait times by an average of 4.2 minutes and increased evening escort scheduling efficiency by 30%.',
    demoUrl: 'https://bluebear-transit.livingstone.edu',
    githubUrl: 'https://github.com/livingstone-stem/bluebear-transit',
    image: '/images/student-showcase/student5.jpeg',
    featured: true
  },
  {
    id: '2',
    title: 'Bio-Remediation Water Assayer',
    description: 'A hardware-software hybrid IoT device designed to monitor river basin water quality. Using cellular micro-sensors, the device samples pH, turbidity, microplastic density, and oxygenation levels, uploading the telemetry data directly to an open-source research dashboard.',
    technologies: ['Raspberry Pi', 'Python', 'React', 'Tailwind CSS', 'InfluxDB', 'LoRaWAN'],
    team: ['Gabriella Patel (Biology)', 'Tariq Simmons (Mathematics)'],
    outcomes: 'Deployed three sensor buoys in the Yadkin River basin. Telemetry is used by the EPA regional office for watershed reports. The project won first prize in the Statewide Environmental Design Competition.',
    githubUrl: 'https://github.com/livingstone-stem/river-assayer-iot',
    image: '/images/student-showcase/student9.jpeg',
    featured: true
  },
  {
    id: '3',
    title: 'OptiWarehouse Supply Chain Engine',
    description: 'An AI-driven warehouse optimization model that simulates stock flow and predicts inventory bottlenecks using historic seasonal sales records. The model suggests shelf layouts to minimize picking times.',
    technologies: ['Python (pandas/NumPy)', 'TensorFlow', 'TypeScript', 'Next.js', 'PostgreSQL'],
    team: ['Maya Lin (Business)', 'Kevin Zhao (Mathematics)'],
    outcomes: 'Deployed prototype with a regional retail supplier, yielding a 14% improvement in warehouse order-picking speeds and preventing stockouts on high-demand seasonal items.',
    demoUrl: 'https://optiwarehouse-demo.livingstone.edu',
    githubUrl: 'https://github.com/livingstone-stem/optiwarehouse',
    image: '/images/student-showcase/student7.jpeg',
    featured: false
  }
];

export const competitions: Competition[] = [
  {
    id: '1',
    title: 'CIAA STEM Hackathon',
    subtitle: 'Celebrating Regional Development Excellence',
    description: 'The Livingstone College STEM team went head-to-head with 12 universities in a 36-hour sprint to build AI-driven solutions addressing clean energy bottlenecks. Our team designed a community solar share platform using Next.js and predictive load modeling.',
    date: 'February 2026',
    award: '1st Place Overall Champion',
    students: ['Marcus Vance', 'Devin Carter', 'Sophia Ross'],
    image: '/images/student-showcase/student1.jpeg'
  },
  {
    id: '2',
    title: 'National Pre-Med Research Symposium',
    subtitle: 'Showcasing Undergraduate Biological Discoveries',
    description: 'Aaliyah Jones presented her co-authored research paper on gene-editing pathways for cancer cell regulation before an academic board of researchers. The presentation focused on targeted cellular delivery systems.',
    date: 'November 2025',
    award: 'Outstanding Undergraduate Presentation Award',
    students: ['Aaliyah Jones'],
    image: '/images/student-showcase/student2.jpeg'
  },
  {
    id: '3',
    title: 'Carolinas Data Science Bowl',
    subtitle: 'Solving Urban Planning Bottlenecks',
    description: 'Livingstone Mathematics students developed a predictive model to map food deserts in Salisbury and outline optimal community garden sites based on census income, transit, and soil quality parameters.',
    date: 'April 2026',
    award: 'Best Social Impact Solution Award',
    students: ['Tariq Simmons', 'Kevin Zhao'],
    image: '/images/student-showcase/student3.jpeg'
  }
];

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Livingstone College STEM Students Win Big at Microsoft Hackathon',
    date: 'April 15, 2026',
    summary: 'A team of Computer Information Systems majors clinched the first-place trophy at the Microsoft HBCU Hackathon by designing a next-gen disaster communications router.',
    content: 'A team of Computer Information Systems majors clinched the first-place trophy at the Microsoft HBCU Hackathon in Charlotte, North Carolina. Facing competition from over twenty prominent HBCUs, the Livingstone team built "NetBeacon", a hardware-software solution enabling emergency communication during power grid failure.\n\nThe team, led by Marcus Vance, utilized low-power Bluetooth mesh networks and Next.js to deploy a lightweight routing dashboard. In addition to a $10,000 cash prize, Microsoft offered full-time internship placements to all three team members.',
    category: 'Competition',
    image: '/images/student-showcase/student1.jpeg'
  },
  {
    id: '2',
    title: 'Senior Biology Major Aaliyah Jones Awarded Prestigious NSF Fellowship',
    date: 'March 20, 2026',
    summary: 'Aaliyah Jones has been selected for the National Science Foundation Graduate Research Fellowship to support her MD-PhD studies in cancer genetics.',
    content: 'Senior Biology major Aaliyah Jones has been selected for the National Science Foundation (NSF) Graduate Research Fellowship Program (GRFP). This highly competitive award provides a three-year annual stipend of $37,000 along with tuition allowances to support graduate studies at any accredited US institution.\n\nAaliyah, who has co-authored multiple publications in molecular biology, plans to enroll in a dual MD-PhD program to study genetics and oncology. "Livingstone\'s undergraduate research labs gave me the keys to explore complex biological hypotheses," said Aaliyah.',
    category: 'Milestone',
    image: '/images/student-showcase/student2.jpeg'
  },
  {
    id: '3',
    title: 'Summer Internship Placements Break Department Records',
    date: 'May 2, 2026',
    summary: 'Livingstone College STEM department reports that 88% of upperclassmen have secured summer internships at top-tier firms including Google, Microsoft, and Novartis.',
    content: 'The Livingstone College STEM Department is proud to announce a record-breaking year for student placement. As of May, 88% of junior and senior majors have secured technical summer internships at leading companies and national research labs.\n\nStudents will be working in roles ranging from Software Engineering to Actuarial Risk Analysis and Oncology Research. "Our focus on hands-on project building and professional certification prep is directly translating into high-demand internship offers," stated Dr. Sarah Jenkins, Department Chair.',
    category: 'Internship',
    image: '/images/student-showcase/student8.jpeg'
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
    location: 'Livingstone Student Center Ballroom',
    description: 'An exclusive networking event connecting STEM students with corporate recruiters from Google, FedEx, Novartis, and Duke Energy. Business professional attire required.',
    category: 'Networking'
  },
  {
    id: '3',
    title: 'Annual Livingstone Hackathon',
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
