'use client';

import Image from 'next/image';
import { Award, Calendar, Users, Trophy, Star } from 'lucide-react';
import { competitions } from '@/data/stemData';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function CompetitionsPage() {
  return (
    <div className="w-full bg-[#FAF9F6] pb-24 font-sans text-gray-700">
      {/* Header — Dark Obsidian Hero */}
      <section className="relative hero-obsidian-bg border-b border-white/10 pt-32 pb-20 md:pt-40 md:pb-28 text-white text-center overflow-hidden">
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-5 right-1/4 w-80 h-80 rounded-full bg-pink-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 z-0 grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full glass-pill-badge px-4 py-2 text-xs sm:text-sm text-purple-200">
            <Star className="h-4 w-4 text-purple-400 fill-purple-400" /> Department Medals
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-none">
            Competitions &amp; <span className="text-gradient-purple-pink">Awards</span>
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-normal">
            Livingstone STEM students compete on national stages, earning research awards, scholarships, and hackathon victories.
          </p>
        </div>
      </section>

      {/* Hall of Fame Callout */}
      <section className="mx-auto max-w-5xl px-6 pt-12">
        <ScrollReveal className="bg-white border border-gray-200/90 p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-6 hover:border-purple-200 transition-all duration-300">
          <div className="p-5 border border-purple-200 bg-purple-50 text-purple-600 rounded-2xl shrink-0">
            <Trophy className="h-10 w-10" />
          </div>
          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900 flex items-center gap-3">
              The Trophy Cabinet
              <span className="font-mono text-xs font-bold text-purple-600 border border-purple-200 px-2.5 py-1 rounded-full bg-purple-50">Community Records</span>
            </h2>
            <p className="font-sans text-sm sm:text-base leading-relaxed text-gray-600">
              Over the past three academic years, LC STEM student teams have earned over <strong>$25,000</strong> in competitive scholarship awards and placed first in three regional hackathons. Our undergraduate research presentations have co-authored reviews featured in prominent national medical symposiums.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Competitions Grid */}
      <section className="mx-auto max-w-5xl px-6 py-12 space-y-10">
        {competitions.map((comp, index) => {
          const isEven = index % 2 === 0;
          return (
            <ScrollReveal
              key={comp.id}
              className="group bg-white grid grid-cols-1 md:grid-cols-12 overflow-hidden rounded-3xl shadow-xl border border-gray-200/90 hover:shadow-2xl hover:border-purple-300 transition-all duration-300"
            >
              {/* Photo Panel (alternate left/right on md screens) */}
              <div className={`relative h-[280px] md:h-auto md:col-span-5 overflow-hidden ${
                isEven ? 'md:order-1' : 'md:order-2'
              }`}>
                <Image
                  src={comp.image}
                  alt={comp.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider shadow-md">
                  {comp.award}
                </div>
              </div>

              {/* Text Panel */}
              <div className={`p-8 md:p-10 md:col-span-7 flex flex-col justify-between space-y-6 ${
                isEven ? 'md:order-2' : 'md:order-1'
              }`}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 font-mono text-xs text-gray-500">
                      <span className="text-purple-600 font-semibold flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" /> {comp.date}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug group-hover:text-purple-700 transition-colors">{comp.title}</h3>
                    <p className="font-mono text-xs uppercase tracking-wider text-purple-600 font-bold">{comp.subtitle}</p>
                  </div>

                  <p className="font-sans text-sm sm:text-base leading-relaxed text-gray-600">
                    {comp.description}
                  </p>

                  {/* Student Team */}
                  <div className="border-t border-gray-100 pt-5 space-y-1.5">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-gray-900 flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-purple-600" /> Competitors
                    </span>
                    <p className="font-sans text-sm text-gray-600">{comp.students.join(', ')}</p>
                  </div>
                </div>

                <div className="flex gap-2 items-center border-t border-gray-100 pt-5">
                  <span className="btn-gradient-lime inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider">
                    <Star className="h-3.5 w-3.5" /> Official Recognition Recipient
                  </span>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </section>
    </div>
  );
}
