'use client';

import Link from 'next/link';
import { 
  Users, Code, BookOpen, Trophy, Target, Binary, Atom, 
  TrendingUp, ArrowRight, Star, Heart, Laptop, CheckCircle2, ShieldCheck, Award
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FAF9F6] pb-24 font-sans text-foreground">
      
      {/* 01 — Dark Obsidian Hero */}
      <section className="relative hero-obsidian-bg border-b border-white/10 pt-32 pb-20 md:pt-40 md:pb-28 text-white text-center overflow-hidden">
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-5 right-1/4 w-96 h-96 rounded-full bg-pink-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 z-0 grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full glass-pill-badge px-4 py-2 text-xs sm:text-sm text-purple-200">
            <Users className="h-4 w-4 text-purple-400" /> Student Community &amp; Incubator
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-none">
            About <span className="text-gradient-purple-pink">LC STEM</span>
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-normal">
            LC STEM is a student-led community, independent incubator, and digital portfolio showcase. We exist to document, celebrate, and accelerate the independent research, software engineering, and technical accomplishments of our peers.
          </p>
        </div>
      </section>

      {/* 02 — Who We Are */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-200/80">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-600 flex items-center gap-2">
                <Users className="h-4 w-4" /> Behind the Showcase
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                The Student Community
              </h2>
              <p className="font-sans text-base sm:text-lg leading-relaxed text-gray-600">
                We are a self-organized collective of student developers, peer tutors, laboratory research leads, and analytical modelers. We recognized that our peers were constantly accomplishing incredible feats—securing enterprise tech internships, passing rigorous actuary exams, and co-authoring scientific papers—yet these victories remained locked within personal resumes.
              </p>
              <p className="font-sans text-base sm:text-lg leading-relaxed text-gray-600">
                LC STEM is built by students, for students. We coordinate peer study circles, hackathon sprint groups, and open-source project squads to support one another in stepping onto the global technology stage.
              </p>
            </ScrollReveal>

            {/* Visual Card Panel */}
            <ScrollReveal className="lg:col-span-5 relative">
              <div className="bg-white border border-gray-200/90 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl hover:border-purple-300 transition-all duration-300 space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-5">
                  <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-extrabold text-gray-900">Community-Driven</h3>
                    <span className="font-mono text-xs font-semibold text-purple-600">Undergraduate Peer Network</span>
                  </div>
                </div>
                <div className="space-y-4 font-sans text-sm text-gray-600 leading-relaxed">
                  <div className="flex items-start gap-3 bg-gray-50/80 border border-gray-100 p-4 rounded-2xl">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <p><strong className="text-gray-900">100% Student-Managed:</strong> Built and curated entirely by undergraduate peers to highlight achievements and build collective portfolios.</p>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50/80 border border-gray-100 p-4 rounded-2xl">
                    <ShieldCheck className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <p><strong className="text-gray-900">Peer Collaboration:</strong> Mentorship pipelines where senior students prepare incoming freshmen for internships, cloud certifications, and technical interviews.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 03 — Mission & Vision */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24 border-b border-gray-200/80">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-600">
            Core Foundations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Mission &amp; Vision
          </h2>
          <p className="font-sans text-base text-gray-600">
            Why our community exists and what we are working together to achieve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Mission */}
          <ScrollReveal className="group bg-white rounded-3xl border border-gray-200/90 p-8 md:p-10 shadow-lg hover:shadow-2xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between h-full">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 group-hover:scale-105 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <span className="font-mono text-xs font-semibold text-gray-400 uppercase tracking-wider">Pillar 01</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900">Why We Exist</h3>
                </div>
              </div>
              <p className="font-sans text-base leading-relaxed text-gray-600">
                Our mission is to foster analytical, computational, and molecular research capabilities among peers by establishing an active workspace of collaboration. We believe that by pooling resources, reviewing each other's code repositories, and practicing scientific defense, we can prepare every student to secure top-tier tech placements and gain entry to advanced graduate programs.
              </p>
            </div>
            <div className="mt-8 pt-5 border-t border-gray-100 bg-gradient-to-br from-slate-50 to-gray-50/80 border border-gray-200/90 p-4 rounded-2xl space-y-1">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-700 flex items-center gap-1.5">
                <Target className="h-4 w-4 text-purple-600" /> Key Impact Focus
              </span>
              <p className="font-sans text-sm text-gray-600">Preparing students for enterprise software engineering roles and accredited MD-PhD fellowships.</p>
            </div>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal className="group bg-white rounded-3xl border border-gray-200/90 p-8 md:p-10 shadow-lg hover:shadow-2xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between h-full">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 group-hover:scale-105 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <Laptop className="h-6 w-6" />
                </div>
                <div>
                  <span className="font-mono text-xs font-semibold text-gray-400 uppercase tracking-wider">Pillar 02</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900">What We Want to Build</h3>
                </div>
              </div>
              <p className="font-sans text-base leading-relaxed text-gray-600">
                Our vision is to build LC STEM into a recognized regional incubator of elite, diverse technical talent. We aim to establish a self-sustaining showcase of open-source applications, published molecular research, and hackathon championship trophies that inspire the next generation of builders.
              </p>
            </div>
            <div className="mt-8 pt-5 border-t border-gray-100 bg-gradient-to-br from-slate-50 to-gray-50/80 border border-gray-200/90 p-4 rounded-2xl space-y-1">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-700 flex items-center gap-1.5">
                <Trophy className="h-4 w-4 text-amber-500" /> Long-Term Vision
              </span>
              <p className="font-sans text-sm text-gray-600">Establishing an open repository of live applications and student-led scientific publications.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 04 — Technical Focus Areas */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-200/80">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal className="max-w-3xl space-y-4 mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-600">
              Interdisciplinary Concentrations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
              Our Technical Focus Areas
            </h2>
            <p className="font-sans text-base text-gray-600">
              The LC STEM community collaborates across four core concentrations, building software and executing molecular science.
            </p>
          </ScrollReveal>

          {/* Tracks grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {[
              {
                title: 'Biology',
                desc: 'Student research circles, independent gene-regulation experiments, and environmental river sensor testing.',
                icon: <Atom className="h-6 w-6" />,
                topics: ['Gene Regulation', 'Undergraduate Research', 'IoT Buoys']
              },
              {
                title: 'Computer Info Systems',
                desc: 'Peer developer alliance, Bluetooth mesh network design, next-gen router architectures, and web dev portfolios.',
                icon: <Code className="h-6 w-6" />,
                topics: ['Cloud Architecture', 'Mesh Networks', 'Next.js & Mobile']
              },
              {
                title: 'Business',
                desc: 'Quantitative management strategists, supply chain simulation modeling, and small-business pricing analytics.',
                icon: <TrendingUp className="h-6 w-6" />,
                topics: ['Supply Chain AI', 'Pricing Analytics', 'Quantitative Strategy']
              },
              {
                title: 'Mathematics',
                desc: 'Theoretical proof formulation, urban planning grid analysis, and preparation groups for professional actuary exams.',
                icon: <Binary className="h-6 w-6" />,
                topics: ['Actuarial Science', 'GIS Analytics', 'Proof Formulation']
              }
            ].map((track) => (
              <ScrollReveal
                key={track.title}
                className="group bg-white rounded-3xl border border-gray-200/90 p-7 shadow-lg hover:shadow-2xl hover:border-purple-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="p-3 w-fit rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    {track.icon}
                  </div>
                  <h3 className="font-serif text-xl font-extrabold text-gray-900 group-hover:text-purple-700 transition-colors">
                    {track.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-gray-600">
                    {track.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-6">
                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                    {track.topics.map((topic) => (
                      <span key={topic} className="border border-purple-200/80 bg-purple-50/70 px-2.5 py-0.5 rounded-full text-purple-700 font-semibold">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — What We Do */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24 border-b border-gray-200/80">
        <ScrollReveal className="max-w-3xl space-y-4 mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-600">
            Community Pillars
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            What the Community Coordinates
          </h2>
          <p className="font-sans text-base text-gray-600">
            Through collaborative channels and student initiative, our community drives peer readiness across four key action areas:
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {[
            {
              title: 'Independent Project Development',
              desc: 'We support peers in building, deploying, and open-sourcing real applications—ranging from IoT environmental buoys to transit trackers—proving engineering capability with live code catalogs.',
              icon: <Code className="h-6 w-6" />,
              tags: ['Open Source', 'Production Deployments', 'Live Catalogs']
            },
            {
              title: 'Hackathons & Competition Sprints',
              desc: 'Our members coordinate focused sprint groups to enter national and regional hackathons. We share code templates, run internal practice bowls, and co-develop AI communities.',
              icon: <Trophy className="h-6 w-6" />,
              tags: ['36-Hour Sprints', 'AI Competitions', 'Regional Bowls']
            },
            {
              title: 'Industry Professional Certifications',
              desc: 'We integrate certification prep (AWS, CompTIA Security+, Lean Six Sigma) into peer study sessions, helping students validate their cloud and operational expertise to global recruiters.',
              icon: <BookOpen className="h-6 w-6" />,
              tags: ['AWS Certified', 'CompTIA Security+', 'Lean Six Sigma']
            },
            {
              title: 'Recruitment & Corporate Mentoring',
              desc: 'We map corporate interview paths at Microsoft, Vercel, Novartis, and FedEx, providing peer-led resume critiques, portfolio audits, and mock technical reviews.',
              icon: <Users className="h-6 w-6" />,
              tags: ['Microsoft & Google Prep', 'Portfolio Audits', 'Mock Interviews']
            },
            {
              title: 'Research & Data Exploration',
              desc: 'We support students in conducting meaningful research through data collection, analysis, visualization, and presentation. Members can explore real-world questions, communicate their findings, and showcase research focused on societal impact.',
              icon: <Binary className="h-6 w-6" />,
              tags: ['Data Analysis', 'Data Visualization', 'Research Presentations']
            }
          ].map((activity, index) => (
            <ScrollReveal
              key={index}
              className={`group bg-white rounded-3xl border border-gray-200/90 p-8 shadow-lg hover:shadow-2xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between h-full ${
                index === 4 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-start gap-5">
                <div className="p-3.5 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 shrink-0 group-hover:scale-105 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  {activity.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-extrabold text-gray-900 leading-snug group-hover:text-purple-700 transition-colors">
                    {activity.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base leading-relaxed text-gray-600">
                    {activity.desc}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-6 flex flex-wrap gap-2 font-mono text-xs">
                {activity.tags.map((tag) => (
                  <span key={tag} className="border border-purple-200/80 bg-purple-50/70 px-3 py-1 rounded-full text-purple-700 font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 06 — CTA Section */}
      <section className="mx-auto max-w-7xl px-6 pt-16">
        <ScrollReveal className="relative hero-obsidian-bg border border-white/10 rounded-3xl p-10 md:p-16 text-center shadow-2xl overflow-hidden">
          <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-5 right-1/4 w-96 h-96 rounded-full bg-pink-600/10 blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 z-0 grid-pattern-dark opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full glass-pill-badge px-4 py-2 text-xs sm:text-sm text-purple-200">
              <Star className="h-4 w-4 text-purple-400 animate-pulse" /> Connect With Us
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase leading-tight">
              Explore the Community
            </h2>
            
            <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
              Discover outstanding student milestones, inspect live project repositories, and browse the portfolios of creators building the future.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link
                href="/spotlight"
                className="bg-purple-600 text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg hover:bg-purple-700 transition-colors inline-flex items-center gap-2"
              >
                Meet Our Students <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="bg-white/10 text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full border border-white/20 hover:bg-white/20 transition-colors inline-flex items-center gap-2"
              >
                Browse Achievements
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
