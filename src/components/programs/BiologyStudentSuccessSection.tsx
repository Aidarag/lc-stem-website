import Image from 'next/image';
import { FlaskConical, Microscope } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const students = [
  {
    name: 'Robert Osei',
    role: 'Intern',
    organization: 'Poe Center for Health Education',
    details: 'September–October 2025 · Two months · Remote',
    description:
      'Robert Osei completed a two-month remote internship with the Poe Center for Health Education in North Carolina from September through October 2025, gaining professional experience within a health-education organization.',
    image: '/images/biology-student-success/robert-osei-poe-center-internship.jpeg',
    imageAlt: 'Portrait of Robert Osei wearing glasses and a dark jacket',
    tags: ['Health Education', 'Remote Internship', 'Professional Experience'],
  },
  {
    name: 'Francis Boadu',
    role: 'Undergraduate Student Researcher',
    organization: 'Duke University School of Medicine',
    details: 'Beginning April 2026 · Hybrid',
    description:
      'Francis Boadu joined Duke University School of Medicine as an Undergraduate Student Researcher, conducting oncology research focused on CIC-DUX4 sarcoma. His experience includes mammalian cell culture and cell-based assays in a hybrid research environment.',
    image: '/images/biology-student-success/francis-boadu-duke-research.png',
    imageAlt: 'Francis Boadu speaking at a microphone while wearing a suit and conference badge',
    tags: [
      'Oncology Research',
      'CIC-DUX4 Sarcoma',
      'Mammalian Cell Culture',
      'Cell-Based Assays',
      'Undergraduate Research',
    ],
  },
  {
    name: 'Darryl Fisher',
    role: 'Product Safety Lab Operations Intern',
    organization: 'Syngenta',
    details: 'Industry experience',
    description:
      'Darryl Fisher gained industry experience at Syngenta as a Product Safety Lab Operations Intern, contributing within a professional laboratory operations environment.',
    image: '/images/biology-student-success/darryl-fisher-syngenta-internship.jpeg',
    imageAlt: 'Portrait of Darryl Fisher wearing a blue shirt and patterned blazer',
    tags: ['Product Safety', 'Laboratory Operations', 'Industry Experience', 'Professional Development'],
  },
] as const;

export default function BiologyStudentSuccessSection() {
  return (
    <section aria-labelledby="biology-student-success-heading" className="pt-10 md:pt-16">
      <ScrollReveal className="rounded-3xl border border-gray-200/90 bg-white p-7 shadow-xl sm:p-9 lg:p-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-bold text-purple-800 sm:text-sm">
            <Microscope aria-hidden="true" className="h-4 w-4 text-purple-600" />
            Biology in action
          </div>
          <h2
            id="biology-student-success-heading"
            className="mt-5 font-serif text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl"
          >
            Student <span className="text-purple-600">Success</span>
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-gray-600">
            Students gaining practical experience through research, internships, and professional
            laboratory environments.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {students.map((student, index) => (
            <article
              key={student.name}
              className={`group overflow-hidden rounded-2xl border border-purple-100 bg-purple-50/40 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg motion-reduce:transform-none ${
                index === 2
                  ? 'md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)] xl:col-span-1 xl:w-auto'
                  : ''
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={student.image}
                  alt={student.imageAlt}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none"
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-200 bg-white text-purple-700">
                    <FlaskConical aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-extrabold leading-tight text-gray-900">
                      {student.name}
                    </h3>
                    <p className="mt-1 text-sm font-bold leading-snug text-purple-800">
                      {student.role}
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-snug text-gray-700">
                      {student.organization}
                    </p>
                  </div>
                </div>

                <p className="mt-5 font-mono text-xs font-bold uppercase tracking-wide text-purple-700">
                  {student.details}
                </p>
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
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
