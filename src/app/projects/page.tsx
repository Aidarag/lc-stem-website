'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, ExternalLink, Code, Users, ClipboardCheck, Star, Award, Trophy, Calendar } from 'lucide-react';
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
      subtitle: p.subtitle ?? p.team.join(', '),
      description: p.description,
      image: p.image,
      imagePosition: p.imagePosition,
      imageQuality: p.imageQuality,
      imageUnoptimized: p.imageUnoptimized,
      technologies: p.technologies,
      outcomes: p.outcomes,
      demoUrl: p.demoUrl,
      githubUrl: p.githubUrl,
      demoText: p.demoText,
      githubText: p.githubText,
      team: p.team,
      isProject: true,
      award: p.award,
      date: p.date,
    })),
    ...competitions.map((c) => {
      const isHackathon = c.title.toLowerCase().includes('hackathon') || c.title.toLowerCase().includes('bowl');
      return {
        id: `comp-${c.id}`,
        type: (c.category ?? (isHackathon ? 'Hackathon' : 'Honors')) as FilterType,
        title: c.title,
        subtitle: c.subtitle,
        description: c.description,
        image: c.image,
        imagePosition: c.imagePosition,
        imageQuality: c.imageQuality,
        imageUnoptimized: c.imageUnoptimized,
        imageFit: c.imageFit,
        date: c.date,
        award: c.award,
        team: c.students,
        isProject: false,
        technologies: c.topics,
        outcomes: c.outcomes,
        demoUrl: c.link,
        githubUrl: undefined,
        demoText: undefined,
        githubText: undefined,
      };
    }),
  ];

  // Helper to determine demo link text based on content category
  const getDemoLinkText = (achievement: typeof achievementsList[0]) => {
    const titleLower = achievement.title.toLowerCase();
    const descLower = achievement.description.toLowerCase();
    const typeLower = (achievement.type || '').toLowerCase();

    // 1. Research Papers
    if (
      titleLower.includes('research') || 
      titleLower.includes('symposium') || 
      titleLower.includes('vulnerability') || 
      titleLower.includes('paper') ||
      descLower.includes('research paper') ||
      descLower.includes('findings') ||
      descLower.includes('study')
    ) {
      return 'View research paper';
    }

    // 2. Hackathons / Challenges
    if (
      typeLower === 'hackathon' || 
      titleLower.includes('hackathon') || 
      titleLower.includes('sprint') || 
      titleLower.includes('challenge') ||
      titleLower.includes('bowl')
    ) {
      return 'View presentation';
    }

    // 3. Projects
    if (achievement.isProject) {
      return 'View Project';
    }

    // Fallback
    return 'View presentation';
  };

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

  // Pick the MS-CC Hackathon first place win as the Large Featured Achievement
  const featuredAchievement = achievementsList.find((a) => a.id === 'comp-4') || achievementsList[0];

  // The remaining achievements to show in the list
  const showFeaturedHeader = activeFilter === 'All' && searchQuery === '';
  const gridAchievements = showFeaturedHeader
    ? filteredAchievements.filter((a) => a.id !== featuredAchievement.id)
    : filteredAchievements;

  return (
    <div className="w-full bg-[#FAF9F6] pb-24 font-sans text-foreground">
      {/* 01 — Dark Obsidian Hero */}
      <section className="relative hero-obsidian-bg border-b border-white/10 pt-32 pb-20 md:pt-40 md:pb-28 text-white text-center overflow-hidden">
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-5 right-1/4 w-96 h-96 rounded-full bg-pink-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 z-0 grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full glass-pill-badge px-4 py-2 text-xs sm:text-sm text-purple-200">
            <Trophy className="h-4 w-4 text-purple-400" /> Department Milestones
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-none">
            Achievements &amp; <span className="text-gradient-purple-pink">Projects</span>
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-normal">
            Discover outstanding student developments, hackathon victories, and academic awards celebrated by the LC STEM student community.
          </p>
        </div>
      </section>

      {/* 02 — Filters & Search */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between border border-gray-200/90 bg-white p-5 rounded-2xl shadow-sm">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {(['All', 'Projects', 'Hackathon', 'Honors'] as FilterType[]).map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`cursor-pointer px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all border ${
                    isActive
                      ? 'bg-purple-600 text-white border-purple-500 shadow-sm'
                      : 'bg-white border-gray-200 text-gray-600 hover:text-gray-900 hover:border-purple-300'
                  }`}
                >
                  {filter === 'All' ? 'All Achievements' : filter === 'Hackathon' ? 'Hackathons' : filter}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search achievements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-gray-200 pl-10 pr-4 py-2.5 text-sm bg-gray-50 focus:outline-none focus:border-purple-400 focus:bg-white transition-colors text-gray-900 placeholder:text-gray-400"
            />
          </div>
        </div>
      </section>

      {/* 03 — Large Featured Achievement */}
      {showFeaturedHeader && (
        <section className="mx-auto max-w-6xl px-6 pt-12">
          <div className="flex items-center justify-between border-b border-gray-200/80 pb-4 mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900 flex items-center gap-2.5">
              <Star className="h-6 w-6 text-purple-600" /> Highlight Achievement
            </h2>
            <span className="font-mono text-xs font-semibold text-gray-500 uppercase tracking-wider">Featured</span>
          </div>
          
          <ScrollReveal className="bg-white border border-gray-200/90 rounded-3xl grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-xl hover:shadow-2xl hover:border-purple-300 transition-all duration-300">
            {/* Achievement Image Left */}
            <div className="relative min-h-[320px] lg:col-span-6 border-b lg:border-b-0 lg:border-r border-gray-100 overflow-hidden">
              <Image
                src={featuredAchievement.image}
                alt={featuredAchievement.title}
                fill
                quality={featuredAchievement.imageQuality}
                unoptimized={featuredAchievement.imageUnoptimized}
                className={featuredAchievement.imageFit === 'contain' ? 'object-contain' : 'object-cover'}
                style={{ objectPosition: featuredAchievement.imagePosition || 'center' }}
                sizes="(max-w-1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <Trophy className="h-3.5 w-3.5" /> {featuredAchievement.award || 'Featured Victory'}
              </div>
            </div>

            {/* Achievement Details Right */}
            <div className="p-8 lg:p-12 lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="font-mono text-xs font-semibold text-gray-500">
                    {featuredAchievement.date || (featuredAchievement.isProject ? 'Active Project' : null)}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1 leading-tight">
                    {featuredAchievement.title}
                  </h2>
                  <p className="font-mono text-xs uppercase tracking-wider text-purple-600 font-bold mt-2">
                    {featuredAchievement.subtitle}
                  </p>
                </div>

                <p className="font-sans text-sm sm:text-base leading-relaxed text-gray-600">
                  {featuredAchievement.description}
                </p>

                {/* Competitors/Students */}
                <div className="border-t border-gray-100 pt-5 space-y-1.5">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-gray-900 flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-purple-600" /> Key Contributors
                  </span>
                  <p className="font-sans text-sm text-gray-600">{featuredAchievement.team.join(', ')}</p>
                </div>
              </div>

              <div className="pt-5 border-t border-gray-100">
                <span className="btn-gradient-lime inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider cursor-default">
                  <Award className="h-4 w-4" /> Official Award Recipient
                </span>
              </div>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* 04 — Achievement Grid */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        {showFeaturedHeader && (
          <div className="flex items-center justify-between border-b border-gray-200/80 pb-4 mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900">More Achievements</h3>
            <span className="font-mono text-xs font-semibold text-gray-500 uppercase tracking-wider">{gridAchievements.length} Results</span>
          </div>
        )}

        {gridAchievements.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {gridAchievements.map((achievement, index) => (
              <ScrollReveal
                key={achievement.id}
                delay={index * 0.05}
                className="group bg-white rounded-3xl border border-gray-200/90 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:border-purple-300 transition-all duration-300 h-full"
              >
                {/* Main Card Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Card Image */}
                    <div className="relative h-[240px] w-full overflow-hidden">
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        quality={achievement.imageQuality}
                        unoptimized={achievement.imageUnoptimized}
                        className={`${achievement.imageFit === 'contain' ? 'object-contain' : 'object-cover'} transition-transform duration-500 group-hover:scale-105`}
                        style={{ objectPosition: achievement.imagePosition || 'center' }}
                        sizes="(max-w-768px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Badge top-left */}
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-gray-800 shadow-md flex items-center gap-1.5 border border-white/40">
                        {achievement.isProject ? (
                          <><Code className="h-3.5 w-3.5 text-purple-600" /> Project</>
                        ) : achievement.type === 'Hackathon' ? (
                          <><Trophy className="h-3.5 w-3.5 text-amber-500" /> Hackathon Win</>
                        ) : (
                          <><Award className="h-3.5 w-3.5 text-purple-600" /> Honor</>
                        )}
                      </div>

                      {achievement.award && (
                        <div className="absolute bottom-4 left-4 max-w-[85%] bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3.5 py-1.5 rounded-full font-mono text-xs font-bold shadow-md flex items-center gap-1.5 border border-purple-400/30">
                          <Award className="h-3.5 w-3.5 shrink-0" />
                          <span className="truncate">{achievement.award}</span>
                        </div>
                      )}
                    </div>

                    {/* Card Info Body */}
                    <div className="p-7 space-y-5">
                      <div>
                        {achievement.date && (
                          <span className="font-mono text-xs font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md inline-flex items-center gap-1.5 mb-2.5 border border-purple-100">
                            <Calendar className="h-3.5 w-3.5 text-purple-600" /> {achievement.date}
                          </span>
                        )}
                        <h3 className="font-serif text-2xl font-extrabold text-gray-900 leading-snug group-hover:text-purple-700 transition-colors">
                          {achievement.title}
                        </h3>
                        {achievement.subtitle && (
                          <p className="font-mono text-xs font-bold uppercase tracking-wider text-purple-600 mt-1.5">
                            {achievement.subtitle}
                          </p>
                        )}
                      </div>

                      <p className="font-sans text-sm sm:text-base leading-relaxed text-gray-600">
                        {achievement.description}
                      </p>

                      {/* Tech / Topic Badges */}
                      {achievement.technologies && achievement.technologies.length > 0 && (
                        <div className="space-y-1.5 pt-1">
                          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                            {achievement.isProject ? 'Technologies Used' : 'Focus Areas & Topics'}
                          </span>
                          <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                            {achievement.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="border border-purple-200/80 bg-purple-50/70 px-3 py-1 rounded-full text-purple-700 font-semibold transition-colors hover:bg-purple-100/80"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Outcomes & Impact */}
                      {achievement.outcomes && (
                        <div className="bg-gradient-to-br from-slate-50 to-gray-50/80 border border-gray-200/90 p-4 rounded-2xl space-y-1.5 shadow-inner">
                          <span className="font-mono text-xs font-bold uppercase tracking-wider text-gray-900 flex items-center gap-1.5">
                            {achievement.isProject ? (
                              <ClipboardCheck className="h-4 w-4 text-purple-600" />
                            ) : (
                              <Trophy className="h-4 w-4 text-amber-500" />
                            )}
                            {achievement.isProject ? 'Outcomes & Deployment' : 'Impact & Recognition'}
                          </span>
                          <p className="font-sans text-sm text-gray-600 leading-relaxed">{achievement.outcomes}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Team Members Section */}
                  <div className="px-7 pb-5 pt-3 border-t border-gray-100 mt-auto">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-gray-900 flex items-center gap-1.5 mb-1">
                      <Users className="h-4 w-4 text-purple-600" /> Key Contributors
                    </span>
                    <p className="font-sans text-sm text-gray-600 font-medium">{achievement.team.join(', ')}</p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-7 py-4 bg-gray-50/70 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {achievement.demoUrl && (
                      <a
                        href={achievement.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-xs font-bold font-mono uppercase tracking-wider text-purple-600 hover:text-purple-800 transition-colors group/link"
                      >
                        {getDemoLinkText(achievement)}{' '}
                        <ExternalLink className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </a>
                    )}
                    {achievement.githubUrl && (
                      <a
                        href={achievement.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-xs font-bold font-mono uppercase tracking-wider text-purple-600 hover:text-purple-800 transition-colors group/link"
                      >
                        {achievement.githubText || 'View GitHub'}
                        <ExternalLink className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </a>
                    )}
                  </div>
                  <span className="font-mono text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                    LC STEM {achievement.type}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="border border-gray-200 bg-white p-16 text-center rounded-3xl shadow-sm max-w-xl mx-auto">
            <Code className="mx-auto h-12 w-12 text-gray-300 animate-pulse" />
            <h3 className="font-serif text-xl font-bold text-gray-900 mt-4">No Achievements Found</h3>
            <p className="font-sans text-sm text-gray-500 mt-2">
              We couldn&apos;t find any achievements matching your search. Try adjusting your filters.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
