import Image from 'next/image';
import { BriefcaseBusiness, ChartNoAxesCombined, Landmark, Wallet, Megaphone } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const businessStudents = [
  {
    name: 'Emmanuel Amponsah',
    roles: ['Asset Management and Development Intern', 'Equity Research Analyst'],
    organizations: ['ANCHOR', 'Orion Equity Research Group'],
    image: '/images/business-student-success/emmanuel-amponsah-business-profile.jpeg',
    imageAlt: 'Professional portrait of Kamar Goudelock wearing a navy suit jacket',
    imagePosition: '50% 50%',
    description:
      'Emmanuel Amponsah gained experience in asset management and development through an internship with ANCHOR. He also served as an Equity Research Analyst with Orion Equity Research Group, building professional experience across investment research and asset-focused business operations.',
    highlights: [
      'Asset management and development',
      'Equity research',
      'Business analysis',
      'Investment research',
    ],
    icon: Landmark,
  },
  {
    name: 'Kamar Goudelock',
    roles: ['Global Operations Control Management Intern'],
    organizations: ['Wells Fargo'],
    image: '/images/business-student-success/kamar-goudelock-wells-fargo-internship.jpeg',
    imageAlt: 'Professional portrait of Emmanuel Amponsah wearing a gray suit and tie',
    imagePosition: '50% 0%',
    description:
      'Kamar Goudelock completed a summer internship with Wells Fargo as a Global Operations Control Management Intern. Through governance meetings and collaborative projects, he learned how teams across a large organization work together. He applied data analytics and AI prompt development to improve processes and make information more accessible. During an Innovation Sprint, his team also advised a nonprofit on improving its website and supporting its community impact.',
    highlights: [
      'Governance',
      'Cross-functional collaboration',
      'Data analytics',
      'AI prompt development',
      'Process improvement',
      'Innovation Sprint',
    ],
    icon: ChartNoAxesCombined,
  },
  {
    name: 'Ellis Dogbe-Gakpetor',
    roles: ['Finance Intern'],
    organizations: ['AccessPoint Health Systems'],
    image: '/images/business-student-success/ellis-dogbe-gakpetor-accesspoint-profile.jpeg',
    imageAlt: 'Professional portrait of Ellis Dogbe-Gakpetor wearing a gray suit and patterned tie',
    imagePosition: '50% 50%',
    description:
      'Ellis Dogbe-Gakpetor serves as a Finance Intern at AccessPoint Health Systems, supporting financial operations and analysis within a healthcare organization.',
    highlights: ['Finance', 'Financial Analysis', 'Healthcare Industry', 'Business Operations'],
    icon: Wallet,
  },
  {
    name: 'Shambhabi Sinha',
    roles: ['Social Media Content Creator Intern'],
    organizations: ['Tosot Comfort'],
    image: '/images/business-student-success/shambhabi-sinha-profile.jpeg',
    imageAlt: 'Portrait of Shambhabi Sinha',
    imagePosition: '50% 30%',
    description:
      'Shambhabi Sinha completed a Social Media Content Creator Internship at Tosot Comfort, where she developed and executed social media strategies to build brand awareness and drive audience engagement. She created compelling digital content, analyzed campaign performance metrics, and contributed to growing the company\'s online presence across multiple platforms.',
    highlights: [
      'Social media strategy',
      'Content creation',
      'Digital marketing',
      'Brand awareness',
      'Audience engagement',
      'Campaign analytics',
    ],
    icon: Megaphone,
  },
] as const;

export default function BusinessStudentSuccessSection() {
  return (
    <section aria-labelledby="business-student-success-heading" className="pt-10 md:pt-16">
      <ScrollReveal className="rounded-3xl border border-gray-200/90 bg-white p-7 shadow-xl sm:p-9 lg:p-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-bold text-purple-800 sm:text-sm">
            <BriefcaseBusiness aria-hidden="true" className="h-4 w-4 text-purple-600" />
            Professional experience
          </div>
          <h2
            id="business-student-success-heading"
            className="mt-5 font-serif text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl"
          >
            Business <span className="text-purple-600">in Action</span>
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-gray-600">
            Students build practical experience across operations, analytics, asset management,
            and investment research.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {businessStudents.map((student) => {
            const Icon = student.icon;

            return (
              <article
                key={student.name}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-purple-100 bg-purple-50/50 transition-[border-color,box-shadow] duration-200 hover:border-purple-200 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full border-b border-purple-100 bg-slate-100">
                  <Image
                    src={student.image}
                    alt={student.imageAlt}
                    fill
                    style={{ objectPosition: student.imagePosition ?? '50% 50%' }}
                    className="object-cover"
                    sizes="(max-width: 1023px) 100vw, 50vw"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-200 bg-white text-purple-700">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-mono text-xs font-bold uppercase tracking-wider text-purple-700">
                        Student experience
                      </p>
                      <h3 className="mt-1 font-serif text-2xl font-extrabold text-gray-900">
                        {student.name}
                      </h3>
                    </div>
                  </div>

                  <dl className="mt-6 space-y-4 border-t border-purple-100 pt-5">
                    {student.roles.map((role, index) => (
                      <div key={role}>
                        <dt className="font-sans text-sm font-bold text-gray-900">{role}</dt>
                        <dd className="mt-1 font-sans text-sm font-semibold text-purple-700">
                          {student.organizations[index]}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-5 flex-1 font-sans text-base leading-relaxed text-gray-600">
                    {student.description}
                  </p>

                  <ul aria-label={`${student.name} experience areas`} className="mt-6 flex flex-wrap gap-2">
                    {student.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-full border border-purple-200 bg-white px-3 py-1.5 font-mono text-xs font-semibold text-purple-700"
                      >
                        {highlight}
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
