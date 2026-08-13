'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, GraduationCap, Building2, Star, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const benefits = [
  {
    icon: <Users className="h-5 w-5 text-accent" />,
    title: 'Dedicated Peer & Faculty Mentorship',
    description: 'Enjoy small class sizes and direct access to professors who co-author research papers, mentor student clubs, and coordinate corporate networking pipelines.',
  },
  {
    icon: <Building2 className="h-5 w-5 text-accent" />,
    title: 'State-of-the-Art Research Labs',
    description: 'Conduct experiments in fully equipped molecular biology assay spaces, execute network simulations in advanced CIS labs, and model supply chain risk tables.',
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-accent" />,
    title: 'Direct Corporate Career Pipelines',
    description: 'We actively prepare students for internships at Vercel, Microsoft, Novartis, FedEx, and PwC, offering resume reviews and professional certification tracks.',
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-accent" />,
    title: 'Comprehensive Certification Prep',
    description: 'Preparation for industry-recognized certifications like AWS Cloud Practitioner, CompTIA Security+, Lean Six Sigma, and professional actuarial exams (SOA FM/P) is integrated directly into the curriculum.',
  },
];

const faculty = [
  {
    name: 'Dr. Sarah Jenkins',
    role: 'Department Chair & Molecular Biology Professor',
    education: 'Ph.D. in Cellular Biology — Duke University',
    bio: 'Dr. Jenkins oversees research partnerships and student pre-med placements. Her research focuses on targeted epigenetic cancer cell therapies.',
  },
  {
    name: 'Dr. Arthur Vance',
    role: 'Professor of Computer Information Systems',
    education: 'Ph.D. in Computer Science — Georgia Institute of Technology',
    bio: 'Dr. Vance coordinates student developer initiatives and cybersecurity labs. He specializes in decentralized architectures and bluetooth mesh routing networks.',
  },
  {
    name: 'Dr. Eleanor Rigby',
    role: 'Director of Mathematical Sciences',
    education: 'Ph.D. in Applied Mathematics — UNC Chapel Hill',
    bio: 'Dr. Rigby guides research projects in statistical modeling and data science. She also oversees student preparation for professional actuarial board exams.',
  },
  {
    name: 'Professor Charles Xavier',
    role: 'Coordinator of Quantitative Business Systems',
    education: 'MBA & M.S. in Operations Management — Harvard Business School',
    bio: 'Prof. Xavier leads supply chain simulation labs and mentors students in quantitative operations and green logistical modeling.',
  },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FAF9F6] pb-24 font-sans text-slate-700">
      {/* Page Header (Clean Warm Minimal) */}
      <section className="border-b border-slate-200/80 bg-gradient-to-b from-[#FAF9F6] to-[#E9EEF5] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 grid-pattern opacity-30" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 space-y-4">
          <div className="eyebrow-pill">
            <Star className="h-3 w-3 fill-accent text-accent" /> Department Legacy
          </div>
          <h1 className="font-serif text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Who We Are
          </h1>
          <p className="mx-auto max-w-xl font-sans text-sm text-slate-500 md:text-base leading-relaxed">
            Guiding students to academic excellence, innovative research, and global tech leadership at Livingstone College.
          </p>
        </div>
      </section>

      {/* History, Mission & Vision */}
      <section className="mx-auto max-w-7xl px-6 pt-16 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* History / Who We Are */}
          <ScrollReveal className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl font-bold text-slate-900">Our Vision & Legacy</h2>
            <p className="font-sans text-sm leading-relaxed text-slate-500">
              Livingstone College STEM is not a traditional academic department. We are an incubator of undergraduate talent. We realize that our students are capable of extraordinary milestones: building logistics software, coordinating local health assay programs, and writing research papers presented at national boards.
            </p>
            <p className="font-sans text-sm leading-relaxed text-slate-500">
              Unfortunately, many achievements are only shared within campus bounds. This platform exists as the official showcase: a living archive of accomplishments, projects, and opportunities that prove our department is at the cutting edge of science and technology education.
            </p>
            <div className="pt-4">
              <Link
                href="/programs"
                className="inline-flex items-center text-xs font-bold font-mono uppercase tracking-wider text-primary hover:text-accent group"
              >
                Browse Concentrations <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Mission & Vision Card */}
          <ScrollReveal delay={0.1} className="lg:col-span-5 premium-card-light p-8 rounded-2xl bg-white space-y-6 shadow-md border-slate-100">
            <div className="space-y-2.5">
              <h3 className="font-serif text-xl font-bold text-slate-900 flex items-center gap-2">
                <Star className="h-4 w-4 text-accent fill-accent" /> Our Mission
              </h3>
              <p className="font-sans text-xs leading-relaxed text-slate-500">
                To equip undergraduate students with the analytical, computational, and scientific reasoning capabilities required to solve industrial problems and pursue postgraduate studies at top-tier research institutes.
              </p>
            </div>

            <div className="border-t border-slate-100 my-4" />

            <div className="space-y-2.5">
              <h3 className="font-serif text-xl font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="h-4 w-4 text-accent" /> Our Vision
              </h3>
              <p className="font-sans text-xs leading-relaxed text-slate-500">
                To establish Livingstone College as a recognized regional hub for diverse STEM talent, known for undergraduate research publications, hackathon championships, and high placement rates in global technology firms.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Study STEM here? */}
      <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
        <ScrollReveal className="max-w-3xl space-y-4 mb-12">
          <div className="eyebrow-pill">
            <Star className="h-3 w-3 fill-accent text-accent" /> The Livingstone Edge
          </div>
          <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-4xl">
            Why Study STEM at Livingstone?
          </h2>
          <p className="font-sans text-sm text-slate-500 md:text-base">
            We bridge academic theory with modern corporate execution. Here is why our students consistently secure high-demand technical placements:
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.05}
              className="premium-card-light p-8 bg-white flex items-start gap-5 rounded-2xl shadow-sm border-slate-100"
            >
              <div className="p-2.5 border border-slate-200 bg-slate-50 rounded-lg shrink-0 text-accent">
                {benefit.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-slate-900 leading-snug">{benefit.title}</h3>
                <p className="font-sans text-xs leading-relaxed text-slate-500">{benefit.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Faculty Showcase */}
      <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
        <ScrollReveal className="max-w-3xl space-y-4 mb-16">
          <div className="eyebrow-pill">
            <Star className="h-3 w-3 fill-accent text-accent" /> Academic Mentors
          </div>
          <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-4xl">
            Our Faculty Leaders
          </h2>
          <p className="font-sans text-sm text-slate-500 md:text-base">
            Our professors are active researchers, developers, and consultants who work closely with undergraduate students to guide their scientific journeys.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faculty.map((member, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.05}
              className="premium-card-light p-8 bg-white rounded-2xl shadow-sm border-slate-100 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 leading-snug">{member.name}</h3>
                  <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-accent mt-0.5">{member.role}</p>
                  <p className="font-mono text-[8px] text-slate-400 uppercase tracking-widest mt-0.5">{member.education}</p>
                </div>
                <p className="font-sans text-xs leading-relaxed text-slate-500">
                  {member.bio}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
