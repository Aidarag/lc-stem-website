import Image from 'next/image';
import { Cloud, Database, GraduationCap, Laptop, MonitorCog, Network, ShieldCheck, Users } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const students = [
  {
    name: 'Jerome Adonis',
    roles: ['Solutions Architect Intern', 'Software Engineer', 'FSO Technology Consulting Intern'],
    organizations: ['AWS', 'Bank of America', 'Ernst & Young LLP'],
    description:
      'Jerome Adonis has built a diverse technology and consulting background across three industry internships: as a Solutions Architect Intern at AWS, a Software Engineer at Bank of America, and an FSO Technology Consulting Intern at Ernst & Young LLP.',
    image: '/images/cis-student-success/jerome-adonis-aws-profile.jpeg',
    imageAlt: 'Professional portrait of Jerome Adonis wearing a suit and tie',
    imagePosition: '50% 0%',
    tags: ['Cloud Architecture', 'Software Engineering', 'Technology Consulting', 'Financial Services'],
    icon: Cloud,
  },
  {
    name: 'Yves Kwawu',
    roles: ['IT Intern'],
    organizations: ['NCDOT'],
    description:
      'Yves Kwawu completed an IT internship with the North Carolina Department of Transportation (NCDOT), gaining hands-on experience supporting technology operations within a state government agency.',
    image: '/images/cis-student-success/micahprofile.jpeg',
    imageAlt: 'Portrait of Yves Kwawu',
    imagePosition: '50% 35%',
    tags: ['Information Technology', 'Government Technology', 'Technical Support'],
    icon: ShieldCheck,
  },
  {
    name: 'Micah Colding',
    roles: ['Cybersecurity & Fraud Management Intern'],
    organizations: ['TIAA'],
    description:
      'Micah Colding gained experience in cybersecurity and fraud management through an internship with TIAA, working within a financial services security environment.',
    image: '/images/cis-student-success/yvesprofile.jpeg',
    imageAlt: 'Portrait of Micah Colding',
    imagePosition: '50% 55%',
    tags: ['Cybersecurity', 'Fraud Management', 'Financial Services'],
    icon: Laptop,
  },
  {
    name: 'Kuwa-Salama Mbetwa',
    roles: ['STEM Education and Technology Associate'],
    organizations: ['Mathnasium, Seattle, WA'],
    description:
      'Kuwa-Salama Mbetwa serves as a STEM Education and Technology Associate at Mathnasium in Seattle, WA, combining technical knowledge with instruction to help students build math and STEM skills.',
    image: '/images/cis-student-success/kuwa-salama-mbetwa-mathnasium-profile.jpeg',
    imageAlt: 'Portrait of Kuwa-Salama Mbetwa wearing a dark jacket over a white shirt',
    imagePosition: '50% 50%',
    tags: ['STEM Education', 'Instructional Technology', 'Mentorship'],
    icon: GraduationCap,
  },
  {
    name: 'Joel Thompson',
    roles: ['Community Engagement Analyst Intern'],
    organizations: ['Self-Help Credit Union'],
    description:
      'Joel Thompson serves as a Community Engagement Analyst Intern with Self-Help Credit Union, applying analytical skills to support community-focused financial initiatives.',
    image: '/images/cis-student-success/joel-thompson-selfhelp-creditunion.jpeg',
    imageAlt: 'Portrait of Joel Thompson wearing a Livingstone College sweatshirt on campus',
    imagePosition: '50% 50%',
    tags: ['Community Engagement', 'Data Analysis', 'Financial Services'],
    icon: Users,
  },
  {
    name: 'Jephter Ofori',
    roles: ['Product Safety Digital and Data Intern'],
    organizations: ['Syngenta'],
    description:
      'Jephter Ofori gained industry experience at Syngenta as a Product Safety Digital and Data Intern, applying data and digital tools within a professional product safety environment.',
    image: '/images/cis-student-success/jephter-ofori-syngenta-profile.png',
    imageAlt: 'Portrait of Jephter Ofori wearing a blue Livingstone College Mentoring Matters hoodie',
    imagePosition: '50% 50%',
    tags: ['Product Safety', 'Data Management', 'Digital Tools', 'Industry Experience'],
    icon: Database,
  },
  {
    name: 'Emmanuel Adrabo',
    roles: ['Network Administrator Intern'],
    organizations: ['Daimler Trucks North America'],
    description:
      'Emmanuel Adrabo served as a Network Administrator Intern at Daimler Trucks North America (Mercedes-Benz), where he handled network troubleshooting and monitoring, provided user support, and assisted with switch and router support.',
    image: '/images/cis-student-success/emmanuel-adrabo-daimler-profile.jpeg',
    imageAlt: 'Portrait of Emmanuel Adrabo wearing a light blue Livingstone College Golf Team polo',
    imagePosition: '50% 20%',
    tags: ['Network Administration', 'Network Troubleshooting', 'Network Monitoring', 'Technical Support'],
    icon: Network,
  },
  {
    name: 'Im Aida Garba',
    roles: [
      'STEM Program Assistant',
      'Academic/CIS Tutor',
    ],
    organizations: [
      'Livingstone College STEM Program',
      'Livingstone College Student Success Center',
    ],
    description:
      'Im Aida Garba is a Presidential Scholar and NCAA Division II Women\'s Tennis student-athlete at Livingstone College with an exceptional record in technology, leadership, and academics. She served as a STEM Program Assistant and Academic/CIS Tutor. Her achievements include the Presidential Scholar Merit Award, Academic Excellence Award, ITA All-Academic Scholar-Athlete recognition, and the TyNiece Sutton Scholarship.',
    image: '/images/cis-student-success/im-aida-garba-profile.jpeg',
    imageAlt: 'Portrait of Im Aida Garba',
    imagePosition: '50% 20%',
    tags: [
      'Product Management',
      'AI / Machine Learning',
      'UX/UI Design',
      'Team Leadership',
      'Student-Athlete',
      'Academic Excellence',
    ],
    icon: MonitorCog,
  },
  {
    name: 'Swetakshi Nanda',
    roles: [
      'Undergraduate Researcher',
      'Web Developer Intern',
      'Hackathon Participant',
    ],
    organizations: [
      'Livingstone College',
      'Ase Healing Center, LLC (Delores Place)',
      'Various Conferences',
    ],
    description:
      'Swetakshi Nanda has built a strong profile in research, web development, and competitive technology events. She presented her research paper "AI in Environmental Education" at multiple prestigious conferences including the NC Honors Association Conference at Queens University (2025), the International Academy of Business (IAB) Conference at Howard University (2025), I-Cube at Livingstone College (2026), and the 3rd ICRABIF Conference at Livingstone College (2026). She has been interning as a Web Developer at Ase Healing Center, LLC (Delores Place) since May 2026 and has participated in hackathons including the BE Smart Hackathon, HBCU Battle of the Brains, and the Mastercard Data Challenge. She also worked with a team to create WealthBridge for the Risk Management Association (RMA).',
    image: '/images/cis-student-success/swetakshi-nanda-profile.jpeg',
    imageAlt: 'Portrait of Swetakshi Nanda',
    imagePosition: '50% 30%',
    tags: [
      'AI Research',
      'Web Development',
      'Academic Conferences',
      'Hackathons',
      'Environmental Education',
      'Software Engineering',
    ],
    icon: Laptop,
  },
  {
    name: 'George Damtey',
    roles: ['Digital Operations Intern'],
    organizations: ['TTX'],
    description:
      'George Damtey completed a Digital Operations Internship at TTX, a leading railcar leasing company. He gained hands-on experience in digital operations, data management, and process automation, contributing to the optimization of technology-driven workflows within the logistics and transportation industry.',
    image: '/images/cis-student-success/george-damtey-profile.png',
    imageAlt: 'Portrait of George Damtey',
    imagePosition: '50% 30%',
    tags: ['Digital Operations', 'Process Automation', 'Data Management', 'Logistics Technology'],
    icon: Database,
  },
  {
    name: 'Javon Howie',
    roles: ['Squad Leader', 'Cloud Security Researcher', 'Software Engineer', 'AI Developer'],
    organizations: ['U.S. Army National Guard', 'AWS', 'ICRABIF Conference'],
    description:
      'Javon Howie is a Computer Science student maintaining a 4.00 GPA with Dean\'s List and President\'s List honors. He presented his work at the 3rd Annual ICRABIF Conference and competed in the BE Smart Hackathon and HBCU Battle of the Brains Hackathon, advancing as a finalist. He has developed AI-powered platforms including an AI hairstyle visualization tool, WealthBridge, and CubixAI, and built hands-on AWS infrastructure projects involving IAM, VPC, EC2, S3, DynamoDB, and CloudWatch.',
    image: '/images/cis-student-success/javon-howie-profile.jpeg',
    imageAlt: 'Portrait of Javon Howie',
    imagePosition: '50% 30%',
    tags: ['Cloud Security', 'Artificial Intelligence', 'AWS', 'Software Engineering', 'Research', 'Leadership'],
    icon: ShieldCheck,
  },
] as const;

