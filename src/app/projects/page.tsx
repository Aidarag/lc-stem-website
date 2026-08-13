'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, ExternalLink, Code, Users, ClipboardCheck, Star } from 'lucide-react';
import { studentProjects } from '@/data/stemData';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects by title, description, or technologies
  const filteredProjects = studentProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  return (
    <div className="w-full bg-[#FAF9F6] pb-24 font-sans text-slate-700">
      {/* Header */}
      <section className="border-b border-slate-200/80 bg-gradient-to-b from-[#FAF9F6] to-[#E9EEF5] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 grid-pattern opacity-30" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 space-y-4">
          <div className="eyebrow-pill">
            <Star className="h-3 w-3 fill-accent text-accent" /> Student Engineering
          </div>
          <h1 className="font-serif text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Student Projects
          </h1>
          <p className="mx-auto max-w-xl font-sans text-sm text-slate-500 md:text-base leading-relaxed">
            Explore advanced technical applications designed, developed, and deployed by Livingstone College undergraduate students.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="mx-auto max-w-4xl px-6 pt-12">
        <div className="relative border border-slate-200 bg-white p-4 rounded-2xl shadow-sm">
          <Search className="absolute left-7 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by project title, description, or technologies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-slate-200 pl-12 pr-4 py-2.5 font-sans text-xs bg-[#FAF9F6] focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </section>

      {/* Projects List */}
      <section className="mx-auto max-w-4xl px-6 py-12 space-y-12">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={index * 0.05}
              className="premium-card-light bg-white grid grid-cols-1 md:grid-cols-12 overflow-hidden rounded-2xl shadow-md border-slate-100"
            >
              {/* Cover Image Left */}
              <div className="relative h-[250px] md:h-auto md:col-span-5 border-b md:border-b-0 md:border-r border-slate-100 bg-slate-50">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 35vw"
                />
              </div>

              {/* Info Right */}
              <div className="p-6 md:p-8 md:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900 leading-snug">{project.title}</h3>
                    
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 font-mono text-[9px] mt-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="border border-slate-200 bg-slate-50 px-2.5 py-1 rounded-md text-slate-500">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="font-sans text-xs leading-relaxed text-slate-500">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-accent" /> Student Team
                      </span>
                      <p className="font-sans text-xs text-slate-500">{project.team.join(', ')}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                        <ClipboardCheck className="h-3.5 w-3.5 text-accent" /> Outcomes
                      </span>
                      <p className="font-sans text-xs text-slate-500">{project.outcomes}</p>
                    </div>
                  </div>
                </div>

                {/* Project links */}
                <div className="flex gap-4 pt-4 border-t border-slate-100">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-xs font-bold font-mono uppercase tracking-wider text-primary hover:text-accent group"
                    >
                      Visit Live Site <ExternalLink className="ml-1 h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-xs font-bold font-mono uppercase tracking-wider text-primary hover:text-accent group"
                    >
                      View GitHub <ExternalLink className="ml-1 h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))
        ) : (
          <div className="border-2 border-dashed border-slate-200 bg-white p-16 text-center rounded-2xl shadow-sm">
            <Code className="mx-auto h-12 w-12 text-slate-300 animate-pulse" />
            <h3 className="font-serif text-xl font-bold text-slate-900 mt-4">No Projects Found</h3>
            <p className="font-sans text-xs text-slate-500 mt-2 max-w-sm mx-auto">
              We couldn't find any student projects matching your criteria. Try adjusting your search query.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
