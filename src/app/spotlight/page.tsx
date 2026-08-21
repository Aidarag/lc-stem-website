'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, Award, Briefcase, GraduationCap, Code, Compass, ArrowRight, Star, BookOpen, CheckCircle2, Trophy, Mail, Send } from 'lucide-react';
import { studentSpotlights, StudentSpotlight } from '@/data/stemData';
import ScrollReveal from '@/components/ui/ScrollReveal';

const getLinkedInUrl = (student: { name: string; linkedin?: string }) => {
  if (student.linkedin) return student.linkedin;
  const slug = student.name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
  return `https://www.linkedin.com/in/${slug}/`;
};

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

function SpotlightContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Selected filter tags
  const [selectedMajor, setSelectedMajor] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Selected student for detailed modal
  const [activeStudent, setActiveStudent] = useState<StudentSpotlight | null>(null);

  // Sync state from query parameters
  useEffect(() => {
    const majorParam = searchParams.get('major');
    const idParam = searchParams.get('id');

    if (majorParam) {
      setSelectedMajor(majorParam);
    }
    if (idParam) {
      const student = studentSpotlights.find((s) => s.id === idParam);
      if (student) {
        setActiveStudent(student);
      }
    }
  }, [searchParams]);

  // Handle open student modal
  const openStudent = (student: StudentSpotlight) => {
    setActiveStudent(student);
    const params = new URLSearchParams(searchParams.toString());
    params.set('id', student.id);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  // Handle close student modal
  const closeStudent = () => {
    setActiveStudent(null);
    const params = new URLSearchParams(searchParams.toString());
    params.delete('id');
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  // Filter students based on major and search query
  const filteredStudents = studentSpotlights.filter((student) => {
    const matchesMajor = selectedMajor === 'All' || student.major === selectedMajor;
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.internships.some((i) => i.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesMajor && matchesSearch;
  });

  return (
    <div className="w-full">
      {/* Search and Filters */}
      <section className="mx-auto max-w-7xl px-6 pt-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 border border-gray-200/90 bg-white p-5 rounded-2xl shadow-sm">
          {/* Search box */}
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, bio, or company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-gray-200 pl-10 pr-4 py-2.5 font-sans text-sm bg-gray-50 focus:outline-none focus:border-purple-400 focus:bg-white transition-colors text-gray-900 placeholder:text-gray-400"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-mono text-xs uppercase tracking-wider text-gray-400 mr-1 flex items-center gap-1">
              <Filter className="h-3.5 w-3.5" /> Filter:
            </span>
            {['All', 'Computer Information Systems', 'Biology', 'Mathematics', 'Business'].map((major) => (
              <button
                key={major}
                onClick={() => {
                  setSelectedMajor(major);
                  const params = new URLSearchParams(searchParams.toString());
                  if (major === 'All') {
                    params.delete('major');
                  } else {
                    params.set('major', major);
                  }
                  router.replace(`?${params.toString()}`, { scroll: false });
                }}
                className={`rounded-full border px-4 py-1.5 font-mono text-xs font-bold transition-all cursor-pointer ${
                  selectedMajor === major
                    ? 'border-purple-500 bg-purple-600 text-white shadow-sm'
                    : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:border-purple-300'
                }`}
              >
                {major === 'Computer Information Systems' ? 'CIS' : major}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        {filteredStudents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {filteredStudents.map((student) => (
              <motion.div
                key={student.id}
                layoutId={`student-card-${student.id}`}
                onClick={() => openStudent(student)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-gray-200/90 bg-white shadow-lg hover:shadow-2xl hover:border-purple-300 transition-all duration-300"
              >
                {/* Photo with gradient overlay */}
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={student.photo}
                    alt={student.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: student.photoPosition || 'center' }}
                    sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Spotlight badge */}
                  {student.featured && (
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1 bg-purple-600 text-white px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider shadow-md">
                      <Star className="h-3.5 w-3.5 fill-current" /> Spotlight
                    </span>
                  )}

                  {/* Class year */}
                  <span className="absolute top-4 right-4 border border-white/30 bg-black/40 backdrop-blur-sm text-white px-2.5 py-1 rounded-full font-mono text-xs font-bold">
                    {student.gradYear}
                  </span>

                  {/* Student info on image bottom */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <h3 className="font-serif text-xl font-extrabold text-white leading-snug">
                      {student.name}
                    </h3>
                    <p className="font-mono text-xs font-bold text-purple-300 uppercase tracking-wider">
                      {student.major}
                    </p>
                  </div>
                </div>

                {/* Info block */}
                <div className="p-5 space-y-3">
                  <p className="font-sans text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {student.bio}
                  </p>

                  <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-600 group-hover:text-purple-800 flex items-center gap-1.5 transition-colors">
                      Explore Profile <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <a
                      href={getLinkedInUrl(student)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200 px-2.5 py-1 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider transition-all inline-flex items-center gap-1 cursor-pointer"
                    >
                      <LinkedInIcon className="h-3 w-3 text-purple-600" /> Connect
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="border-2 border-dashed border-gray-200 bg-white p-16 text-center rounded-3xl shadow-sm">
            <Compass className="mx-auto h-12 w-12 text-gray-300 animate-pulse" />
            <h3 className="font-serif text-xl font-bold text-gray-900 mt-4">No Profiles Found</h3>
            <p className="font-sans text-sm text-gray-500 mt-2 max-w-sm mx-auto">
              We couldn't find any student spotlights matching your criteria. Try adjusting your search query or filters.
            </p>
          </div>
        )}
      </section>

      {/* Profile Detail Modal Overlay */}
      <AnimatePresence>
        {activeStudent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeStudent}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="relative z-10 border border-gray-200/90 bg-white shadow-2xl rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={closeStudent}
                className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/90 backdrop-blur-md text-gray-800 hover:bg-gray-100 transition-colors shadow-md active:scale-95 cursor-pointer"
                aria-label="Close details"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Photo & Hero Left Column (5/12 span) */}
              <div className="relative min-h-[300px] md:min-h-full md:w-5/12 bg-gradient-to-b from-[#0C0614] to-[#180A2D] text-white flex flex-col justify-between p-6 shrink-0 overflow-hidden border-b md:border-b-0 md:border-r border-gray-200/80">
                <Image
                  src={activeStudent.photo}
                  alt={activeStudent.name}
                  fill
                  className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                  style={{ objectPosition: activeStudent.photoPosition || 'center' }}
                  sizes="(max-w-768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0614] via-[#0C0614]/30 to-transparent" />

                {/* Top Badges */}
                <div className="relative z-10 flex flex-wrap items-center gap-2">
                  <span className="bg-purple-600 text-[#e3fc51] font-mono text-xs font-extrabold px-3.5 py-1.5 rounded-full border border-purple-400/40 shadow-md">
                    Class of {activeStudent.gradYear}
                  </span>
                  {activeStudent.featured && (
                    <span className="btn-gradient-lime font-mono text-xs font-extrabold uppercase tracking-wider text-[#0B051D] px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-current" /> Spotlight
                    </span>
                  )}
                </div>

                {/* Bottom Overlay Text */}
                <div className="relative z-10 space-y-3 pt-16">
                  <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                    {activeStudent.name}
                  </h3>
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-3.5 py-1 rounded-lg font-mono text-xs font-bold text-purple-200">
                    <GraduationCap className="h-3.5 w-3.5 text-purple-300" />
                    <span>{activeStudent.major}</span>
                  </div>
                </div>
              </div>

              {/* Profile Details Content Right Column (7/12 span) */}
              <div className="p-7 md:p-10 md:w-7/12 space-y-6 overflow-y-auto max-h-[85vh] md:max-h-[90vh]">
                
                {/* Header */}
                <div className="border-b border-gray-100 pb-5 space-y-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-lg border border-purple-100 inline-flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5 text-purple-600" /> LC STEM Student Showcase
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                    {activeStudent.name}
                  </h2>
                </div>

                {/* Biography */}
                <div className="space-y-2">
                  <h3 className="font-mono text-xs font-extrabold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                    <BookOpen className="h-4 w-4 text-purple-600" /> Biography
                  </h3>
                  <p className="font-sans text-sm sm:text-base leading-relaxed text-gray-700 font-normal">
                    {activeStudent.bio}
                  </p>
                </div>

                {/* Credentials Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  
                  {/* Internships */}
                  {activeStudent.internships.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-mono text-xs font-extrabold uppercase tracking-wider text-gray-900 flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4 text-purple-600" /> Internships
                      </h4>
                      <div className="space-y-1.5 font-sans text-xs sm:text-sm">
                        {activeStudent.internships.map((intern, i) => (
                          <div key={i} className="bg-gray-50 border border-gray-200/80 p-3 rounded-xl text-gray-800 font-medium">
                            {intern}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Leadership */}
                  {activeStudent.leadership.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-mono text-xs font-extrabold uppercase tracking-wider text-gray-900 flex items-center gap-1.5">
                        <Award className="h-4 w-4 text-purple-600" /> Leadership
                      </h4>
                      <div className="space-y-1.5 font-sans text-xs sm:text-sm">
                        {activeStudent.leadership.map((lead, i) => (
                          <div key={i} className="bg-gray-50 border border-gray-200/80 p-3 rounded-xl text-gray-800 font-medium">
                            {lead}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Honors & Awards */}
                  {activeStudent.awards.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-mono text-xs font-extrabold uppercase tracking-wider text-gray-900 flex items-center gap-1.5">
                        <Trophy className="h-4 w-4 text-amber-500" /> Honors &amp; Awards
                      </h4>
                      <div className="space-y-1.5 font-sans text-xs sm:text-sm">
                        {activeStudent.awards.map((award, i) => (
                          <div key={i} className="bg-amber-50/80 border border-amber-200/80 p-3 rounded-xl text-amber-950 font-bold">
                            {award}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Certifications */}
                  {activeStudent.certifications.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-mono text-xs font-extrabold uppercase tracking-wider text-gray-900 flex items-center gap-1.5">
                        <GraduationCap className="h-4 w-4 text-purple-600" /> Certifications
                      </h4>
                      <div className="space-y-1.5 font-sans text-xs sm:text-sm">
                        {activeStudent.certifications.map((cert, i) => (
                          <div key={i} className="bg-purple-50/80 border border-purple-200/80 p-3 rounded-xl text-purple-950 font-bold">
                            {cert}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* Key Accomplishments */}
                {activeStudent.achievements.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <h4 className="font-mono text-xs font-extrabold uppercase tracking-wider text-gray-900 flex items-center gap-1.5">
                      <Code className="h-4 w-4 text-purple-600" /> Key Accomplishments
                    </h4>
                    <div className="bg-gradient-to-br from-purple-50/80 to-gray-50 border border-purple-200/90 p-5 rounded-2xl space-y-2.5 shadow-inner">
                      {activeStudent.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-gray-800 leading-relaxed">
                          <CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Connect Action Bar */}
                <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                  <a
                    href={getLinkedInUrl(activeStudent)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gradient-lime font-mono text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0B051D] px-6 py-3.5 rounded-full shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
                  >
                    <LinkedInIcon className="h-4 w-4" /> Connect with {activeStudent.name.split(' ')[0]} <ArrowRight className="h-4 w-4" />
                  </a>

                  <a
                    href={`mailto:${activeStudent.name.toLowerCase().replace(/[^a-z0-9]/g, '.')}@livingstone.edu`}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-3.5 rounded-full shadow-md transition-all inline-flex items-center gap-2"
                  >
                    <Send className="h-4 w-4" /> Direct Email
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SpotlightPage() {
  return (
    <div className="w-full bg-[#FAF9F6] pb-24 font-sans text-gray-700">
      {/* Header — Dark Obsidian Hero */}
      <section className="relative hero-obsidian-bg border-b border-white/10 pt-32 pb-20 md:pt-40 md:pb-28 text-white text-center overflow-hidden">
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-5 right-1/4 w-80 h-80 rounded-full bg-pink-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 z-0 grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full glass-pill-badge px-4 py-2 text-xs sm:text-sm text-purple-200">
            <Star className="h-4 w-4 text-purple-400 fill-purple-400" /> Student Excellence
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-none">
            Student <span className="text-gradient-purple-pink">Spotlight</span>
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-normal">
            Discover outstanding peers in the LC STEM student community — celebrating their internships, certifications, and research successes.
          </p>
        </div>
      </section>

      {/* Suspense Wrapper to handle search parameter operations */}
      <Suspense fallback={
        <div className="mx-auto max-w-7xl px-6 py-24 text-center font-mono text-sm text-gray-500">
          Loading student showcase directory...
        </div>
      }>
        <SpotlightContent />
      </Suspense>
    </div>
  );
}
