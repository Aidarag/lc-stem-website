'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ExternalLink, Code, Users, ClipboardCheck, Star, Award, Trophy, Calendar, ArrowRight } from 'lucide-react';
import { studentProjects, competitions } from '@/data/stemData';
import ScrollReveal from '@/components/ui/ScrollReveal';

type FilterType = 'All' | 'Projects' | 'Hackathon' | 'Honors';

export default function AchievementsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Map and combine student projects and competitions into a single achievements list
  const achievementsList = [
    ...studentProjects.map((p) => ({
      id: `project-${p.id}`,
      type: 'Projects' as const,
      title: p.title,
      subtitle: p.team.join(', '),
      description: p.description,
      image: p.image,
      technologies: p.technologies,
      outcomes: p.outcomes,
      demoUrl: p.demoUrl,
      githubUrl: p.githubUrl,
      team: p.team,
      isProject: true,
      award: undefined,
      date: undefined,
    })),
    ...competitions.map((c) => {
      const isHackathon = c.title.toLowerCase().includes('hackathon') || c.title.toLowerCase().includes('bowl');
      return {
        id: `comp-${c.id}`,
        type: (isHackathon ? 'Hackathon' : 'Honors') as FilterType,
        title: c.title,
        subtitle: c.subtitle,
        description: c.description,
        image: c.image,
        date: c.date,
        award: c.award,
        team: c.students,
        isProject: false,
        technologies: undefined,
        outcomes: undefined,
        demoUrl: undefined,
        githubUrl: undefined,
      };
    }),
  ];

  // Filter achievements by category and search query
  const filteredAchievements = achievementsList.filter((achievement) => {
    const matchesCategory = activeFilter === 'All' || achievement.type === activeFilter;
    
    const matchesSearch =
      achievement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      achievement.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      achievement.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (achievement.technologies && achievement.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))) ||
      achievement.team.some((member) => member.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  // Pick the CIAA STEM Hackathon as the Large Featured Achievement
  const featuredAchievement = achievementsList.find((a) => a.id === 'comp-1') || achievementsList[0];

  // The remaining achievements to show in the list
  const showFeaturedHeader = activeFilter === 'All' && searchQuery === '';
  const gridAchievements = showFeaturedHeader
    ? filteredAchievements.filter((a) => a.id !== featuredAchievement.id)
    : filteredAchievements;

  return (
    <div className="w-full bg-[#FFFFFF] pb-24 font-sans text-foreground">
      {/* 01 — Hero */}
      <section className="border-b border-cool-gray bg-[#FAF9F6] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 grid-pattern opacity-40" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 space-y-4">
          <div className="eyebrow-pill">
            <Trophy className="h-3.5 w-3.5 text-accent-orange fill-accent-orange/10" /> Department Milestones
          </div>
          <h1 className="font-serif text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            Achievements
          </h1>
          <p className="mx-auto max-w-xl font-sans text-sm text-foreground/70 leading-relaxed">
            Discover outstanding student developments, hackathon victories, and clinical academic awards celebrated by the LC STEM student community.
          </p>
        </div>
      </section>

      {/* 02 — Filters & Search */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between border border-cool-gray bg-white p-4 rounded-2xl shadow-sm">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {(['All', 'Projects', 'Hackathon', 'Honors'] as FilterType[]).map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all border ${
                    isActive
                      ? 'bg-accent text-foreground border-accent-lime-hover/30 shadow-sm font-bold'
                      : 'bg-white border-cool-gray text-[#181818]/70 hover:text-foreground hover:border-foreground/30'
                  }`}
                >
                  {filter === 'All' ? 'All Achievements' : filter === 'Hackathon' ? 'Hackathons' : filter}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40" />
            <input
              type="text"
              placeholder="Search achievements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-cool-gray pl-10 pr-4 py-2 text-xs bg-[#FAF9F6] focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-foreground/45"
            />
          </div>
        </div>
      </section>

      {/* 03 — Large Featured Achievement */}
      {showFeaturedHeader && (
        <section className="mx-auto max-w-6xl px-6 pt-12">
          <div className="space-y-4 mb-6">
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent-orange font-bold flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 fill-accent-orange" /> Highlight Achievement
            </span>
          </div>
          
          <ScrollReveal className="premium-card-light rounded-2xl grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-md border-cool-gray bg-white">
            {/* Achievement Image Left */}
            <div className="relative min-h-[300px] lg:col-span-6 border-b lg:border-b-0 lg:border-r border-cool-gray bg-[#FAF9F6]">
              <Image
                src={featuredAchievement.image}
                alt={featuredAchievement.title}
                fill
                className="object-cover"
                sizes="(max-w-1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute top-4 left-4 border border-accent-orange-hover/20 bg-accent-orange text-white px-3 py-1 rounded-md font-mono text-[9px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Trophy className="h-3 w-3" /> {featuredAchievement.award || 'Featured Victory'}
              </div>
            </div>

            {/* Achievement Details Right */}
            <div className="p-8 lg:p-12 lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#181818]/50">
                    {featuredAchievement.date || 'Active Project'}
                  </span>
                  <h2 className="font-serif text-3xl font-extrabold text-foreground mt-1 leading-tight">
                    {featuredAchievement.title}
                  </h2>
                  <p className="font-mono text-xs uppercase tracking-wider text-primary font-bold mt-1.5">
                    {featuredAchievement.subtitle}
                  </p>
                </div>

                <p className="font-sans text-xs md:text-sm leading-relaxed text-foreground/70">
                  {featuredAchievement.description}
                </p>

                {/* Competitors/Students */}
                <div className="border-t border-cool-gray pt-6 space-y-1">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-primary" /> Key Contributors
                  </span>
                  <p className="font-sans text-xs text-foreground/70">{featuredAchievement.team.join(', ')}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-cool-gray">
                <span className="inline-flex items-center text-xs font-bold font-mono uppercase tracking-wider text-primary hover:text-accent-blue-hover">
                  Official Award Recipient <Award className="ml-1.5 h-4 w-4" />
                </span>
              </div>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* 04 — Achievement Grid */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        {showFeaturedHeader && (
          <h3 className="font-serif text-xl font-bold mb-6 text-foreground">More Achievements</h3>
        )}

        {gridAchievements.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gridAchievements.map((achievement, index) => (
              <ScrollReveal
                key={achievement.id}
                delay={index * 0.05}
                className="premium-card-light bg-white rounded-2xl border border-cool-gray flex flex-col justify-between overflow-hidden shadow-sm hover:-translate-y-1 hover:border-foreground/20 cursor-pointer"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-[220px] w-full border-b border-cool-gray bg-[#FAF9F6]">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      className="object-cover"
                      sizes="(max-w-768px) 100vw, 40vw"
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 border border-cool-gray bg-white/95 px-3 py-1 rounded-md font-mono text-[9px] font-bold uppercase tracking-wider text-foreground shadow-sm flex items-center gap-1">
                      {achievement.isProject ? (
                        <>
                          <Code className="h-3 w-3 text-primary" /> Project
                        </>
                      ) : achievement.type === 'Hackathon' ? (
                        <>
                          <Trophy className="h-3 w-3 text-accent-orange" /> Hackathon Win
                        </>
                      ) : (
                        <>
                          <Award className="h-3 w-3 text-accent-lavender-hover" /> Honor
                        </>
                      )}
                    </div>

                    {achievement.award && (
                      <div className="absolute bottom-4 left-4 border border-transparent bg-accent-orange text-white px-2.5 py-0.5 rounded-md font-mono text-[9px] font-bold shadow-sm">
                        {achievement.award}
                      </div>
                    )}
                  </div>

                  {/* Card Info */}
                  <div className="p-6 md:p-8 space-y-4">
                    <div>
                      {achievement.date && (
                        <span className="font-mono text-[9px] font-bold text-foreground/45 flex items-center gap-1.5 mb-1">
                          <Calendar className="h-3 w-3" /> {achievement.date}
                        </span>
                      )}
                      <h3 className="font-serif text-xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      {achievement.subtitle && (
                        <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-primary mt-1">
                          {achievement.subtitle}
                        </p>
                      )}
                    </div>

                    <p className="font-sans text-xs leading-relaxed text-foreground/70">
                      {achievement.description}
                    </p>

                    {/* Tech Badges (for Projects) */}
                    {achievement.technologies && (
                      <div className="flex flex-wrap gap-1.5 font-mono text-[9px] pt-1">
                        {achievement.technologies.map((tech) => (
                          <span key={tech} className="border border-cool-gray bg-[#FAF9F6] px-2 py-0.5 rounded-md text-foreground/60">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Outcomes (for Projects) */}
                    {achievement.outcomes && (
                      <div className="bg-[#FAF9F6] border border-cool-gray p-4 rounded-xl space-y-1">
                        <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-foreground flex items-center gap-1">
                          <ClipboardCheck className="h-3.5 w-3.5 text-primary" /> Outcomes
                        </span>
                        <p className="font-sans text-xs text-foreground/70">{achievement.outcomes}</p>
                      </div>
                    )}

                    {/* Team Members */}
                    <div className="border-t border-cool-gray pt-4 space-y-1">
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-primary" /> Team
                      </span>
                      <p className="font-sans text-xs text-foreground/70">{achievement.team.join(', ')}</p>
                    </div>
                  </div>
                </div>

                {/* Card Links */}
                {(achievement.demoUrl || achievement.githubUrl) && (
                  <div className="px-6 pb-6 md:px-8 md:pb-8 flex gap-4">
                    {achievement.demoUrl && (
                      <a
                        href={achievement.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-xs font-bold font-mono uppercase tracking-wider text-primary hover:text-accent-blue-hover group"
                      >
                        Visit Site <ExternalLink className="ml-1 h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    )}
                    {achievement.githubUrl && (
                      <a
                        href={achievement.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-xs font-bold font-mono uppercase tracking-wider text-primary hover:text-accent-blue-hover group"
                      >
                        GitHub <ExternalLink className="ml-1 h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    )}
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="border border-cool-gray bg-white p-16 text-center rounded-2xl shadow-sm max-w-xl mx-auto">
            <Code className="mx-auto h-12 w-12 text-foreground/20 animate-pulse" />
            <h3 className="font-serif text-xl font-bold text-foreground mt-4">No Achievements Found</h3>
            <p className="font-sans text-xs text-foreground/60 mt-2">
              We couldn't find any achievements or projects matching "{searchQuery}" under the category "{activeFilter}". Try adjusting your filters.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