export default function CISStudentSuccessSection() {
  return (
    <section aria-labelledby="cis-student-success-heading" className="pt-10 md:pt-16">
      <ScrollReveal className="rounded-3xl border border-gray-200/90 bg-white p-7 shadow-xl sm:p-9 lg:p-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-bold text-purple-800 sm:text-sm">
            <MonitorCog aria-hidden="true" className="h-4 w-4 text-purple-600" />
            CIS in action
          </div>
          <h2
            id="cis-student-success-heading"
            className="mt-5 font-serif text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl"
          >
            Student <span className="text-purple-600">Success</span>
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-gray-600">
            Students gaining industry experience across cloud architecture, software engineering,
            cybersecurity, and technology consulting.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {students.map((student, index) => {
            const Icon = student.icon;
            const isLoneTrailingCard = index === students.length - 1 && students.length % 2 === 1;

            return (
              <article
                key={student.name}
                className={`group overflow-hidden rounded-2xl border border-purple-100 bg-purple-50/40 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg motion-reduce:transform-none ${
                  isLoneTrailingCard
                    ? 'md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)] xl:col-span-1 xl:w-auto'
                    : ''
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  {student.image && (
                    <Image
                      src={student.image}
                      alt={student.imageAlt}
                      fill
                      style={{ objectPosition: student.imagePosition }}
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none"
                      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    />
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-200 bg-white text-purple-700">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-extrabold leading-tight text-gray-900">
                        {student.name}
                      </h3>
                    </div>
                  </div>

                  <dl className="mt-5 space-y-3 border-t border-purple-100 pt-4">
                    {student.roles.map((role, roleIndex) => (
                      <div key={role}>
                        <dt className="font-sans text-sm font-bold leading-snug text-gray-900">{role}</dt>
                        <dd className="mt-0.5 font-sans text-sm font-semibold leading-snug text-purple-700">
                          {student.organizations[roleIndex]}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-4 font-sans text-sm leading-relaxed text-gray-600">
                    {student.description}
                  </p>

                  <ul aria-label={`${student.name} experience areas`} className="mt-5 flex flex-wrap gap-2">
                    {student.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-purple-200/80 bg-white px-3 py-1 font-mono text-[11px] font-semibold text-purple-700"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
}
