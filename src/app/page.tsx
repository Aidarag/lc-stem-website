'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Code, Award, Calendar, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StatCounter from '@/components/ui/StatCounter';
import { BentoGrid, BentoCard } from '@/components/ui/BentoGrid';
import { studentSpotlights, studentProjects, competitions, newsItems, upcomingEvents } from '@/data/stemData';

export default function Home() {
  const featuredStudent = studentSpotlights.find((s) => s.featured) || studentSpotlights[0];
  const featuredProjects = studentProjects.filter((p) => p.featured);
  const recentNews = newsItems.slice(0, 2);
  const events = upcomingEvents.slice(0, 3);

  return (
    <div className="w-full">
      {/* 1. Hero Section (Immersive Dark with Glowing Accents) */}
      <section className="relative overflow-hidden bg-background-dark text-foreground-dark py-24 md:py-32">
        {/* Glow Spots */}
        <div className="glowing-spot bg-accent/20 w-[400px] h-[400px] top-[-100px] right-[10%] blur-[120px] rounded-full" />
        <div className="glowing-spot bg-primary/20 w-[300px] h-[300px] bottom-[-50px] left-[5%] blur-[100px] rounded-full" />
        <div className="glowing-spot bg-accent-pink/10 w-[250px] h-[250px] top-[20%] left-[40%] blur-[100px] rounded-full" />

        {/* Tech Grid Backdrop */}
        <div className="absolute inset-0 z-0 grid-pattern-dark opacity-40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-4xl space-y-6">
            <div className="eyebrow-pill-dark">
              <Star className="h-3 w-3 fill-accent text-accent animate-pulse" /> Livingstone College STEM Hub
            </div>

            <h1 className="font-serif text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.1]">
              Engineering the <br />
              <span className="bg-gradient-to-r from-accent via-accent-pink to-accent-gold bg-clip-text text-transparent">
                Innovators
              </span> of Tomorrow.
            </h1>

            <p className="max-w-2xl font-sans text-base leading-relaxed text-slate-400 md:text-lg">
              From freshman hackathons to postgraduate oncology research, our students are rewriting what is possible. Explore the official showcase of Livingstone College STEM excellence.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/programs"
                className="premium-btn group rounded-full bg-primary hover:bg-primary/90 text-white px-6 py-3.5 text-sm font-semibold tracking-wide shadow-md"
              >
                Explore Programs <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/spotlight"
                className="premium-btn rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 text-sm font-semibold tracking-wide"
              >
                Meet the Students
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <ScrollReveal delay={0.2} yOffset={24} className="mt-16 premium-card-dark border-white/5 shadow-2xl p-8 rounded-2xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="pt-4 md:pt-0">
                <h3 className="font-serif text-4xl font-extrabold text-white md:text-5xl">
                  <StatCounter end={88} suffix="%" />
                </h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-slate-400">Summer Internship Rate</p>
              </div>
              <div className="pt-4 md:pt-0 animate-pulse">
                <h3 className="font-serif text-4xl font-extrabold text-accent-pink md:text-5xl">
                  <StatCounter end={10000} prefix="$" suffix="+" />
                </h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-slate-400">Hackathon Cash Prizes</p>
              </div>
              <div className="pt-4 md:pt-0">
                <h3 className="font-serif text-4xl font-extrabold text-white md:text-5xl">
                  <StatCounter end={4} />
                </h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-slate-400">STEM Concentrations</p>
              </div>
              <div className="pt-4 md:pt-0">
                <h3 className="font-serif text-4xl font-extrabold text-white md:text-5xl">
                  <StatCounter end={15} suffix="+" />
                </h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-slate-400">Active Research Projects</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Welcome Bento Grid Section (Contrast Clean White) */}
      <section className="bg-white py-20 md:py-28 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal className="max-w-3xl space-y-4 mb-16">
            <div className="eyebrow-pill">
              <Star className="h-3 w-3 fill-accent text-accent" /> Department overview
            </div>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Welcome to Livingstone STEM
            </h2>
            <p className="font-sans text-sm text-slate-500 md:text-base leading-relaxed">
              Livingstone College STEM is a community of hands-on builders, analysts, and medical scientists. We believe that real excellence is forged in the lab and proven in the field.
            </p>
          </ScrollReveal>

          <BentoGrid>
            {/* Bento Card 1: Main Welcome Text */}
            <BentoCard colSpan="col-span-2" className="bg-slate-50/50 border-slate-100 shadow-sm p-8">
              <div className="flex flex-col justify-between h-full space-y-4">
                <div className="space-y-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">Our Mission</span>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">Unlocking Academic Potential</h3>
                  <p className="font-sans text-xs leading-relaxed text-slate-500">
                    Through state-of-the-art laboratory research, corporate partnerships, and competitive hackathons, we offer undergraduate students from all backgrounds a launching pad to global STEM leadership.
                  </p>
                </div>
                <Link href="/about" className="inline-flex items-center text-xs font-semibold font-mono uppercase tracking-wider text-primary hover:text-accent group">
                  Learn About Our History <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </BentoCard>

            {/* Bento Card 2: Callout Metric (Dark Theme Accent) */}
            <BentoCard variant="dark" className="bg-[#0b132b] border-white/5">
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-start">
                  <Award className="h-5 w-5 text-accent-pink" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400">Award</span>
                </div>
                <div>
                  <h3 className="font-serif text-4xl font-extrabold text-white">Top 8%</h3>
                  <p className="mt-2 font-sans text-[11px] text-slate-400 leading-normal">
                    Ranked among regional institutions for undergraduate NIH research fellowship placements.
                  </p>
                </div>
              </div>
            </BentoCard>

            {/* Bento Card 3: Academic Programs Quick-Link */}
            <BentoCard className="bg-white border-slate-100 shadow-sm">
              <div className="flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <BookOpen className="h-5 w-5 text-accent" />
                  <h3 className="font-serif text-lg font-bold text-slate-900">Programs</h3>
                  <p className="font-sans text-xs text-slate-500 leading-normal">
                    Choose CIS, Biology, Mathematics, or Quantitative Business.
                  </p>
                </div>
                <Link href="/programs" className="premium-btn rounded-lg bg-slate-900 hover:bg-slate-800 py-2.5 text-center text-xs text-white shadow-sm">
                  Browse Concentrations
                </Link>
              </div>
            </BentoCard>

            {/* Bento Card 4: Dean Quote */}
            <BentoCard colSpan="col-span-2" className="bg-slate-50/50 border-slate-100 shadow-sm p-8">
              <div className="flex flex-col justify-between h-full space-y-4">
                <blockquote className="font-sans italic text-xs md:text-sm text-slate-600 leading-relaxed">
                  "Our graduates leave not just with degrees, but with portfolios of real-world software, published scientific research, and professional certifications that position them ahead of the competition on day one."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full border border-slate-200 bg-slate-100 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] font-bold bg-[#0f2537] text-white">DR</div>
                  </div>
                  <div>
                    <cite className="font-serif text-xs font-bold text-slate-900 not-italic">Dr. Sarah Jenkins</cite>
                    <p className="font-mono text-[9px] text-slate-400 uppercase tracking-wider">Department Chair</p>
                  </div>
                </div>
              </div>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

      {/* 3. Featured Student Spotlight Section (Premium Light Gray Contrast) */}
      <section className="bg-slate-50/50 py-20 md:py-28 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-4">
              <div className="eyebrow-pill">
                <Star className="h-3 w-3 fill-accent text-accent" /> Outstanding Achiever
              </div>
              <h2 className="font-serif text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Featured Student Spotlight
              </h2>
            </div>
            <Link
              href="/spotlight"
              className="premium-btn rounded-full border border-slate-200 bg-white hover:bg-slate-50 px-5 py-3 text-xs font-semibold text-slate-700 shadow-sm self-start md:self-auto"
            >
              View Student Directory <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </div>

          <ScrollReveal className="premium-card-light rounded-2xl grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-lg border-slate-200/60 bg-white">
            {/* Student Photo */}
            <div className="relative min-h-[350px] lg:col-span-5 border-b lg:border-b-0 lg:border-r border-slate-100 bg-slate-50">
              <Image
                src={featuredStudent.photo}
                alt={featuredStudent.name}
                fill
                className="object-cover"
                sizes="(max-w-1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute bottom-4 left-4 border border-slate-200/80 bg-white px-3 py-1 rounded-md font-mono text-[9px] font-bold uppercase tracking-wider text-slate-700 shadow-sm">
                Class of {featuredStudent.gradYear}
              </div>
            </div>

            {/* Student Credentials */}
            <div className="p-8 lg:p-12 lg:col-span-7 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-3xl font-extrabold text-slate-900">{featuredStudent.name}</h3>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-accent mt-1">{featuredStudent.major}</p>
                </div>

                <p className="font-sans text-sm leading-relaxed text-slate-500">
                  "{featuredStudent.bio}"
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-100 pt-6">
                  <div>
                    <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                      <Code className="h-3.5 w-3.5 text-accent" /> Internships
                    </h4>
                    <ul className="space-y-1 font-sans text-xs text-slate-500 list-disc list-inside">
                      {featuredStudent.internships.map((internship, index) => (
                        <li key={index}>{internship}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                      <Award className="h-3.5 w-3.5 text-accent" /> Key Awards
                    </h4>
                    <ul className="space-y-1 font-sans text-xs text-slate-500 list-disc list-inside">
                      {featuredStudent.awards.map((award, index) => (
                        <li key={index}>{award}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  href={`/spotlight?id=${featuredStudent.id}`}
                  className="inline-flex items-center text-xs font-bold font-mono uppercase tracking-wider text-primary hover:text-accent group"
                >
                  View Full Profile & Research <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Featured Projects Section */}
      <section className="bg-white py-20 md:py-28 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-4">
              <div className="eyebrow-pill">
                <Star className="h-3 w-3 fill-accent text-accent" /> Student Engineering
              </div>
              <h2 className="font-serif text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Featured Student Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="premium-btn rounded-full border border-slate-200 bg-white hover:bg-slate-50 px-5 py-3 text-xs font-semibold text-slate-700 shadow-sm self-start md:self-auto"
            >
              Explore Project Catalog <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ScrollReveal
                key={project.id}
                className="premium-card-light rounded-2xl flex flex-col h-full bg-white overflow-hidden shadow-md"
              >
                {/* Project Image */}
                <div className="relative h-[250px] w-full border-b border-slate-100 bg-slate-50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-w-768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 border border-slate-200/80 bg-accent text-white px-3 py-1 rounded-md font-mono text-[9px] font-bold uppercase tracking-wider shadow-sm">
                    Featured Project
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-bold text-slate-900 hover:text-accent transition-colors">
                      {project.title}
                    </h3>

                    {/* Tech badging */}
                    <div className="flex flex-wrap gap-1.5 font-mono text-[9px]">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="border border-slate-200 bg-slate-50 px-2.5 py-1 rounded-md text-slate-500">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="border border-slate-200 bg-slate-50 px-2.5 py-1 rounded-md text-slate-500 font-bold">
                          +{project.technologies.length - 4} More
                        </span>
                      )}
                    </div>

                    <p className="font-sans text-xs leading-relaxed text-slate-500 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Team */}
                    <div className="border-t border-slate-100 pt-4">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-slate-900 font-bold">Designed By:</span>
                      <p className="font-sans text-xs text-slate-500 mt-0.5">{project.team.join(', ')}</p>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4 pt-4 border-t border-slate-100">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-xs font-bold font-mono uppercase tracking-wider text-primary hover:text-accent"
                      >
                        Live Demo <ExternalLink className="ml-1 h-3.5 w-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-xs font-bold font-mono uppercase tracking-wider text-primary hover:text-accent"
                      >
                        GitHub Repo <ExternalLink className="ml-1 h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. News & Events Split Section */}
      <section className="bg-slate-50/50 py-20 md:py-28 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: News Previews */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="eyebrow-pill">
                  <Star className="h-3 w-3 fill-accent text-accent" /> Announcements
                </div>
                <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-4xl">
                  Recent News
                </h2>
              </div>

              <div className="space-y-6">
                {recentNews.map((news) => (
                  <ScrollReveal
                    key={news.id}
                    className="premium-card-light rounded-2xl flex flex-col sm:flex-row bg-white overflow-hidden shadow-sm"
                  >
                    {/* Small Image */}
                    <div className="relative h-[200px] sm:h-auto sm:w-[200px] shrink-0 bg-slate-50 border-b sm:border-b-0 sm:border-r border-slate-100">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover"
                        sizes="(max-w-640px) 100vw, 200px"
                      />
                    </div>
                    
                    {/* Text */}
                    <div className="p-6 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center gap-2 font-mono text-[9px]">
                          <span className="font-bold text-accent uppercase tracking-wider">{news.category}</span>
                          <span className="text-slate-400">{news.date}</span>
                        </div>
                        <h3 className="font-serif text-lg font-bold text-slate-900 line-clamp-2 hover:text-accent transition-colors">
                          <Link href="/news-events">{news.title}</Link>
                        </h3>
                        <p className="font-sans text-xs text-slate-500 line-clamp-3">
                          {news.summary}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <Link href="/news-events" className="inline-flex items-center text-[10px] font-bold font-mono uppercase tracking-wider text-primary hover:text-accent">
                          Read Full Article <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Right: Upcoming Events */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="eyebrow-pill">
                  <Star className="h-3 w-3 fill-accent text-accent" /> Campus Calendar
                </div>
                <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-4xl">
                  Upcoming STEM Events
                </h2>
              </div>

              <div className="border border-slate-200/80 bg-white p-6 rounded-2xl shadow-md divide-y divide-slate-100">
                {events.map((event) => (
                  <ScrollReveal key={event.id} className="py-4 first:pt-0 last:pb-0 space-y-2">
                    <div className="flex justify-between items-start gap-2 font-mono text-[9px]">
                      <span className="bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md font-bold text-slate-600 uppercase tracking-wider">
                        {event.category}
                      </span>
                      <span className="text-accent font-semibold flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {event.date}
                      </span>
                    </div>
                    <h3 className="font-serif text-base font-bold text-slate-900 hover:text-accent">
                      <Link href="/news-events">{event.title}</Link>
                    </h3>
                    <p className="font-sans text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-4 pt-1 font-mono text-[9px] text-slate-400">
                      <span>Time: {event.time}</span>
                      <span>Loc: {event.location}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Call to Action Banner Section (Immersive Glow Background Card) */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal className="relative bg-[#030712] border border-white/5 rounded-3xl p-8 md:p-16 text-center shadow-2xl overflow-hidden">
            {/* Background design elements */}
            <div className="glowing-spot bg-accent/25 w-[300px] h-[300px] top-[-50px] right-[-50px] blur-[100px] rounded-full" />
            <div className="glowing-spot bg-accent-pink/15 w-[250px] h-[250px] bottom-[-50px] left-[-50px] blur-[100px] rounded-full" />
            <div className="absolute inset-0 z-0 grid-pattern-dark opacity-20" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="eyebrow-pill-dark">
                Admissions Open
              </div>
              <h2 className="font-serif text-4xl font-extrabold text-white md:text-5xl leading-tight">
                Ready to Start Your STEM Journey?
              </h2>
              <p className="font-sans text-sm text-slate-400 leading-relaxed">
                Whether you want to specialize in Computer Information Systems, Biology, Mathematics, or Quantitative Business, Livingstone College offers the workspace and resources to turn your academic goals into tangible success.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Link
                  href="/contact"
                  className="premium-btn rounded-full bg-primary hover:bg-primary/90 text-white px-6 py-3.5 text-sm font-semibold tracking-wide shadow-md"
                >
                  Contact Admissions
                </Link>
                <Link
                  href="/programs"
                  className="premium-btn rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 text-sm font-semibold tracking-wide"
                >
                  Explore Concentrations
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
