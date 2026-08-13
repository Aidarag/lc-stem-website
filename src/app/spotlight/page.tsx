'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, Award, Briefcase, GraduationCap, Code, Compass, ArrowRight, Star } from 'lucide-react';
import { studentSpotlights, StudentSpotlight } from '@/data/stemData';
import ScrollReveal from '@/components/ui/ScrollReveal';

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
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border border-slate-200/80 bg-white p-6 rounded-2xl shadow-sm">
          {/* Search box */}
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, bio, or company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-200 pl-10 pr-4 py-2.5 font-sans text-xs bg-[#FAF9F6] focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1">
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
                className={`rounded-full border px-3 py-1.5 font-sans text-xs font-semibold transition-all cursor-pointer ${
                  selectedMajor === major
                    ? 'border-primary bg-primary text-white shadow-sm'
                    : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-900'
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredStudents.map((student) => (
              <motion.div
                key={student.id}
                layoutId={`student-card-${student.id}`}
                onClick={() => openStudent(student)}
                className="premium-card-light rounded-2xl flex flex-col h-full bg-white overflow-hidden cursor-pointer group shadow-sm"
              >
                {/* Photo */}
                <div className="relative h-[220px] w-full border-b border-slate-100 bg-slate-50 overflow-hidden">
                  <Image
                    src={student.photo}
                    alt={student.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 25vw"
                  />
                  {student.featured && (
                    <span className="absolute top-3 left-3 border border-accent/20 bg-accent text-white px-2 py-0.5 rounded-md font-mono text-[9px] uppercase tracking-wider font-semibold">
                      Spotlight
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 border border-slate-200/80 bg-white text-slate-700 px-2 py-0.5 rounded-md font-mono text-[9px] uppercase tracking-wider font-bold">
                    Class of {student.gradYear}
                  </span>
                </div>

                {/* Info block */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-accent transition-colors">
                      {student.name}
                    </h3>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-accent leading-none">
                      {student.major}
                    </p>
                    <p className="font-sans text-xs text-slate-500 line-clamp-3 pt-1">
                      {student.bio}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-right">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary group-hover:text-accent flex items-center justify-end gap-1.5">
                      Explore Profile <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="border-2 border-dashed border-slate-200 bg-white p-16 text-center rounded-2xl shadow-sm">
            <Compass className="mx-auto h-12 w-12 text-slate-300 animate-pulse" />
            <h3 className="font-serif text-xl font-bold text-slate-900 mt-4">No Profiles Found</h3>
            <p className="font-sans text-xs text-slate-500 mt-2 max-w-sm mx-auto">
              We couldn't find any student spotlights matching your criteria. Try adjusting your search query or filters.
            </p>
          </div>
        )}
      </section>

      {/* Profile Detail Modal Overlay */}
      <AnimatePresence>
        {activeStudent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeStudent}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="relative z-10 border border-slate-100 bg-white shadow-2xl rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={closeStudent}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors shadow-sm active:scale-95 cursor-pointer"
                aria-label="Close details"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Photo Left */}
                <div className="relative min-h-[250px] md:h-auto md:col-span-5 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-100">
                  <Image
                    src={activeStudent.photo}
                    alt={activeStudent.name}
                    fill
                    className="object-cover md:rounded-l-2xl"
                    sizes="(max-w-768px) 100vw, 35vw"
                  />
                  <div className="absolute bottom-4 left-4 border border-slate-200/80 bg-white px-3 py-1 rounded-md font-mono text-[9px] font-bold uppercase tracking-wider text-slate-700 shadow-sm">
                    Graduation {activeStudent.gradYear}
                  </div>
                </div>

                {/* Content Right */}
                <div className="p-6 md:p-8 md:col-span-7 space-y-6">
                  <div>
                    <h2 className="font-serif text-3xl font-extrabold text-slate-900">{activeStudent.name}</h2>
                    <p className="font-mono text-xs font-semibold uppercase tracking-wider text-accent mt-0.5">{activeStudent.major}</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-1">Biography</h3>
                    <p className="font-sans text-xs leading-relaxed text-slate-500">
                      {activeStudent.bio}
                    </p>
                  </div>

                  {/* Credentials Grids */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Internships */}
                    {activeStudent.internships.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                          <Briefcase className="h-3.5 w-3.5 text-accent" /> Internships
                        </h4>
                        <ul className="space-y-1 font-sans text-xs text-slate-500 list-disc list-inside">
                          {activeStudent.internships.map((intern, i) => (
                            <li key={i}>{intern}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Leadership */}
                    {activeStudent.leadership.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                          <Award className="h-3.5 w-3.5 text-accent" /> Leadership
                        </h4>
                        <ul className="space-y-1 font-sans text-xs text-slate-500 list-disc list-inside">
                          {activeStudent.leadership.map((lead, i) => (
                            <li key={i}>{lead}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Awards */}
                    {activeStudent.awards.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                          <Award className="h-3.5 w-3.5 text-accent" /> Honors & Awards
                        </h4>
                        <ul className="space-y-1 font-sans text-xs text-slate-500 list-disc list-inside">
                          {activeStudent.awards.map((award, i) => (
                            <li key={i}>{award}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Certifications */}
                    {activeStudent.certifications.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                          <GraduationCap className="h-3.5 w-3.5 text-accent" /> Certifications
                        </h4>
                        <ul className="space-y-1 font-sans text-xs text-slate-500 list-disc list-inside">
                          {activeStudent.certifications.map((cert, i) => (
                            <li key={i}>{cert}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Key Accomplishments */}
                  {activeStudent.achievements.length > 0 && (
                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      <h4 className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                        <Code className="h-3.5 w-3.5 text-accent" /> Key Accomplishments
                      </h4>
                      <ul className="space-y-1.5 font-sans text-xs text-slate-700">
                        {activeStudent.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-accent font-bold mt-0.5">•</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

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
    <div className="w-full bg-[#FAF9F6] pb-24 font-sans text-slate-700">
      {/* Header */}
      <section className="border-b border-slate-200/80 bg-gradient-to-b from-[#FAF9F6] to-[#E9EEF5] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 grid-pattern opacity-30" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 space-y-4">
          <div className="eyebrow-pill">
            <Star className="h-3 w-3 fill-accent text-accent" /> Student Excellence
          </div>
          <h1 className="font-serif text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Student Spotlight
          </h1>
          <p className="mx-auto max-w-xl font-sans text-sm text-slate-500 md:text-base leading-relaxed">
            Discover outstanding STEM students at Livingstone College—celebrating their internships, certifications, and research successes.
          </p>
        </div>
      </section>

      {/* Suspense Wrapper to handle search parameter operations */}
      <Suspense fallback={
        <div className="mx-auto max-w-7xl px-6 py-24 text-center font-mono text-sm text-slate-500">
          Loading student showcase directory...
        </div>
      }>
        <SpotlightContent />
      </Suspense>
    </div>
  );
}
