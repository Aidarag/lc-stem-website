'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, Code, Award, Calendar, BookOpen, ExternalLink, 
  ShieldCheck, Trophy, Sparkles, Binary, Atom, TrendingUp, Send, Users, ClipboardCheck 
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StatCounter from '@/components/ui/StatCounter';
import { studentSpotlights, studentProjects, competitions } from '@/data/stemData';

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Fetch student spotlight data
  const featuredStudents = studentSpotlights.slice(0, 3); // Marcus, Aaliyah, Tariq
  const featuredProject = studentProjects[0]; // BlueBear Transit App
  const featuredHackathon = competitions[0]; // CIAA STEM Hackathon

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="w-full bg-[#FFFFFF] font-sans text-foreground overflow-hidden">
      
      {/* 02 — Hero Section */}
      <section className="relative bg-[#FFFFFF] border-b border-cool-gray py-20 lg:py-28">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 z-0 grid-pattern opacity-40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Typography & CTAs */}
            <div className="lg:col-span-7 space-y-8">
              <div className="eyebrow-pill inline-flex items-center gap-1.5 border border-cool-gray bg-[#FAF9F6] text-foreground">
                <Sparkles className="h-3 w-3 text-accent-orange fill-accent-orange/10 animate-pulse" /> 
                LC STEM Hub
              </div>

              <h1 className="font-serif text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl leading-[1.05] uppercase">
                Engineering <br />
                the <span className="bg-accent px-3 py-1 rounded-xl border border-accent-lime-hover/20 text-[#181818] inline-block font-bold">Innovators</span> <br />
                of Tomorrow.
              </h1>

              <p className="max-w-2xl font-sans text-sm md:text-base leading-relaxed text-foreground/70">
                From freshman hackathons to postgraduate molecular cancer research, Livingstone STEM students are reshaping what is possible. Explore the official digital showcase of academic excellence.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/programs"
                  className="premium-btn group rounded-full bg-primary hover:bg-accent-blue-hover text-white px-6 py-3.5 text-xs font-semibold tracking-wide shadow-sm"
                >
                  Explore Programs <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/spotlight"
                  className="premium-btn rounded-full border border-cool-gray bg-white hover:bg-[#FAF9F6] text-foreground px-6 py-3.5 text-xs font-semibold tracking-wide shadow-sm"
                >
                  Meet the Students
                </Link>
              </div>
            </div>

            {/* Right Column: High-tech visual console (SVG / Mockup code module) */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal className="relative bg-[#181818] border border-white/10 rounded-2xl p-6 shadow-xl text-white font-mono text-xs overflow-hidden">
                {/* Console header */}
                <div className="flex justify-between items-center pb-4 mb-4 border-b border-white/10 text-white/50 text-[10px]">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF3B00]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E2FD52]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF]" />
                  </div>
                  <span>LIVE_RESEARCH_CONSOLE.SH</span>
                </div>

                {/* Simulation code output */}
                <div className="space-y-3 font-mono text-[10px] text-white/80">
                  <p className="text-accent-lime">// INITIALIZING BIO-GENETICS ALGORITHMS</p>
                  <p className="text-white/40">loading molecular cell assay telemetry...</p>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5 flex justify-between items-center">
                    <div>
                      <span className="text-white/40 block uppercase text-[8px] tracking-wider">Target Cell Group</span>
                      <span className="text-white font-bold">pathways_g42.xml</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-accent-orange text-white font-bold text-[8px]">98.2% ACC</span>
                  </div>

                  <p className="text-accent-blue mt-4">// ESTABLISHING LoRaWAN TELEMETRY GRID</p>
                  <p className="text-white/40">pulling data from Yadkin River basin buoys...</p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2 bg-white/5 rounded border border-white/5 text-center">
                      <span className="text-white/40 block text-[7px] uppercase">pH Level</span>
                      <span className="text-white font-bold">7.24</span>
                    </div>
                    <div className="p-2 bg-white/5 rounded border border-white/5 text-center">
                      <span className="text-white/40 block text-[7px] uppercase">Temp</span>
                      <span className="text-white font-bold">21.8°C</span>
                    </div>
                    <div className="p-2 bg-white/5 rounded border border-white/5 text-center">
                      <span className="text-white/40 block text-[7px] uppercase">Turbidity</span>
                      <span className="text-white font-bold">3.2 NTU</span>
                    </div>
                  </div>

                  <p className="text-accent-lavender mt-4">// COMPILED SYSTEM MODULES</p>
                  <p className="text-[#E2FD52] font-semibold flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3" /> Ready: LC STEM (v1.0.4)
                  </p>
                </div>
              </ScrollReveal>
            </div>

          </div>

          {/* Stats Bar */}
          <ScrollReveal delay={0.2} className="mt-16 border border-cool-gray bg-white p-8 rounded-2xl shadow-sm">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-cool-gray">
              <div className="pt-4 md:pt-0">
                <h3 className="font-serif text-4xl font-extrabold text-foreground md:text-5xl">
                  <StatCounter end={88} suffix="%" />
                </h3>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-wider text-foreground/50">Summer Internship Rate</p>
              </div>
              <div className="pt-4 md:pt-0">
                <h3 className="font-serif text-4xl font-extrabold text-accent-orange md:text-5xl">
                  <StatCounter end={10000} prefix="$" suffix="+" />
                </h3>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-wider text-foreground/50">Hackathon Prizes Won</p>
              </div>
              <div className="pt-4 md:pt-0">
                <h3 className="font-serif text-4xl font-extrabold text-foreground md:text-5xl">
                  <StatCounter end={4} />
                </h3>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-wider text-foreground/50">STEM Concentrations</p>
              </div>
              <div className="pt-4 md:pt-0">
                <h3 className="font-serif text-4xl font-extrabold text-foreground md:text-5xl">
                  <StatCounter end={15} suffix="+" />
                </h3>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-wider text-foreground/50">Active Research Papers</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Welcome Statement */}
      <section className="bg-white py-12 border-b border-cool-gray">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-4 items-center">
            <div className="md:col-span-5 space-y-1">
              <span className="font-mono text-[9px] uppercase tracking-wider text-accent-orange font-bold">Our Mission</span>
              <h2 className="font-serif text-3xl font-extrabold text-foreground">Unlocking Academic Potential</h2>
            </div>
            <div className="md:col-span-7">
              <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                LC STEM is a student community of hands-on builders, analysts, and molecular scientists. We believe that real excellence is forged in the laboratory and proven in the competitive field. Through peer collaboration and independent research, we establish a launching pad to global leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Academic Programs Section */}
      <section className="bg-[#FAF9F6] py-20 md:py-24 border-b border-cool-gray">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal className="max-w-3xl space-y-4 mb-16">
            <div className="eyebrow-pill border border-cool-gray bg-white text-foreground">
              <BookOpen className="h-3.5 w-3.5 text-primary" /> Curriculums
            </div>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl uppercase leading-tight">
              Academic Concentrations
            </h2>
            <p className="font-sans text-sm text-foreground/70 max-w-xl">
              Choose your path. Our department features four dedicated curriculum tracks matching rigorous scientific research with modern market applications.
            </p>
          </ScrollReveal>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Computer Information Systems',
                desc: 'Software development, database management, and cloud architecture modeling.',
                accent: 'border-l-accent-blue',
                color: 'text-accent-blue',
                href: '/programs?track=CIS',
                icon: <Code className="h-6 w-6" />,
              },
              {
                name: 'Biology',
                desc: 'Molecular assays, cellular genetics regulation, pre-med networks, and field ecology.',
                accent: 'border-l-accent-lavender-hover',
                color: 'text-accent-lavender-hover',
                href: '/programs?track=Biology',
                icon: <Atom className="h-6 w-6" />,
              },
              {
                name: 'Business',
                desc: 'Operations management analysis, supply chain logistics, and quantitative modeling.',
                accent: 'border-l-accent-orange',
                color: 'text-accent-orange',
                href: '/programs?track=Business',
                icon: <TrendingUp className="h-6 w-6" />,
              },
              {
                name: 'Mathematics',
                desc: 'Algorithmic logic, predictive data science, statistical math models, and cryptography.',
                accent: 'border-l-accent-lime-hover',
                color: 'text-accent-lime-hover',
                href: '/programs?track=Mathematics',
                icon: <Binary className="h-6 w-6" />,
              },
            ].map((program) => (
              <ScrollReveal
                key={program.name}
                className={`premium-card-light bg-white border border-cool-gray border-l-4 ${program.accent} rounded-xl p-6 flex flex-col justify-between h-full hover:-translate-y-1 hover:border-foreground/20 cursor-pointer shadow-sm`}
              >
                <div className="space-y-4">
                  <div className={`p-3 w-fit rounded-lg bg-cool-gray/30 ${program.color}`}>
                    {program.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground leading-snug">{program.name}</h3>
                  <p className="font-sans text-xs text-foreground/60 leading-normal">{program.desc}</p>
                </div>
                <div className="pt-6 mt-4 border-t border-cool-gray flex items-center justify-between">
                  <Link href={program.href} className="inline-flex items-center text-[10px] font-bold font-mono uppercase tracking-wider text-primary hover:text-accent-blue-hover group">
                    View track detail <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Featured Students Section */}
      <section className="bg-white py-20 md:py-24 border-b border-cool-gray">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-4">
              <div className="eyebrow-pill border border-cool-gray bg-[#FAF9F6] text-foreground">
                <Users className="h-3.5 w-3.5 text-accent-orange" /> Leaders
              </div>
              <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl uppercase leading-tight">
                Featured Students
              </h2>
              <p className="font-sans text-sm text-foreground/70 max-w-lg">
                Our students secure internships at Microsoft, conduct independent NIH oncology research, and win regional hackathons.
              </p>
            </div>
            <Link
              href="/spotlight"
              className="premium-btn rounded-full border border-cool-gray bg-[#FAF9F6] hover:bg-cool-gray/30 px-5 py-3 text-xs font-semibold text-foreground shadow-sm self-start md:self-auto"
            >
              View Directory <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Student Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStudents.map((student) => (
              <ScrollReveal
                key={student.id}
                className="premium-card-light bg-white border border-cool-gray rounded-xl overflow-hidden shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:border-foreground/20 cursor-pointer"
              >
                <div>
                  {/* Student Photo */}
                  <div className="relative h-[280px] w-full border-b border-cool-gray bg-[#FAF9F6]">
                    <Image
                      src={student.photo}
                      alt={student.name}
                      fill
                      className="object-cover"
                      sizes="(max-w-768px) 100vw, 30vw"
                    />
                    <div className="absolute top-4 left-4 border border-cool-gray bg-white/95 px-3 py-1 rounded-md font-mono text-[9px] font-bold uppercase tracking-wider text-foreground shadow-sm">
                      Class of {student.gradYear}
                    </div>
                  </div>

                  {/* Student Credentials */}
                  <div className="p-6 space-y-3">
                    <div>
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#181818]/50">
                        {student.major}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-foreground">{student.name}</h3>
                    </div>
                    <p className="font-sans text-xs leading-relaxed text-foreground/70 line-clamp-3">
                      "{student.bio}"
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  {/* Spotlight Achievement */}
                  <div className="border-t border-cool-gray pt-4 space-y-1.5">
                    <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-[#181818]/50 block">Highlight</span>
                    <p className="font-sans text-xs text-foreground/70 font-semibold line-clamp-1">
                      {student.awards[0] || student.internships[0]}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-cool-gray">
                    <Link
                      href={`/spotlight?id=${student.id}`}
                      className="inline-flex items-center text-[10px] font-bold font-mono uppercase tracking-wider text-primary hover:text-accent-blue-hover"
                    >
                      View profile details <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Achievements Section (Editorial Bento Grid Layout) */}
      <section className="bg-[#FAF9F6] py-20 md:py-24 border-b border-cool-gray">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-4">
              <div className="eyebrow-pill border border-cool-gray bg-white text-foreground">
                <Trophy className="h-3.5 w-3.5 text-accent-orange fill-accent-orange/10" /> Portfolio
              </div>
              <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl uppercase leading-tight">
                Achievements & Impact
              </h2>
              <p className="font-sans text-sm text-foreground/70">
                Explore independent student software architectures and medals co-authored by our team.
              </p>
            </div>
            <Link
              href="/projects"
              className="premium-btn rounded-full border border-cool-gray bg-white hover:bg-[#FAF9F6] px-5 py-3 text-xs font-semibold text-foreground shadow-sm self-start md:self-auto"
            >
              Explore Achievements <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Box: Featured Project (2/3 Span) */}
            <ScrollReveal className="lg:col-span-8 premium-card-light bg-white border border-cool-gray rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row h-full">
              <div className="relative h-[250px] md:h-auto md:w-1/2 border-b md:border-b-0 md:border-r border-cool-gray bg-[#FAF9F6] shrink-0">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-w-1024px) 100vw, 40vw"
                />
                <div className="absolute top-4 left-4 border border-transparent bg-primary text-white px-3 py-1 rounded-md font-mono text-[9px] font-bold uppercase tracking-wider shadow-sm">
                  Featured Project
                </div>
              </div>

              <div className="p-8 flex flex-col justify-between flex-grow">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground leading-snug">
                      {featuredProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 font-mono text-[9px] mt-2">
                      {featuredProject.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="border border-cool-gray bg-[#FAF9F6] px-2 py-0.5 rounded text-foreground/60">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="font-sans text-xs leading-relaxed text-foreground/70">
                    {featuredProject.description}
                  </p>

                  <div className="bg-[#FAF9F6] border border-cool-gray p-4 rounded-xl space-y-1">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                      <ClipboardCheck className="h-3.5 w-3.5 text-primary" /> Outcomes
                    </span>
                    <p className="font-sans text-xs text-foreground/70 leading-normal">
                      {featuredProject.outcomes}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-cool-gray flex gap-4">
                  {featuredProject.demoUrl && (
                    <a href={featuredProject.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-xs font-bold font-mono uppercase tracking-wider text-primary hover:text-accent-blue-hover group">
                      Live Site <ExternalLink className="ml-1 h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}
                  {featuredProject.githubUrl && (
                    <a href={featuredProject.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-xs font-bold font-mono uppercase tracking-wider text-primary hover:text-accent-blue-hover group">
                      GitHub <ExternalLink className="ml-1 h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>

            {/* Right Box: Hackathon / Medal Victory (1/3 Span) */}
            <ScrollReveal className="lg:col-span-4 premium-card-light bg-[#181818] border border-white/10 rounded-2xl p-8 text-white flex flex-col justify-between h-full shadow-sm">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <Trophy className="h-7 w-7 text-accent" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#E2FD52] border border-[#E2FD52]/20 px-2 py-0.5 rounded bg-[#E2FD52]/5 font-semibold">
                    {featuredHackathon.award}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-[9px] text-white/50">{featuredHackathon.date}</span>
                  <h3 className="font-serif text-2xl font-extrabold leading-snug">{featuredHackathon.title}</h3>
                  <p className="font-sans text-xs text-white/70 leading-relaxed">
                    {featuredHackathon.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-white/50 font-mono text-[9px]">
                <span>Contibutors: {featuredHackathon.students.slice(0, 2).join(', ')}</span>
                <Link href="/projects?filter=Hackathon" className="text-[#E2FD52] hover:underline inline-flex items-center gap-0.5">
                  Details <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 06 — Newsletter Section */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal className="relative bg-[#181818] border border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-lg overflow-hidden">
            {/* Tech grid backdrop */}
            <div className="absolute inset-0 z-0 grid-pattern-dark opacity-10" />

            <div className="relative z-10 max-w-xl mx-auto space-y-6">
              <div className="eyebrow-pill-dark inline-flex items-center gap-1.5 border border-white/10 bg-white/5 text-white/90">
                <Send className="h-3.5 w-3.5 text-accent animate-pulse" /> Stay in the loop
              </div>
              
              <h2 className="font-serif text-4xl font-extrabold text-white md:text-5xl uppercase leading-tight">
                Subscribe to STEM Hub
              </h2>
              
              <p className="font-sans text-xs md:text-sm text-white/70 leading-relaxed">
                Get bi-weekly updates on student hackathons, independent lab research milestones, corporate recruitment, and internship awards directly in your inbox.
              </p>

              {subscribed ? (
                <div className="p-4 bg-accent/20 border border-[#E2FD52]/30 rounded-xl text-[#E2FD52] text-xs font-semibold">
                  Thank you! You have successfully subscribed to the L.C. STEM Newsletter.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 pt-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-3 font-sans text-xs text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                  />
                  <button
                    type="submit"
                    className="premium-btn shrink-0 rounded-full bg-accent text-[#181818] font-bold hover:bg-accent-lime-hover px-6 py-3 text-xs tracking-wider transition-colors cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
