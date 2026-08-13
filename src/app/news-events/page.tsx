'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, X, ArrowRight, BookOpen, Newspaper, Star } from 'lucide-react';
import { newsItems, upcomingEvents, NewsItem } from '@/data/stemData';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function NewsEventsPage() {
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);

  return (
    <div className="w-full bg-[#FAF9F6] pb-24 font-sans text-slate-700">
      {/* Header */}
      <section className="border-b border-slate-200/80 bg-gradient-to-b from-[#FAF9F6] to-[#E9EEF5] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 grid-pattern opacity-30" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 space-y-4">
          <div className="eyebrow-pill">
            <Star className="h-3 w-3 fill-accent text-accent" /> STEM Feed
          </div>
          <h1 className="font-serif text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            News & Events
          </h1>
          <p className="mx-auto max-w-xl font-sans text-sm text-slate-500 md:text-base leading-relaxed">
            Stay up to date with student milestones, incoming technical workshops, guest lectures, and campus hackathons.
          </p>
        </div>
      </section>

      {/* Main split feed */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: News Articles Feed */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Newspaper className="h-5 w-5 text-accent" /> Department News
            </h2>

            <div className="space-y-6">
              {newsItems.map((news, index) => (
                <ScrollReveal
                  key={news.id}
                  delay={index * 0.05}
                  className="premium-card-light bg-white grid grid-cols-1 md:grid-cols-12 overflow-hidden rounded-2xl shadow-sm border-slate-100"
                >
                  {/* News Image */}
                  <div className="relative h-[200px] md:h-auto md:col-span-5 border-b md:border-b-0 md:border-r border-slate-100 bg-slate-50">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover"
                      sizes="(max-w-768px) 100vw, 25vw"
                    />
                  </div>

                  {/* News Info */}
                  <div className="p-6 md:col-span-7 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center gap-2 font-mono text-[9px]">
                        <span className="font-bold text-accent uppercase tracking-wider">{news.category}</span>
                        <span className="text-slate-400">{news.date}</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-slate-900 leading-snug">
                        {news.title}
                      </h3>
                      <p className="font-sans text-xs leading-relaxed text-slate-500 line-clamp-3">
                        {news.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 text-left">
                      <button
                        onClick={() => setActiveArticle(news)}
                        className="inline-flex items-center text-xs font-bold font-mono uppercase tracking-wider text-primary hover:text-accent group cursor-pointer"
                      >
                        Read Full Article <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Column: Events Calendar */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-serif text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" /> Upcoming Events
            </h2>

            <div className="border border-slate-200/80 bg-white p-6 rounded-2xl shadow-md divide-y divide-slate-100">
              {upcomingEvents.map((event, index) => (
                <ScrollReveal
                  key={event.id}
                  delay={index * 0.05}
                  className="py-6 first:pt-0 last:pb-0 space-y-3"
                >
                  <div className="flex justify-between items-start gap-2 font-mono text-[9px]">
                    <span className="bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md font-bold text-slate-600 uppercase tracking-wider">
                      {event.category}
                    </span>
                    <span className="text-accent font-semibold flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" /> {event.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-slate-900">
                    {event.title}
                  </h3>

                  <p className="font-sans text-xs text-slate-500 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-1 font-mono text-[9px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-accent" /> {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-accent" /> {event.location}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="relative z-10 border border-slate-100 bg-white shadow-2xl rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors shadow-sm active:scale-95 cursor-pointer"
                aria-label="Close reader"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Cover image at top of modal */}
              <div className="relative h-[250px] w-full border-b border-slate-100 bg-slate-50">
                <Image
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  fill
                  className="object-cover rounded-t-2xl"
                  sizes="(max-w-768px) 100vw, 600px"
                />
                <div className="absolute bottom-4 left-4 border border-slate-200/80 bg-white px-3 py-1 rounded-md font-mono text-[9px] font-bold uppercase tracking-wider text-slate-700 shadow-sm">
                  {activeArticle.date}
                </div>
              </div>

              {/* Article content */}
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent border-b border-accent/20 pb-0.5 inline-block">
                    {activeArticle.category} Announcement
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">
                    {activeArticle.title}
                  </h2>
                </div>

                <div className="border-t border-slate-100 pt-4 font-sans text-xs md:text-sm leading-relaxed text-slate-600 whitespace-pre-line space-y-4">
                  {activeArticle.content}
                </div>

                <div className="border-t border-slate-100 pt-6 text-right">
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="premium-btn rounded-lg bg-slate-900 hover:bg-slate-800 px-4 py-2 text-xs text-white shadow-sm"
                  >
                    Back to Feed
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
