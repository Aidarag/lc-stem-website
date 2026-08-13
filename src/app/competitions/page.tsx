'use client';

import Image from 'next/image';
import { Award, Calendar, Users, Trophy, Star } from 'lucide-react';
import { competitions } from '@/data/stemData';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function CompetitionsPage() {
  return (
    <div className="w-full bg-[#FAF9F6] pb-24 font-sans text-slate-700">
      {/* Header */}
      <section className="border-b border-slate-200/80 bg-gradient-to-b from-[#FAF9F6] to-[#E9EEF5] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 grid-pattern opacity-30" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 space-y-4">
          <div className="eyebrow-pill">
            <Star className="h-3 w-3 fill-accent text-accent" /> Department Medals
          </div>
          <h1 className="font-serif text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Competitions & Awards
          </h1>
          <p className="mx-auto max-w-xl font-sans text-sm text-slate-500 md:text-base leading-relaxed">
            Livingstone STEM students compete on national stages, earning research awards, scholarships, and hackathon victories.
          </p>
        </div>
      </section>

      {/* Hall of Fame Callout */}
      <section className="mx-auto max-w-5xl px-6 pt-12">
        <ScrollReveal className="premium-card-light p-8 rounded-2xl bg-white shadow-md border-slate-100 flex flex-col md:flex-row items-center gap-6">
          <div className="p-4 border border-slate-200 bg-slate-50 text-accent rounded-xl shrink-0">
            <Trophy className="h-10 w-10 animate-bounce" />
          </div>
          <div className="space-y-2">
            <h2 className="font-serif text-2xl font-bold text-slate-900 flex items-center gap-2">
              The Trophy Cabinet <span className="font-mono text-[9px] font-bold text-accent border border-accent/20 px-1.5 py-0.5 rounded-md bg-amber-50">Department Records</span>
            </h2>
            <p className="font-sans text-xs md:text-sm leading-relaxed text-slate-500">
              Over the past three academic years, Livingstone College STEM students have earned over **$25,000** in competitive scholarship awards and placed first in three regional hackathons. Our undergraduate research presentations have co-authored reviews featured in prominent national medical symposiums.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Competitions Grid */}
      <section className="mx-auto max-w-5xl px-6 py-12 space-y-12">
        {competitions.map((comp, index) => {
          const isEven = index % 2 === 0;
          return (
            <ScrollReveal
              key={comp.id}
              className="premium-card-light bg-white grid grid-cols-1 md:grid-cols-12 overflow-hidden rounded-2xl shadow-md border-slate-100"
            >
              {/* Photo Panel (alternate left/right on md screens) */}
              <div className={`relative h-[250px] md:h-auto md:col-span-5 border-b md:border-b-0 border-slate-100 ${
                isEven ? 'md:order-1 md:border-r' : 'md:order-2 md:border-l'
              } bg-slate-50`}>
                <Image
                  src={comp.image}
                  alt={comp.title}
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 35vw"
                />
                <div className="absolute top-4 left-4 border border-slate-200/80 bg-white px-3 py-1 rounded-md font-mono text-[9px] font-bold uppercase tracking-wider text-slate-700 shadow-sm">
                  {comp.award}
                </div>
              </div>

              {/* Text Panel */}
              <div className={`p-6 md:p-8 md:col-span-7 flex flex-col justify-between space-y-6 ${
                isEven ? 'md:order-2' : 'md:order-1'
              }`}>
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 font-mono text-[9px] text-slate-400">
                      <span className="text-accent font-semibold flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" /> {comp.date}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-extrabold text-slate-900 leading-snug">{comp.title}</h3>
                    <p className="font-mono text-xs uppercase tracking-wider text-accent font-bold">{comp.subtitle}</p>
                  </div>

                  <p className="font-sans text-xs leading-relaxed text-slate-500">
                    {comp.description}
                  </p>

                  {/* Student Team */}
                  <div className="border-t border-slate-100 pt-4 space-y-1">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-accent" /> Competitors
                    </span>
                    <p className="font-sans text-xs text-slate-500">{comp.students.join(', ')}</p>
                  </div>
                </div>

                <div className="flex gap-2 items-center text-accent font-mono text-[9px] font-bold uppercase tracking-wider border-t border-slate-100 pt-4">
                  <Star className="h-3.5 w-3.5 fill-accent" /> Official Recognition Ceremony Recipient
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </section>
    </div>
  );
}
