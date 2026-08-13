'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Briefcase, Award, ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import { academicPrograms, AcademicProgram } from '@/data/stemData';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState<AcademicProgram['name']>('Computer Information Systems');
  const program = academicPrograms.find((p) => p.name === activeTab) || academicPrograms[0];

  return (
    <div className="w-full bg-[#FAF9F6] pb-24 font-sans text-gray-700">

      {/* Hero — Dark Obsidian */}
      <section className="relative hero-obsidian-bg border-b border-white/10 pt-32 pb-20 md:pt-40 md:pb-28 text-white text-center overflow-hidden">
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-5 right-1/4 w-80 h-80 rounded-full bg-pink-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 z-0 grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full glass-pill-badge px-4 py-2 text-xs sm:text-sm text-purple-200">
            <Star className="h-4 w-4 text-purple-400 fill-purple-400" /> Curriculum Tracks
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-none">
            Academic <span className="text-gradient-purple-pink">Programs</span>
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-normal">
            Choose your specialization and develop critical skills through advanced lab courses, project building, and corporate mentorship.
          </p>
        </div>
      </section>

      {/* Program Tabs */}
      <section className="mx-auto max-w-7xl px-6 pt-12 md:pt-16">
        <div className="flex flex-wrap gap-2.5 justify-center md:justify-start pb-8 border-b border-gray-200/80">
          {academicPrograms.map((p) => {
            const isActive = activeTab === p.name;
            return (
              <button
                key={p.name}
                onClick={() => setActiveTab(p.name)}
                className={`relative rounded-full border px-6 py-3 font-mono text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'border-purple-500 bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                    : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:border-purple-300'
                }`}
              >
                {isActive && (
                  <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-lime-400 shadow-sm" />
                )}
                {p.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* Program Details View */}
      <section className="mx-auto max-w-7xl px-6 pt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
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
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Meet Students CTA */}
      <section className="mx-auto max-w-7xl px-6 pt-16">
        <ScrollReveal className="relative bg-white border border-gray-200/90 rounded-3xl shadow-2xl overflow-hidden">
          {/* Decorative gradient bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-purple-100/50 blur-3xl pointer-events-none" />

          <div className="relative z-10 p-10 md:p-14 text-center max-w-3xl mx-auto space-y-5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-purple-700">
              <Star className="h-3.5 w-3.5 fill-purple-600 text-purple-600" /> Student Excellence
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              See What Our Students Are Achieving
            </h3>
            <p className="font-sans text-sm sm:text-base leading-relaxed text-gray-600">
              Every day, students in <strong>{activeTab}</strong> build research portfolios, secure corporate internships, and complete hackathons. Meet outstanding student achievers in this concentration.
            </p>
            <div className="pt-2">
              <Link
                href={`/spotlight?major=${encodeURIComponent(activeTab)}`}
                className="btn-gradient-lime inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm sm:text-base font-extrabold tracking-wide shadow-xl transition-all"
              >
                Meet {activeTab} Students <ArrowRight className="h-5 w-5 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
