'use client';

import Link from 'next/link';
import { 
  Users, Code, BookOpen, Trophy, Sparkles, Binary, Atom, 
  TrendingUp, ArrowRight, Star, Heart, Laptop 
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FFFFFF] pb-24 font-sans text-foreground overflow-hidden">
      
      {/* 1. About Hero — What LC STEM is (Redesigned with dark charcoal background for premium visual contrast) */}
      <section className="relative border-b border-cool-gray/10 bg-[#181818] text-white py-24 text-center overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 z-0 grid-pattern-dark opacity-15" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-6 space-y-5">
          <div className="eyebrow-pill-dark inline-flex items-center gap-1.5 border border-white/10 bg-white/5 text-white/90">
            <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" /> Student Showcase
          </div>
          <h1 className="font-serif text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl uppercase leading-none">
            LC <span className="bg-accent px-4 py-1 rounded-xl border border-accent-lime-hover/20 text-[#181818] inline-block font-bold">STEM</span>
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-sm md:text-base text-white/70 leading-relaxed">
            LC STEM is a student-led community, independent incubator, and digital portfolio showcase. We exist to document, celebrate, and accelerate the independent research, software engineering, and technical accomplishments of our peers.
          </p>
        </div>
      </section>

      {/* 2. Who We Are — The student community behind LC STEM */}
      <section className="bg-white py-16 md:py-24 border-b border-cool-gray">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal className="lg:col-span-7 space-y-6">
              <span className="font-mono text-[9px] uppercase tracking-wider text-accent-orange font-bold">Behind the Showcase</span>
              <h2 className="font-serif text-3xl font-extrabold text-foreground md:text-4xl">The Student Community</h2>
              <p className="font-sans text-sm leading-relaxed text-foreground/70">
                We are a self-organized collective of student developers, peer tutors, laboratory research leads, and analytical modelers. We recognized that our peers were constantly accomplishing incredible feats—securing enterprise tech internships, passing rigorous actuary exams, and co-authoring scientific papers—yet these victories remained locked within personal resumes.
              </p>
              <p className="font-sans text-sm leading-relaxed text-foreground/70">
                LC STEM is built by students, for students. We coordinate peer study circles, hackathon sprint groups, and open-source project squads to support one another in stepping onto the global technology stage.
              </p>
            </ScrollReveal>

            {/* Visual card panel - Refined with clean white background and unified accents */}
            <ScrollReveal className="lg:col-span-5 relative">
              <div className="premium-card-light bg-white border border-cool-gray rounded-2xl p-8 space-y-6 shadow-sm">
                <h3 className="font-serif text-xl font-bold flex items-center gap-2 text-primary">
                  <Users className="h-5 w-5" /> Community-Driven
                </h3>
                <div className="space-y-4 font-sans text-xs text-foreground/70 leading-relaxed">
                  <div className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-lime-hover mt-1.5 shrink-0 border border-accent/20" />
                    <p><strong>100% Student-Managed:</strong> Built and curated entirely by undergraduate peers to highlight achievements and build collective portfolios.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <p><strong>Peer Collaboration:</strong> Mentorship pipelines where senior students prepare incoming freshmen for internships, cloud certifications, and technical interviews.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Mission + Vision — Why the community exists and what it wants to build */}
      <section className="bg-[#FAF9F6] py-16 md:py-24 border-b border-cool-gray">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Mission */}
            <ScrollReveal className="premium-card-light bg-white border border-cool-gray p-8 rounded-2xl flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-lg bg-cool-gray/30 text-primary">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-extrabold text-foreground">Why We Exist</h3>
                <p className="font-sans text-xs md:text-sm leading-relaxed text-foreground/70">
                  Our mission is to foster analytical, computational, and molecular research capabilities among peers by establishing an active workspace of collaboration. We believe that by pooling resources, reviewing each other's code repositories, and practicing scientific defense, we can prepare every student to secure top-tier tech placements and gain entry to advanced graduate programs.
                </p>
              </div>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal className="premium-card-light bg-white border border-cool-gray p-8 rounded-2xl flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-lg bg-cool-gray/30 text-primary">
                  <Laptop className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-extrabold text-foreground">What We Want to Build</h3>
                <p className="font-sans text-xs md:text-sm leading-relaxed text-foreground/70">
                  Our vision is to build LC STEM into a recognized regional incubator of elite, diverse technical talent. We aim to establish a self-sustaining showcase of open-source applications, published molecular research, and hackathon championship trophies that inspire the next generation of builders.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Our Community — Students across Biology, CIS, Business & Mathematics */}
      <section className="bg-white py-16 md:py-24 border-b border-cool-gray">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal className="max-w-3xl space-y-4 mb-16">
            <span className="font-mono text-[9px] uppercase tracking-wider text-accent-orange font-bold">Interdisciplinary Gaps</span>
            <h2 className="font-serif text-3xl font-extrabold text-foreground md:text-4xl">Our Technical Focus Areas</h2>
            <p className="font-sans text-sm text-foreground/70">
              The LC STEM community collaborates across four core concentrations, building software and executing molecular science.
            </p>
          </ScrollReveal>

          {/* Tracks grid layout - Styled with unified primary borders and lime hover transition */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Biology',
                desc: 'Pre-med student circles, independent gene-regulation experiments, and environmental river sensor testing.',
                icon: <Atom className="h-5 w-5" />
              },
              {
                title: 'Computer Info Systems',
                desc: 'Peer developer alliance, Bluetooth mesh network design, next-gen router architectures, and web dev portfolios.',
                icon: <Code className="h-5 w-5" />
              },
              {
                title: 'Business',
                desc: 'Quantitative management strategists, supply chain simulation modeling, and small-business pricing analytics.',
                icon: <TrendingUp className="h-5 w-5" />
              },
              {
                title: 'Mathematics',
                desc: 'Theoretical proof formulation, urban planning grid analysis, and preparation groups for professional actuary exams.',
                icon: <Binary className="h-5 w-5" />
              }
            ].map((track) => (
              <ScrollReveal
                key={track.title}
                className="premium-card-light bg-white border border-cool-gray border-l-4 border-l-primary hover:border-l-accent p-6 rounded-xl flex flex-col justify-between h-full hover:-translate-y-1 hover:border-foreground/20 cursor-pointer shadow-sm transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="p-2.5 w-fit rounded-lg bg-cool-gray/30 text-primary">
                    {track.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground">{track.title}</h3>
                  <p className="font-sans text-xs text-foreground/60 leading-relaxed">{track.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What We Do — Projects, competitions, achievements, collaboration, student opportunities */}
      <section className="bg-[#FAF9F6] py-16 md:py-24 border-b border-cool-gray">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal className="max-w-3xl space-y-4 mb-16">
            <span className="font-mono text-[9px] uppercase tracking-wider text-accent-orange font-bold">Action Areas</span>
            <h2 className="font-serif text-3xl font-extrabold text-foreground md:text-4xl">What the Community Coordinates</h2>
            <p className="font-sans text-sm text-foreground/70">
              Through collaborative channels and student initiative, our community drives peer readiness across several pillars:
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Independent Project Development',
                desc: 'We support peers in building, deploying, and open-sourcing real applications—ranging from IoT environmental buoys to transit trackers—proving engineering capability with live code catalogs.',
                icon: <Code className="h-5 w-5" />
              },
              {
                title: 'Hackathons & Competitions Sprints',
                desc: 'Our members coordinate focused sprint groups to enter national and regional hackathons. We share code templates, run internal practice bowls, and co-develop AI communities.',
                icon: <Trophy className="h-5 w-5" />
              },
              {
                title: 'Industry Professional Certifications',
                desc: 'We integrate certification prep (AWS, CompTIA Security+, Lean Six Sigma) into peer study sessions, helping students validate their cloud and operational expertise to global recruiters.',
                icon: <BookOpen className="h-5 w-5" />
              },
              {
                title: 'Recruitment & Corporate Mentoring',
                desc: 'We map corporate interview paths at Microsoft, Vercel, Novartis, and FedEx, providing peer-led resume critiques, portfolio audits, and mock technical reviews.',
                icon: <Users className="h-5 w-5" />
              }
            ].map((activity, index) => (
              <ScrollReveal
                key={index}
                className="premium-card-light p-8 bg-white flex items-start gap-5 rounded-2xl shadow-sm border-cool-gray"
              >
                <div className="p-2.5 border border-cool-gray bg-[#FAF9F6] rounded-lg shrink-0 text-primary">
                  {activity.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-foreground leading-snug">{activity.title}</h3>
                  <p className="font-sans text-xs leading-relaxed text-foreground/60">{activity.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA — Explore the Community / Meet Our Students */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal className="relative bg-[#181818] border border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-lg overflow-hidden">
            {/* Tech grid backdrop */}
            <div className="absolute inset-0 z-0 grid-pattern-dark opacity-10" />

            <div className="relative z-10 max-w-xl mx-auto space-y-6">
              <div className="eyebrow-pill-dark inline-flex items-center gap-1.5 border border-white/10 bg-white/5 text-white/90">
                <Star className="h-3.5 w-3.5 text-accent animate-pulse" /> Connect With Us
              </div>
              
              <h2 className="font-serif text-4xl font-extrabold text-white md:text-5xl uppercase leading-tight">
                Explore the Community
              </h2>
              
              <p className="font-sans text-xs md:text-sm text-white/70 leading-relaxed">
                Discover outstanding student milestones and browse the portfolios of creators building the future.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Link
                  href="/spotlight"
                  className="premium-btn rounded-full bg-accent text-[#181818] font-bold hover:bg-accent-lime-hover px-6 py-3.5 text-xs tracking-wider transition-colors cursor-pointer"
                >
                  Meet Our Students
                </Link>
                <Link
                  href="/projects"
                  className="premium-btn rounded-full border border-white/15 bg-white/5 text-white px-6 py-3.5 text-xs font-semibold tracking-wide"
                >
                  Browse Achievements
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
