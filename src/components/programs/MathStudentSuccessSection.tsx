import Image from 'next/image';
import { Calculator } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const students = [
  {
    name: 'Sally Adenutsi',
    highlights: [
      'STEM Camp Mentor',
      'World Bank Youth Summit Virtual Delegate',
      'Cato University Attendee',
    ],
    description:
      'Sally Adenutsi contributed as a STEM Camp Mentor, guiding students in developing their academic and technical skills. She broadened her global perspective as a virtual Delegate at the World Bank Youth Summit and expanded her academic horizons by attending Cato University.',
    image: '/images/math-student-success/sally-adenutsi-profile.jpeg',
    imageAlt: 'Portrait of Sally Adenutsi',
    tags: ['STEM Mentorship', 'Global Leadership', 'Youth Advocacy', 'Academic Enrichment'],
  },
] as const;

export default function MathStudentSuccessSection() {
  return (
    <section aria-labelledby="math-student-success-heading" className="pt-10 md:pt-16">
      <ScrollReveal className="rounded-3xl border border-gray-200/90 bg-white p-7 shadow-xl sm:p-9 lg:p-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-bold text-purple-800 sm:text-sm">
            <Calculator aria-hidden="true" className="h-4 w-4 text-purple-600" />
            Mathematics in action
          </div>
          <h2
            id="math-student-success-heading"
            className="mt-5 font-serif text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl"
          >
            Student <span className="text-purple-600">Success</span>
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-gray-600">
            Students making an impact through mentorship, global engagement, and academic enrichment.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {students.map((student) => (
            <article
              key={student.name}
              className="group overflow-hidden rounded-2xl border border-purple-100 bg-purple-50/40 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg motion-reduce:transform-none md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)] xl:col-span-1 xl:w-auto"
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
                    <Calculator aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-extrabold leading-tight text-gray-900">
                      {student.name}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 font-sans text-sm leading-relaxed text-gray-600">
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
