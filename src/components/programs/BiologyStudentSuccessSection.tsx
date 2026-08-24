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
  {
    name: 'Naomi Nuhamin Bullo',
    role: 'Research Fellow & Registered Behavioral Technician',
    organization: 'Davidson College · Atrium Health · Above and Beyond',
    details: '2025–2026 · Research and Clinical Experience',
    description:
      'Naomi Nuhamin Bullo built a diverse portfolio of biology-related experience across research and clinical settings. She served as a Davidson College Research Fellow and an Atrium Health Summer Intern, gaining hands-on exposure to biomedical research and healthcare operations. She further expanded her skills as a Registered Behavioral Technician at Above and Beyond, applying scientific knowledge in applied behavioral health.',
    image: '/images/biology-student-success/naomi-nuhamin-bullo-profile.jpeg',
    imageAlt: 'Portrait of Naomi Nuhamin Bullo',
    tags: ['Biomedical Research', 'Healthcare', 'Behavioral Health', 'Research Fellow', 'Clinical Experience'],
  },
  {
    name: 'Patricia Naigaga',
    role: 'Pharmacy Technician Intern',
    organization: 'Walgreens',
    details: 'Pharmacy Operations Experience',
    description:
      'Patricia Naigaga completed a Pharmacy Technician Internship at Walgreens, gaining hands-on experience in pharmaceutical dispensing, prescription processing, inventory management, and patient care coordination. She developed a strong foundation in pharmacy operations, regulatory compliance, and the collaborative skills essential to delivering safe and effective medication therapy in a fast-paced retail healthcare environment.',
    image: '/images/biology-student-success/patricia-naigaga-profile.jpeg',
    imageAlt: 'Portrait of Patricia Naigaga',
    tags: ['Pharmaceutical Dispensing', 'Patient Care', 'Pharmacy Operations', 'Healthcare Internship', 'Regulatory Compliance'],
  },
  {
    name: 'Daniel Frimpong',
    role: 'Health Administrative Intern',
    organization: 'Atrium Health',
    details: 'Healthcare Administration Experience',
    description:
      'Daniel Frimpong completed a Health Administrative Internship at Atrium Health, one of the largest healthcare systems in the Southeast. He gained hands-on exposure to healthcare operations, including patient services coordination, clinical workflow support, and administrative process improvement. His experience bridged his biology knowledge with the business and operational side of delivering quality patient care.',
    image: '/images/biology-student-success/daniel-frimpong-profile.jpeg',
    imageAlt: 'Portrait of Daniel Frimpong',
    tags: ['Healthcare Administration', 'Clinical Operations', 'Patient Services', 'Healthcare Systems'],
  },
  {
    name: 'Emmanuella Nyarko',
    role: 'Health Administrative Intern',
    organization: 'Atrium Health',
    details: 'Healthcare Administration Experience',
    description:
      'Emmanuella Nyarko completed a Health Administrative Internship at Atrium Health, gaining practical experience in healthcare operations and administration. She contributed to patient services coordination, supported clinical workflow processes, and developed a deeper understanding of how large-scale healthcare systems deliver quality care to diverse communities.',
    image: '/images/biology-student-success/emmanuella-nyarko-profile.jpeg',
    imageAlt: 'Portrait of Emmanuella Nyarko',
    tags: ['Healthcare Administration', 'Clinical Operations', 'Patient Services', 'Healthcare Systems'],
  },
  {
    name: 'Afia Owusu Agyemang',
    role: 'STEM Summer Camp Mentor',
    organization: 'Livingstone College White Coat Scholars',
    details: '2025 · Mentorship & Student Leadership',
    description:
      'Afia Owusu Agyemang served as a mentor for the 2025 STEM Summer Camp, guiding younger students through hands-on science activities and encouraging their interest in STEM fields. She also holds a leadership role as Secretary of the Livingstone College White Coat Scholars, a pre-health student organization that supports students pursuing careers in medicine and healthcare.',
    image: '/images/biology-student-success/afia-owusu-agyemang-profile.jpeg',
    imageAlt: 'Portrait of Afia Owusu Agyemang',
    imagePosition: '50% 55%',
    tags: ['STEM Mentorship', 'Student Leadership', 'Pre-Health', 'White Coat Scholars'],
  },
  {
    name: 'Emeglad Boakye-Yiadom',
    role: 'Healthcare Administration Intern',
    organization: 'Healthcare Administration',
    details: 'Healthcare Administration & Campus Leadership',
    description:
      'Emeglad Boakye-Yiadom serves as a Healthcare Administration Intern, gaining hands-on experience in healthcare operations. She is also active across campus as a STEM Summer Camp student mentor, a Billie Bear mentor supporting incoming students, and a member of the Alpha Lambda Delta honors society. She further participates in the HBCU Energy Pathway program, expanding her exposure to energy-sector opportunities alongside her healthcare-focused coursework.',
    image: '/images/biology-student-success/emeglad-boakye-yiadom-profile.jpeg',
    imageAlt: 'Portrait of Emeglad Boakye-Yiadom wearing glasses',
    imagePosition: '50% 15%',
    tags: ['Healthcare Administration', 'Student Mentorship', 'Honors Society', 'HBCU Energy Pathway'],
  },
  {
    name: 'Bright Karikari',
    role: 'Undergraduate Researcher',
    organization: 'Livingstone College',
    details: 'Undergraduate Research',
    description:
      'Bright Karikari serves as an undergraduate researcher, contributing to ongoing scientific research as part of his biology coursework. He presented his research at the Emerging Researchers National (ERN) Conference, an event that showcases undergraduate STEM research from students across the country.',
    image: '/images/biology-student-success/bright-karikari-profile.jpeg',
    imageAlt: 'Portrait of Bright Karikari wearing a patterned collared shirt',
    tags: ['Undergraduate Research', 'ERN Conference', 'Scientific Research'],
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
                  style={'imagePosition' in student ? { objectPosition: student.imagePosition } : undefined}
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
