'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, BookOpen, Award, CheckCircle2, Briefcase, Sparkles, ArrowRight, Star } from 'lucide-react';
import { academicPrograms, AcademicProgram } from '@/data/stemData';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState<AcademicProgram['name']>('Computer Information Systems');
  const program = academicPrograms.find((p) => p.name === activeTab) || academicPrograms[0];

  return (
    <div className="w-full bg-[#FAF9F6] pb-24 font-sans text-slate-700">
      {/* Header */}
      <section className="border-b border-slate-200/80 bg-gradient-to-b from-[#FAF9F6] to-[#E9EEF5] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 grid-pattern opacity-30" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 space-y-4">
          <div className="eyebrow-pill">
            <Star className="h-3 w-3 fill-accent text-accent" /> Curriculum Tracks
          </div>
          <h1 className="font-serif text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Academic Programs
          </h1>
          <p className="mx-auto max-w-xl font-sans text-sm text-slate-500 md:text-base leading-relaxed">
            Choose your specialization and develop critical skills through advanced lab courses, project building, and corporate mentorship.
          </p>
        </div>
      </section>

      {/* Tabs selector */}
      <section className="mx-auto max-w-7xl px-6 pt-12 md:pt-16">
        <div className="flex flex-wrap gap-2 border-b border-slate-200/80 pb-6 justify-center md:justify-start">
          {academicPrograms.map((p) => {
            const isActive = activeTab === p.name;
            return (
              <button
                key={p.name}
                onClick={() => setActiveTab(p.name)}
                className={`relative rounded-full border px-5 py-2.5 font-sans text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'border-primary bg-primary text-white shadow-sm'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {p.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* Program Details View */}
      <section className="mx-auto max-w-7xl px-6 pt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Column: Description & Highlights */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif text-3xl font-extrabold text-slate-900 md:text-4xl">{program.name}</h2>
                <p className="font-sans text-sm leading-relaxed text-slate-500">{program.overview}</p>
              </div>

              {/* Course/Track Highlights */}
              <div className="premium-card-light p-6 md:p-8 rounded-2xl bg-white space-y-6 shadow-md border-slate-100">
                <h3 className="font-serif text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent" /> Track Highlights
                </h3>
                <ul className="space-y-4 font-sans text-xs md:text-sm text-slate-600">
                  {program.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Skills & Placements */}
            <div className="lg:col-span-5 space-y-8">
              {/* Skills Card */}
              <div className="premium-card-light p-6 md:p-8 rounded-2xl bg-white space-y-6 shadow-sm border-slate-100">
                <h3 className="font-serif text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Code className="h-5 w-5 text-accent" /> Professional Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {program.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="border border-slate-200 bg-slate-50 text-slate-600 px-3 py-1.5 rounded-full font-mono text-[10px] font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Careers Card */}
              <div className="premium-card-light p-6 md:p-8 rounded-2xl bg-white space-y-6 shadow-sm border-slate-100">
                <h3 className="font-serif text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-accent" /> Career Paths
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs md:text-sm text-slate-600">
                  {program.careers.map((career, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-accent rounded-full" />
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
        <ScrollReveal className="premium-card-light p-8 md:p-12 text-center rounded-2xl shadow-md border-slate-100 bg-white">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="font-serif text-2xl font-bold text-slate-900">See What Our Students Are Achieving</h3>
            <p className="font-sans text-xs leading-relaxed text-slate-500">
              Every day, students in {activeTab} build research portfolios, secure corporate internships, and complete hackathons. Meet outstanding student achievers in this concentration.
            </p>
            <div className="pt-4">
              <Link
                href={`/spotlight?major=${encodeURIComponent(activeTab)}`}
                className="premium-btn group rounded-full bg-accent hover:bg-accent/90 px-6 py-3 text-xs font-semibold text-white shadow-md"
              >
                Meet {activeTab} Students <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
