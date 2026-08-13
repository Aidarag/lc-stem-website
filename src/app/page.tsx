'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Star, Code, Award, Calendar, BookOpen, ExternalLink, 
  ShieldCheck, Trophy, Activity, Binary, Atom, TrendingUp, Send, Users, ClipboardCheck, X, Play,
  Plus, Minus, GraduationCap, Globe
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StatCounter from '@/components/ui/StatCounter';
import { studentSpotlights, studentProjects, competitions } from '@/data/stemData';

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedStudentVideo, setSelectedStudentVideo] = useState<{
    name: string;
    major: string;
    project: string;
    videoUrl: string;
  } | null>(null);

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
      
      {/* 02 — EuVerse-style Dark Hero Section */}
      <section className="relative hero-obsidian-bg border-b border-white/10 pt-32 pb-20 md:pt-40 md:pb-28 text-white overflow-hidden">
        {/* Subtle blur circles background */}
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-pink-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 z-0 grid-pattern-dark opacity-30 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline, CTAs, Trust Proof */}
            <div className="lg:col-span-6 space-y-8 text-left">
              
              {/* Badge Capsule */}
              <div className="inline-flex items-center gap-2.5 rounded-full glass-pill-badge px-4 py-2 text-xs sm:text-sm text-purple-200">
                <span className="rounded-full bg-purple-600 text-[#e3fc51] font-mono px-3 py-1 font-extrabold text-xs uppercase shadow-sm border border-[#e3fc51]/40">
                  New
                </span>
                <span className="font-semibold text-gray-200">2026 Academic Showcase Now Live!</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
                Learn from Top <br />
                <span className="text-gradient-purple-pink">STEM Mentors</span> <br />
                & Researchers
              </h1>

              {/* Subtitle */}
              <p className="max-w-xl font-sans text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 font-normal">
                Explore highly demanded technical skills and undergraduate research projects created by Livingstone College STEM students and faculty, focused on real-world applications.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/programs"
                  className="btn-gradient-lime inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm sm:text-base font-extrabold tracking-wide shadow-xl transition-all cursor-pointer"
                >
                  View Programs <ArrowRight className="h-5 w-5 stroke-[2.5]" />
                </Link>
                <button
                  onClick={() => setSelectedStudentVideo({
                    name: "Marcus Vance",
                    major: "Computer Information Systems",
                    project: "AI-Powered Decentralized Credentialing Platform",
                    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                  })}
                  className="inline-flex items-center gap-2.5 rounded-full glass-pill-badge hover:bg-white/20 text-white px-7 py-4 text-sm sm:text-base font-bold tracking-wide transition-all hover:scale-105 active:scale-95"
                >
                  Watch Preview <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-purple-900"><Play className="h-3 w-3 fill-purple-900 ml-0.5" /></span>
                </button>
              </div>

              {/* Trust Bar & Avatars */}
              <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                {/* Avatars Stack */}
                <div className="flex -space-x-3 overflow-hidden">
                  <Image src="/images/student-showcase/student1.jpeg" alt="Student" width={48} height={48} className="inline-block h-12 w-12 rounded-full ring-2 ring-purple-900 object-cover" />
                  <Image src="/images/student-showcase/student2.jpeg" alt="Student" width={48} height={48} className="inline-block h-12 w-12 rounded-full ring-2 ring-purple-900 object-cover" />
                  <Image src="/images/student-showcase/student3.jpeg" alt="Student" width={48} height={48} className="inline-block h-12 w-12 rounded-full ring-2 ring-purple-900 object-cover" />
                  <Image src="/images/student-showcase/student4.jpeg" alt="Student" width={48} height={48} className="inline-block h-12 w-12 rounded-full ring-2 ring-purple-900 object-cover" />
                </div>
                <div>
                  <p className="font-sans text-sm sm:text-base font-bold text-white">Loved by 500+ Alumni & Recruiters</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="font-mono text-xs text-gray-300 font-semibold">5.0 (130+ Showcase Reviews)</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Tilted 3D Cascading Cards Grid (EuVerse Style) */}
            <div className="lg:col-span-6 relative h-[560px] md:h-[640px] overflow-hidden rounded-3xl">
              
              {/* Fade masks top/bottom */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0B051D] via-[#0B051D]/60 to-transparent z-20" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B051D] via-[#0B051D]/60 to-transparent z-20" />

              {/* Tilted Container */}
              <div className="tilted-grid-container grid grid-cols-2 sm:grid-cols-3 gap-4 w-[115%] -ml-6 -mt-10">
                
                {/* Column 1: Upward Scroll */}
                <motion.div
                  animate={{ y: [0, -700] }}
                  transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
                  className="space-y-4"
                >
                  {[
                    { name: 'Marcus Vance', major: 'CIS Major', img: '/images/student-showcase/student1.jpeg' },
                    { name: 'Aaliyah Jones', major: 'Biology Major', img: '/images/student-showcase/student2.jpeg' },
                    { name: 'Tariq Simmons', major: 'Mathematics', img: '/images/student-showcase/student3.jpeg' },
                    { name: 'Marcus Vance', major: 'CIS Major', img: '/images/student-showcase/student1.jpeg' },
                    { name: 'Aaliyah Jones', major: 'Biology Major', img: '/images/student-showcase/student2.jpeg' },
                  ].map((student, idx) => (
                    <div
                      key={`col1-${idx}`}
                      onClick={() => setSelectedStudentVideo({
                        name: student.name,
                        major: student.major,
                        project: "Undergraduate STEM Showcase Project",
                        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                      })}
                      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:border-purple-400/50"
                    >
                      <div className="relative aspect-[3/4] w-full">
                        <Image src={student.img} alt={student.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        {/* Play Icon Badge */}
                        <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-purple-600 transition-colors">
                          <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                        </div>
                        {/* Info Overlay */}
                        <div className="absolute bottom-3 left-3 right-3">
                          <p className="font-sans text-sm font-bold text-white flex items-center gap-1">
                            <Users className="h-4 w-4 text-purple-300 inline" /> {student.name}
                          </p>
                          <p className="font-mono text-xs text-purple-200 mt-0.5 font-semibold flex items-center gap-1">
                            <GraduationCap className="h-3.5 w-3.5 text-purple-300 inline" /> {student.major}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Column 2: Downward Scroll */}
                <motion.div
                  animate={{ y: [-700, 0] }}
                  transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
                  className="space-y-4"
                >
                  {[
                    { name: 'Maya Lin', major: 'Business & STEM', img: '/images/student-showcase/student4.jpeg' },
                    { name: 'Devin Carter', major: 'CIS Fellow', img: '/images/student-showcase/student5.jpeg' },
                    { name: 'Dr. E. Vance', major: 'Biology Faculty', img: '/images/student-showcase/student6.jpeg' },
                    { name: 'Maya Lin', major: 'Business & STEM', img: '/images/student-showcase/student4.jpeg' },
                    { name: 'Devin Carter', major: 'CIS Fellow', img: '/images/student-showcase/student5.jpeg' },
                  ].map((student, idx) => (
                    <div
                      key={`col2-${idx}`}
                      onClick={() => setSelectedStudentVideo({
                        name: student.name,
                        major: student.major,
                        project: "Undergraduate STEM Research Paper",
                        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                      })}
                      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:border-purple-400/50"
                    >
                      <div className="relative aspect-[3/4] w-full">
                        <Image src={student.img} alt={student.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-pink-600 transition-colors">
                          <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                        </div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <p className="font-sans text-sm font-bold text-white flex items-center gap-1">
                            <Users className="h-4 w-4 text-pink-300 inline" /> {student.name}
                          </p>
                          <p className="font-mono text-xs text-pink-200 mt-0.5 font-semibold flex items-center gap-1">
                            <GraduationCap className="h-3.5 w-3.5 text-pink-300 inline" /> {student.major}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Column 3: Upward Scroll */}
                <motion.div
                  animate={{ y: [0, -700] }}
                  transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                  className="hidden sm:block space-y-4"
                >
                  {[
                    { name: 'Jordan Smith', major: 'Data Science', img: '/images/student-showcase/student7.jpeg' },
                    { name: 'Elena Rostova', major: 'Genetics Lab', img: '/images/student-showcase/student8.jpeg' },
                    { name: 'Tariq Simmons', major: 'Math Honors', img: '/images/student-showcase/student9.jpeg' },
                    { name: 'Jordan Smith', major: 'Data Science', img: '/images/student-showcase/student7.jpeg' },
                    { name: 'Elena Rostova', major: 'Genetics Lab', img: '/images/student-showcase/student8.jpeg' },
                  ].map((student, idx) => (
                    <div
                      key={`col3-${idx}`}
                      onClick={() => setSelectedStudentVideo({
                        name: student.name,
                        major: student.major,
                        project: "Livingstone STEM Research Presentation",
                        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                      })}
                      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:border-purple-400/50"
                    >
                      <div className="relative aspect-[3/4] w-full">
                        <Image src={student.img} alt={student.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-indigo-600 transition-colors">
                          <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                        </div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <p className="font-sans text-sm font-bold text-white flex items-center gap-1">
                            <Users className="h-4 w-4 text-indigo-300 inline" /> {student.name}
                          </p>
                          <p className="font-mono text-xs text-indigo-200 mt-0.5 font-semibold flex items-center gap-1">
                            <GraduationCap className="h-3.5 w-3.5 text-indigo-300 inline" /> {student.major}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>

              </div>
            </div>

          </div>

          {/* EuVerse Style Dark Stats Bar */}
          <div className="mt-16 rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-8 md:p-10 shadow-2xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="pt-2 md:pt-0">
                <h3 className="font-serif text-4xl md:text-5xl font-extrabold text-[#e3fc51]">
                  <StatCounter end={88} suffix="%" />
                </h3>
                <p className="mt-2 font-mono text-xs sm:text-sm uppercase tracking-wider text-purple-200 font-semibold">Summer Internship Rate</p>
              </div>
              <div className="pt-2 md:pt-0">
                <h3 className="font-serif text-4xl md:text-5xl font-extrabold text-purple-300">
                  <StatCounter end={10000} prefix="$" suffix="+" />
                </h3>
                <p className="mt-2 font-mono text-xs sm:text-sm uppercase tracking-wider text-purple-200 font-semibold">Hackathon Prizes Won</p>
              </div>
              <div className="pt-2 md:pt-0">
                <h3 className="font-serif text-4xl md:text-5xl font-extrabold text-[#e3fc51]">
                  <StatCounter end={4} />
                </h3>
                <p className="mt-2 font-mono text-xs sm:text-sm uppercase tracking-wider text-purple-200 font-semibold">STEM Concentrations</p>
              </div>
              <div className="pt-2 md:pt-0">
                <h3 className="font-serif text-4xl md:text-5xl font-extrabold text-purple-300">
                  <StatCounter end={15} suffix="+" />
                </h3>
                <p className="mt-2 font-mono text-xs sm:text-sm uppercase tracking-wider text-purple-200 font-semibold">Active Research Papers</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Welcome Statement — LIGHT SLATE MODE */}
      <section className="bg-slate-50 py-18 md:py-24 border-y border-gray-200/80 text-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-2">
              <span className="inline-block rounded-full bg-purple-100 border border-purple-200 px-3.5 py-1 text-xs font-mono font-extrabold uppercase tracking-widest text-purple-700">
                Our Mission
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Unlocking Academic Potential
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="font-sans text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-normal">
                LC STEM is a student community of hands-on builders, analysts, and molecular scientists. We believe that real excellence is forged in the laboratory and proven in the competitive field. Through peer collaboration and independent research, we establish a launching pad to global leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Academic Programs Section — DARK OBSIDIAN MODE */}
      <section className="relative bg-[#070312] py-24 md:py-32 border-b border-white/10 text-white overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 z-0 grid-pattern-dark opacity-20 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <ScrollReveal className="max-w-3xl space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 rounded-full glass-pill-badge px-4 py-2 text-xs sm:text-sm text-purple-200">
              <BookOpen className="h-4 w-4 text-purple-400" /> Curriculums
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
              Academic <span className="text-gradient-purple-pink">Concentrations</span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-gray-300 max-w-xl">
              Choose your path. Our department features four dedicated curriculum tracks matching rigorous scientific research with modern market applications.
            </p>
          </ScrollReveal>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Computer Information Systems',
                desc: 'Software development, database management, and cloud architecture modeling.',
                accent: 'border-l-indigo-500',
                color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
                href: '/programs?track=CIS',
                icon: <Code className="h-7 w-7" />,
              },
              {
                name: 'Biology',
                desc: 'Molecular assays, cellular genetics regulation, pre-med networks, and field ecology.',
                accent: 'border-l-purple-500',
                color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
                href: '/programs?track=Biology',
                icon: <Atom className="h-7 w-7" />,
              },
              {
                name: 'Business',
                desc: 'Operations management analysis, supply chain logistics, and quantitative modeling.',
                accent: 'border-l-pink-500',
                color: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
                href: '/programs?track=Business',
                icon: <TrendingUp className="h-7 w-7" />,
              },
              {
                name: 'Mathematics',
                desc: 'Algorithmic logic, predictive data science, statistical math models, and cryptography.',
                accent: 'border-l-violet-400',
                color: 'text-violet-300 bg-violet-500/10 border-violet-500/20',
                href: '/programs?track=Mathematics',
                icon: <Binary className="h-7 w-7" />,
              },
            ].map((program) => (
              <ScrollReveal
                key={program.name}
                className={`glass-card-dark border-l-4 ${program.accent} rounded-3xl p-8 flex flex-col justify-between h-full hover:scale-[1.02] hover:border-purple-400/60 cursor-pointer shadow-2xl transition-all`}
              >
                <div className="space-y-5">
                  <div className={`p-3.5 w-fit rounded-2xl border ${program.color}`}>
                    {program.icon}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-white leading-snug">{program.name}</h3>
                  <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed">{program.desc}</p>
                </div>
                <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between">
                  <Link href={program.href} className="inline-flex items-center text-xs sm:text-sm font-bold font-mono uppercase tracking-wider text-purple-300 hover:text-white group">
                    View track detail <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Featured Students Section — CRISP LIGHT MODE */}
      <section className="relative bg-white py-24 md:py-32 border-b border-gray-200/80 text-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 grid-pattern opacity-30 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 border border-purple-200 px-4 py-2 text-xs sm:text-sm font-bold text-purple-800">
                <Users className="h-4 w-4 text-purple-600" /> Leaders
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 uppercase leading-tight">
                Featured <span className="text-purple-600">Students</span>
              </h2>
              <p className="font-sans text-base sm:text-lg text-gray-600 max-w-lg">
                Our students secure internships at Microsoft, conduct independent NIH oncology research, and win regional hackathons.
              </p>
            </div>
            <Link
              href="/spotlight"
              className="btn-gradient-lime font-mono text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0B051D] px-6 py-3.5 rounded-full shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
            >
              View Directory <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Student Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStudents.map((student) => (
              <ScrollReveal
                key={student.id}
                className="bg-white border border-gray-200/90 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-purple-400 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Student Photo */}
                  <div className="relative h-[300px] w-full border-b border-gray-100 bg-gray-100">
                    <Image
                      src={student.photo}
                      alt={student.name}
                      fill
                      className="object-cover"
                      sizes="(max-w-768px) 100vw, 30vw"
                    />
                    <div className="absolute top-4 left-4 border border-purple-400/40 bg-purple-600 text-[#e3fc51] backdrop-blur-md px-3.5 py-1.5 rounded-full font-mono text-xs font-extrabold uppercase tracking-wider shadow-md">
                      Class of {student.gradYear}
                    </div>
                  </div>

                  {/* Student Credentials */}
                  <div className="p-8 space-y-4">
                    <div>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100">
                        {student.major}
                      </span>
                      <h3 className="font-serif text-2xl font-extrabold text-gray-900 mt-2.5">{student.name}</h3>
                    </div>
                    <p className="font-sans text-sm sm:text-base leading-relaxed text-gray-600 line-clamp-3">
                      "{student.bio}"
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  {/* Spotlight Achievement */}
                  <div className="border-t border-gray-100 pt-4 space-y-1.5">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-gray-400 block">Highlight</span>
                    <p className="font-sans text-sm sm:text-base text-purple-700 font-bold line-clamp-1">
                      {student.awards[0] || student.internships[0]}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Link
                      href={`/spotlight?id=${student.id}`}
                      className="inline-flex items-center text-xs sm:text-sm font-bold font-mono uppercase tracking-wider text-purple-600 hover:text-purple-800"
                    >
                      View profile details <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Achievements Section (Editorial Bento Grid Layout) */}
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

      {/* 06 — Interactive FAQ Section — LIGHT SLATE MODE */}
      <section className="relative bg-slate-50 py-24 md:py-32 border-b border-gray-200/80 text-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 grid-pattern opacity-30 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Heading & CTA */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 border border-purple-200 px-4 py-2 text-xs sm:text-sm font-bold text-purple-800">
                <BookOpen className="h-4 w-4 text-purple-600" /> Frequently Asked Questions
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Got <span className="text-purple-600">Questions?</span>
              </h2>
              <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed max-w-md">
                Livingstone STEM is your gateway to a high-impact technical career. With our four specialized tracks, hands-on lab research, and industry partnerships, you'll gain the skills, confidence, and portfolio to stand out.
              </p>
              <div>
                <Link
                  href="/programs"
                  className="btn-gradient-lime inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm sm:text-base font-extrabold tracking-wide shadow-xl transition-all cursor-pointer"
                >
                  Explore Programs <ArrowRight className="h-5 w-5 stroke-[2.5]" />
                </Link>
              </div>
            </div>

            {/* Right Column: Accordion Cards */}
            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  q: "1. What STEM concentrations are offered at Livingstone College?",
                  a: "Livingstone College offers four specialized academic tracks: Computer Information Systems (CIS), Biology & Pre-Med, Mathematics & Data Science, and Business Analytics."
                },
                {
                  q: "2. How can I participate in undergraduate research or hackathons?",
                  a: "Students can join faculty-led research projects as early as freshman year, apply for NSF summer fellowships, and compete on our official hackathon team in regional and national competitions."
                },
                {
                  q: "3. Are there summer internship placement support programs?",
                  a: "Yes! Our department maintains an 88% summer internship placement rate with corporate partners like Microsoft, Google, Vercel, IBM, FedEx, and regional healthcare networks."
                },
                {
                  q: "4. What kind of real-world projects will I work on?",
                  a: "You'll build practical solutions such as mobile transit apps, bio-genetics molecular cell assays, LoRaWAN environmental telemetry grids, and decentralized blockchain credentialing systems."
                },
                {
                  q: "5. Is there peer mentoring and tutoring if I need academic help?",
                  a: "Absolutely! The LC STEM Student Developer Alliance and Pre-Med Club provide daily peer mentoring, study groups, and certification prep for AWS, CompTIA, and Google Analytics."
                },
                {
                  q: "6. How can prospective students or sponsors connect with the department?",
                  a: "You can reach out directly via our Contact page to schedule a campus lab tour, inquire about scholarships, or discuss corporate partnership opportunities."
                }
              ].map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="cursor-pointer bg-white hover:bg-purple-50/50 border border-gray-200 hover:border-purple-300 rounded-2xl p-6 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-sans text-base sm:text-lg md:text-xl font-bold text-gray-900">
                        {faq.q}
                      </h3>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700 shadow-sm font-bold transition-transform">
                        {isOpen ? <Minus className="h-5 w-5 text-purple-700" /> : <Plus className="h-5 w-5 text-purple-700" />}
                      </div>
                    </div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 border-t border-gray-100 pt-4 font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 07 — Signature Community Showcase Section — DARK OBSIDIAN MODE */}
      <section className="relative bg-[#070312] py-28 md:py-36 border-b border-white/10 text-white overflow-hidden">
        {/* Subtle Dotted Globe Vector in Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none z-0">
          <svg className="w-[800px] h-[800px] text-purple-500 fill-current" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" fill="none" />
            <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" fill="none" />
            <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 2" fill="none" />
            <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" fill="none" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          
          {/* Main Community Central Text Block */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full glass-pill-badge px-4 py-2 text-xs sm:text-sm text-purple-200 border-purple-500/30 bg-purple-500/10 mb-4 shadow-md">
              <GraduationCap className="h-4 w-4 text-purple-400" /> Community
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Join our community <br />
              where <span className="text-gradient-purple-pink">innovation thrives</span>
            </h2>

            {/* Subtitle */}
            <p className="font-sans text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
              Unlock the amazing benefits of joining Livingstone STEM—grow your technical skills, co-author research papers, win hackathons, and build lifelong professional connections.
            </p>

            {/* CTA Button */}
            <div>
              <Link
                href="/programs"
                className="btn-gradient-lime inline-flex items-center gap-2.5 rounded-full px-9 py-4 text-sm sm:text-base font-extrabold tracking-wide shadow-xl transition-all cursor-pointer"
              >
                Explore Programs <ArrowRight className="h-5 w-5 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* High-End Continuous Marquee Scrolling Showcase */}
          <div className="relative w-full overflow-hidden pt-10 pb-4">
            {/* Left and Right Fade Gradients */}
            <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#0B051D] via-[#0B051D]/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#0B051D] via-[#0B051D]/80 to-transparent z-20 pointer-events-none" />

            {/* Infinite Marquee Track Container */}
            <div className="flex w-max">
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
                className="flex space-x-6 shrink-0 pr-6"
              >
                {[
                  { name: 'Marcus Vance', major: 'CIS Major', project: 'AI-Powered Credentialing Platform', img: '/images/student-showcase/student1.jpeg' },
                  { name: 'Aaliyah Jones', major: 'Biology Pre-Med', project: 'Gene Regulation Assays Research', img: '/images/student-showcase/student2.jpeg' },
                  { name: 'Tariq Simmons', major: 'Math Honors', project: 'Actuarial Predictive Risk Model', img: '/images/student-showcase/student3.jpeg' },
                  { name: 'Maya Lin', major: 'Business & STEM', project: 'Quantitative Supply Chain Analytics', img: '/images/student-showcase/student4.jpeg' },
                  { name: 'Devin Carter', major: 'CIS Fellow', project: 'Mesh Network Router Protocols', img: '/images/student-showcase/student5.jpeg' },
                  { name: 'Dr. E. Vance', major: 'Biology Faculty', project: 'Environmental Sensor Research', img: '/images/student-showcase/student6.jpeg' },
                  { name: 'Jordan Smith', major: 'Data Science', project: 'Urban Transit Machine Learning Model', img: '/images/student-showcase/student7.jpeg' },
                  { name: 'Elena Rostova', major: 'Genetics Lab', project: 'CRISPR Sequence Mapping', img: '/images/student-showcase/student8.jpeg' },
                  { name: 'Marcus Vance', major: 'CIS Major', project: 'AI-Powered Credentialing Platform', img: '/images/student-showcase/student1.jpeg' },
                  { name: 'Aaliyah Jones', major: 'Biology Pre-Med', project: 'Gene Regulation Assays Research', img: '/images/student-showcase/student2.jpeg' },
                  { name: 'Tariq Simmons', major: 'Math Honors', project: 'Actuarial Predictive Risk Model', img: '/images/student-showcase/student3.jpeg' },
                  { name: 'Maya Lin', major: 'Business & STEM', project: 'Quantitative Supply Chain Analytics', img: '/images/student-showcase/student4.jpeg' },
                  { name: 'Devin Carter', major: 'CIS Fellow', project: 'Mesh Network Router Protocols', img: '/images/student-showcase/student5.jpeg' },
                  { name: 'Dr. E. Vance', major: 'Biology Faculty', project: 'Environmental Sensor Research', img: '/images/student-showcase/student6.jpeg' },
                  { name: 'Jordan Smith', major: 'Data Science', project: 'Urban Transit Machine Learning Model', img: '/images/student-showcase/student7.jpeg' },
                  { name: 'Elena Rostova', major: 'Genetics Lab', project: 'CRISPR Sequence Mapping', img: '/images/student-showcase/student8.jpeg' },
                ].map((card, idx) => (
                  <div
                    key={`marquee-card-${idx}`}
                    onClick={() => setSelectedStudentVideo({
                      name: card.name,
                      major: card.major,
                      project: card.project,
                      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                    })}
                    className="group relative w-60 sm:w-64 shrink-0 cursor-pointer overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:scale-105 hover:border-purple-400/80 hover:shadow-purple-500/20"
                  >
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <Image
                        src={card.img}
                        alt={card.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="256px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      
                      {/* Play Video Pill Top Right */}
                      <div className="absolute top-3.5 right-3.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-purple-600 group-hover:scale-110 transition-all shadow-md">
                        <Play className="h-4 w-4 fill-white ml-0.5" />
                      </div>

                      {/* Student Info Bottom */}
                      <div className="absolute bottom-4 left-4 right-4 space-y-1 text-left">
                        <p className="font-sans text-base sm:text-lg font-extrabold text-white flex items-center gap-1.5 leading-snug">
                          <Users className="h-4 w-4 text-purple-300 shrink-0" /> {card.name}
                        </p>
                        <p className="font-mono text-xs text-purple-200 font-bold flex items-center gap-1">
                          <GraduationCap className="h-3.5 w-3.5 text-purple-300 shrink-0" /> {card.major}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* 08 — Newsletter Section — LIGHT SLATE ELEGANT MODE */}
      <section className="bg-slate-100/90 py-24 md:py-32 text-gray-900 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal className="relative bg-white border border-gray-200 rounded-3xl p-10 md:p-20 text-center shadow-2xl overflow-hidden">
            {/* Tech grid backdrop */}
            <div className="absolute inset-0 z-0 grid-pattern opacity-30 pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 border border-purple-200 px-4 py-2 text-xs sm:text-sm font-bold text-purple-800">
                <Send className="h-4 w-4 text-purple-600 animate-pulse" /> Stay in the loop
              </div>
              
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 uppercase leading-tight">
                Subscribe to <span className="text-purple-600">STEM Hub</span>
              </h2>
              
              <p className="font-sans text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Get bi-weekly updates on student hackathons, independent lab research milestones, corporate recruitment, and internship awards directly in your inbox.
              </p>

              {subscribed ? (
                <div className="p-5 bg-purple-50 border border-purple-200 rounded-2xl text-purple-800 text-sm sm:text-base font-bold">
                  Thank you! You have successfully subscribed to the L.C. STEM Newsletter.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 pt-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full rounded-full border border-gray-300 bg-gray-50 px-6 py-4 font-sans text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                  />
                  <button
                    type="submit"
                    className="shrink-0 btn-gradient-lime rounded-full px-9 py-4 text-sm sm:text-base font-extrabold tracking-wider transition-all shadow-xl cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Video Showcase Modal */}
      <AnimatePresence>
        {selectedStudentVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStudentVideo(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/20 bg-[#0B051D] shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600/30 text-purple-300">
                    <Play className="h-4 w-4 fill-purple-300" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-white">
                      {selectedStudentVideo.name}
                    </h3>
                    <p className="font-mono text-[10px] text-purple-300 flex items-center gap-1 mt-0.5">
                      <GraduationCap className="h-3 w-3 text-purple-300 inline" /> {selectedStudentVideo.major} • {selectedStudentVideo.project}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedStudentVideo(null)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Video Player Frame / Container */}
              <div className="relative aspect-video w-full bg-black">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-purple-950/40 via-purple-900/20 to-black">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 text-white shadow-xl shadow-purple-600/40 mb-4 animate-pulse">
                    <Play className="h-8 w-8 ml-1 fill-white" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-white mb-2">
                    {selectedStudentVideo.project}
                  </h4>
                  <p className="max-w-md font-sans text-xs text-gray-300 mb-6">
                    Watch {selectedStudentVideo.name}'s research demonstration and technical presentation co-authored with Livingstone College STEM faculty.
                  </p>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-600/30 border border-purple-400/40 px-4 py-1.5 font-mono text-[10px] text-purple-200 uppercase tracking-widest">
                    <Activity className="h-3 w-3 text-pink-400" /> Demo Video Telemetry Active
                  </span>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between border-t border-white/10 bg-white/5 px-6 py-4">
                <span className="font-mono text-[10px] text-gray-400">
                  Livingstone College STEM Student Showcase
                </span>
                <Link
                  href="/spotlight"
                  onClick={() => setSelectedStudentVideo(null)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-purple-300 hover:text-white transition-colors"
                >
                  Full Student Profile <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

