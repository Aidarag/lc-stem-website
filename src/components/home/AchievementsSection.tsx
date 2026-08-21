import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ClipboardCheck, Trophy } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Competition } from '@/data/stemData';

interface AchievementsSectionProps {
  featuredProject: Competition;
}

export default function AchievementsSection({ featuredProject }: AchievementsSectionProps) {
  return (
    <section className="relative bg-[#070312] py-24 md:py-32 border-b border-white/10 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 grid-pattern-dark opacity-20 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full glass-pill-badge px-4 py-2 text-xs sm:text-sm text-purple-200">
              <Trophy className="h-4 w-4 text-[#e3fc51] fill-[#e3fc51]/20" /> Portfolio
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
              Achievements & <span className="text-gradient-purple-pink">Impact</span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-gray-300">
              Explore independent student software architectures and hackathon victories co-authored by our team.
            </p>
          </div>
          <Link
            href="/projects"
            className="btn-gradient-lime font-mono text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0B051D] px-6 py-3.5 rounded-full shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
          >
            Explore Achievements <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Full Width Featured Project Showcase */}
        <div className="w-full">
          <ScrollReveal className="w-full glass-card-dark rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[500px]">
            {/* Image on Left (50% width on desktop) */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-auto lg:w-1/2 border-b lg:border-b-0 lg:border-r border-white/10 bg-[#12072B] shrink-0">
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 border border-purple-400/40 bg-purple-600 text-[#e3fc51] px-4 py-1.5 rounded-full font-mono text-xs font-extrabold uppercase tracking-wider shadow-md">
                Featured Achievement
              </div>
            </div>

            {/* Details on Right (50% width on desktop) */}
            <div className="p-8 md:p-12 flex flex-col justify-between flex-grow">
              <div className="space-y-6">
                <div>
                  <span className="btn-gradient-lime font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#0B051D] px-3.5 py-1 rounded-full font-extrabold shadow-md inline-block">
                    {featuredProject.award}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug mt-4">
                    {featuredProject.title}
                  </h3>
                  <p className="font-mono text-xs text-purple-300 font-semibold mt-2">
                    {featuredProject.subtitle}
                  </p>
                  
                  {/* Topics / Tags */}
                  {featuredProject.topics && featuredProject.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 font-mono text-[11px] mt-4">
                      {featuredProject.topics.map((topic) => (
                        <span key={topic} className="border border-purple-400/30 bg-purple-600/30 px-3 py-1 rounded-full text-purple-200 font-semibold">
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <p className="font-sans text-sm sm:text-base leading-relaxed text-gray-200">
                  {featuredProject.description}
                </p>

                {/* Outcomes box */}
                {featuredProject.outcomes && (
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-300 flex items-center gap-2">
                      <ClipboardCheck className="h-4 w-4 text-purple-400" /> Outcomes
                    </span>
                    <p className="font-sans text-sm sm:text-base text-gray-200 leading-normal">
                      {featuredProject.outcomes}
                    </p>
                  </div>
                )}

                {/* Team contributors */}
                <div className="pt-4 border-t border-white/10 space-y-1.5">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Team Contributors</span>
                  <p className="font-sans text-sm text-purple-200 font-semibold">
                    {featuredProject.students.join(', ')}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between text-gray-400 font-mono text-xs">
                <span>Date: {featuredProject.date}</span>
                <Link href="/projects?filter=Hackathon" className="text-[#e3fc51] hover:text-white inline-flex items-center gap-1.5 font-bold">
                  View All Achievements <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
