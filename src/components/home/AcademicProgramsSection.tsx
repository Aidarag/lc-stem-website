import Link from 'next/link';
import { ArrowRight, BookOpen, Code, Atom, TrendingUp, Binary } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const programs = [
  {
    name: 'Computer Information Systems',
    desc: 'Software development, database management, and cloud architecture modeling.',
    accent: 'border-l-indigo-500',
    color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    href: '/programs/computer-information-systems',
    icon: <Code className="h-7 w-7" />,
  },
  {
    name: 'Biology',
    desc: 'Molecular assays, cellular genetics regulation, and field ecology.',
    accent: 'border-l-purple-500',
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    href: '/programs/biology',
    icon: <Atom className="h-7 w-7" />,
  },
  {
    name: 'Business',
    desc: 'Operations management analysis, supply chain logistics, and quantitative modeling.',
    accent: 'border-l-pink-500',
    color: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
    href: '/programs/business',
    icon: <TrendingUp className="h-7 w-7" />,
  },
  {
    name: 'Mathematics',
    desc: 'Algorithmic logic, predictive data science, and statistical math models.',
    accent: 'border-l-violet-400',
    color: 'text-violet-300 bg-violet-500/10 border-violet-500/20',
    href: '/programs/mathematics',
    icon: <Binary className="h-7 w-7" />,
  },
];

export default function AcademicProgramsSection() {
  return (
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
          {programs.map((program) => (
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
  );
}
