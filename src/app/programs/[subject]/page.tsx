import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Code, Briefcase, Award, CheckCircle2 } from 'lucide-react';
import { academicPrograms } from '@/data/stemData';
import BiologyStudentSuccessSection from '@/components/programs/BiologyStudentSuccessSection';
import BusinessStudentSuccessSection from '@/components/programs/BusinessStudentSuccessSection';
import MathStudentSuccessSection from '@/components/programs/MathStudentSuccessSection';

export const dynamicParams = false;

export function generateStaticParams() {
  return academicPrograms.map((program) => ({ subject: program.slug }));
}

type SubjectPageProps = {
  params: Promise<{ subject: string }>;
};

export async function generateMetadata({ params }: SubjectPageProps): Promise<Metadata> {
  const { subject } = await params;
  const program = academicPrograms.find((p) => p.slug === subject);
  if (!program) return {};

  return {
    title: program.name,
    description: program.overview,
  };
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const { subject } = await params;
  const program = academicPrograms.find((p) => p.slug === subject);
  if (!program) notFound();

  return (
    <>
      {/* Left Column: Description & Highlights */}
      <div className="lg:col-span-7 space-y-7">
        <div className="space-y-3">
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-purple-600">Selected Concentration</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">{program.name}</h2>
          <p className="font-sans text-sm sm:text-base leading-relaxed text-gray-600">{program.overview}</p>
        </div>

        {/* Track Highlights */}
        <div className="bg-white rounded-3xl border border-gray-200/90 p-7 md:p-9 space-y-6 shadow-xl hover:border-purple-200 transition-all duration-300">
          <h3 className="font-serif text-xl font-extrabold text-gray-900 flex items-center gap-2.5">
            <Award className="h-5 w-5 text-purple-600" /> Track Highlights
          </h3>
          <ul className="space-y-4">
            {program.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3 font-sans text-sm sm:text-base text-gray-700 leading-relaxed">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-purple-600 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Column: Skills & Careers */}
      <div className="lg:col-span-5 space-y-6">

        {/* Skills Card */}
        <div className="bg-white rounded-3xl border border-gray-200/90 p-7 space-y-5 shadow-xl hover:border-purple-200 transition-all duration-300">
          <h3 className="font-serif text-xl font-extrabold text-gray-900 flex items-center gap-2.5">
            <Code className="h-5 w-5 text-purple-600" /> Professional Skills
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {program.skills.map((skill, index) => (
              <span
                key={index}
                className="border border-purple-200/80 bg-purple-50 text-purple-700 px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Careers Card */}
        <div className="bg-white rounded-3xl border border-gray-200/90 p-7 space-y-5 shadow-xl hover:border-purple-200 transition-all duration-300">
          <h3 className="font-serif text-xl font-extrabold text-gray-900 flex items-center gap-2.5">
            <Briefcase className="h-5 w-5 text-purple-600" /> Career Paths
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {program.careers.map((career, index) => (
              <div key={index} className="flex items-center gap-2.5 font-sans text-sm text-gray-700">
                <div className="h-2 w-2 bg-purple-600 rounded-full shrink-0" />
                <span>{career}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {program.slug === 'biology' && (
        <div className="lg:col-span-12">
          <BiologyStudentSuccessSection />
        </div>
      )}

      {program.slug === 'business' && (
        <div className="lg:col-span-12">
          <BusinessStudentSuccessSection />
        </div>
      )}

      {program.slug === 'mathematics' && (
        <div className="lg:col-span-12">
          <MathStudentSuccessSection />
        </div>
      )}
    </>
  );
}
