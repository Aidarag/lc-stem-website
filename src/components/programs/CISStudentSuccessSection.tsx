import Image from 'next/image';
import { Cloud, GraduationCap, Laptop, MonitorCog, ShieldCheck, Users } from 'lucide-react';
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
    name: 'Micah Colding',
    roles: ['Cybersecurity & Fraud Management Intern'],
    organizations: ['TIAA'],
    description:
      'Micah Colding gained experience in cybersecurity and fraud management through an internship with TIAA, working within a financial services security environment.',
    image: '/images/cis-student-success/micah-colding-tiaa-profile.jpeg',
    imageAlt: 'Professional portrait of Micah Colding wearing a suit and striped tie',
    imagePosition: '50% 55%',
    tags: ['Cybersecurity', 'Fraud Management', 'Financial Services'],
    icon: ShieldCheck,
  },
  {
    name: 'Yves Kwawu',
    roles: ['IT Intern'],
    organizations: ['NCDOT'],
    description:
      'Yves Kwawu completed an IT internship with the North Carolina Department of Transportation (NCDOT), gaining hands-on experience supporting technology operations within a state government agency.',
    image: '/images/cis-student-success/yves-kwawu-ncdot-profile.jpeg',
    imageAlt: 'Portrait of Yves Kwawu wearing glasses and a cream polo shirt outdoors',
    imagePosition: '50% 35%',
    tags: ['Information Technology', 'Government Technology', 'Technical Support'],
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
                  <Image
                    src={student.image}
                    alt={student.imageAlt}
                    fill
                    style={{ objectPosition: student.imagePosition }}
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none"
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  />
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
