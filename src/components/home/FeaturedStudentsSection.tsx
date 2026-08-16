import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Users } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { StudentSpotlight } from '@/data/stemData';

interface FeaturedStudentsSectionProps {
  featuredStudents: StudentSpotlight[];
}

export default function FeaturedStudentsSection({ featuredStudents }: FeaturedStudentsSectionProps) {
  return (
    <section className="relative bg-white py-24 md:py-32 border-b border-gray-200/80 text-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 border border-purple-200 px-4 py-2 text-xs sm:text-sm font-bold text-purple-800">
              <Users className="h-4 w-4 text-purple-600" /> Leaders
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 uppercase leading-tight">
              Featured <span className="text-purple-600">Students</span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-gray-600 max-w-lg">
              Our students secure internships at Microsoft, conduct independent NIH oncology research, and win regional hackathons.
            </p>
          </div>
          <Link
            href="/spotlight"
            className="btn-gradient-lime font-mono text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0B051D] px-6 py-3.5 rounded-full shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
          >
            View Directory <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Student Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredStudents.map((student) => (
            <ScrollReveal
              key={student.id}
              className="bg-white border border-gray-200/90 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-purple-400 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Student Photo */}
                <div className="relative h-[300px] w-full border-b border-gray-100 bg-gray-100">
                  <Image
                    src={student.photo}
                    alt={student.name}
                    fill
                    className="object-cover"
                    sizes="(max-w-768px) 100vw, 30vw"
                  />
                  <div className="absolute top-4 left-4 border border-purple-400/40 bg-purple-600 text-[#e3fc51] backdrop-blur-md px-3.5 py-1.5 rounded-full font-mono text-xs font-extrabold uppercase tracking-wider shadow-md">
                    Class of {student.gradYear}
                  </div>
                </div>

                {/* Student Credentials */}
                <div className="p-8 space-y-4">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100">
                      {student.major}
                    </span>
                    <h3 className="font-serif text-2xl font-extrabold text-gray-900 mt-2.5">{student.name}</h3>
                  </div>
                  <p className="font-sans text-sm sm:text-base leading-relaxed text-gray-600 line-clamp-3">
                    "{student.bio}"
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0">
                {/* Spotlight Achievement */}
                <div className="border-t border-gray-100 pt-4 space-y-1.5">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-gray-400 block">Highlight</span>
                  <p className="font-sans text-sm sm:text-base text-purple-700 font-bold line-clamp-1">
                    {student.awards[0] || student.internships[0]}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href={`/spotlight?id=${student.id}`}
                    className="inline-flex items-center text-xs sm:text-sm font-bold font-mono uppercase tracking-wider text-purple-600 hover:text-purple-800"
                  >
                    View profile details <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
