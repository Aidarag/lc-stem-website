import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink, ClipboardCheck, Trophy } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { StudentProject, Competition } from '@/data/stemData';

interface AchievementsSectionProps {
  featuredProject: StudentProject;
  featuredHackathon: Competition;
}

export default function AchievementsSection({ featuredProject, featuredHackathon }: AchievementsSectionProps) {
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
              Explore independent student software architectures and medals co-authored by our team.
            </p>
          </div>
          <Link
            href="/projects"
            className="btn-gradient-lime font-mono text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0B051D] px-6 py-3.5 rounded-full shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
          >
            Explore Achievements <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Box: Featured Project (2/3 Span) */}
          <ScrollReveal className="lg:col-span-8 glass-card-dark rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-full">
            <div className="relative h-[280px] md:h-auto md:w-1/2 border-b md:border-b-0 md:border-r border-white/10 bg-[#12072B] shrink-0">
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                className="object-cover"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
              <div className="absolute top-4 left-4 border border-purple-400/40 bg-purple-600 text-[#e3fc51] px-4 py-1.5 rounded-full font-mono text-xs font-extrabold uppercase tracking-wider shadow-md">
                Featured Project
              </div>
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-between flex-grow">
              <div className="space-y-5">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                    {featuredProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 font-mono text-xs mt-3">
                    {featuredProject.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="border border-purple-400/30 bg-purple-600/30 px-3 py-1 rounded-full text-purple-200 font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="font-sans text-sm sm:text-base leading-relaxed text-gray-200">
                  {featuredProject.description}
                </p>

                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-1.5">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-300 flex items-center gap-2">
                    <ClipboardCheck className="h-4 w-4 text-purple-400" /> Outcomes
                  </span>
                  <p className="font-sans text-sm sm:text-base text-gray-200 leading-normal">
                    {featuredProject.outcomes}
                  </p>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-white/10 flex gap-5">
                {featuredProject.demoUrl && (
                  <a href={featuredProject.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-xs sm:text-sm font-extrabold font-mono uppercase tracking-wider text-[#e3fc51] hover:text-white group">
                    Live Site <ExternalLink className="ml-1.5 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}
                {featuredProject.githubUrl && (
                  <a href={featuredProject.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-xs sm:text-sm font-extrabold font-mono uppercase tracking-wider text-purple-300 hover:text-white group">
                    GitHub <ExternalLink className="ml-1.5 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Box: Hackathon / Medal Victory (1/3 Span) */}
          <ScrollReveal className="lg:col-span-4 glass-card-dark bg-gradient-to-b from-purple-950/50 via-purple-900/15 to-black border border-purple-500/25 rounded-3xl p-8 md:p-10 text-white flex flex-col justify-between h-full shadow-2xl">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <Trophy className="h-8 w-8 text-[#e3fc51]" />
                <span className="btn-gradient-lime font-mono text-xs uppercase tracking-widest text-[#0B051D] px-3.5 py-1 rounded-full font-extrabold shadow-md">
                  {featuredHackathon.award}
                </span>
              </div>

              <div className="space-y-3">
                <span className="font-mono text-xs text-gray-400 font-semibold">{featuredHackathon.date}</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold leading-snug">{featuredHackathon.title}</h3>
                <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed">
                  {featuredHackathon.description}
                </p>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between text-gray-400 font-mono text-xs">
              <span>Contributors: {featuredHackathon.students.slice(0, 2).join(', ')}</span>
              <Link href="/projects?filter=Hackathon" className="text-purple-300 hover:text-white inline-flex items-center gap-1 font-bold">
                Details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
