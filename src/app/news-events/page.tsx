'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, X, ArrowRight, Newspaper, Star } from 'lucide-react';
import { newsItems, upcomingEvents, NewsItem } from '@/data/stemData';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function NewsEventsPage() {
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);

  return (
    <div className="w-full bg-[#FAF9F6] pb-24 font-sans text-gray-700">

      {/* Hero — Dark Obsidian */}
      <section className="relative hero-obsidian-bg border-b border-white/10 pt-32 pb-20 md:pt-40 md:pb-28 text-white text-center overflow-hidden">
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-5 right-1/4 w-80 h-80 rounded-full bg-pink-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 z-0 grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full glass-pill-badge px-4 py-2 text-xs sm:text-sm text-purple-200">
            <Star className="h-4 w-4 text-purple-400 fill-purple-400" /> STEM Feed
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-none">
            News &amp; <span className="text-gradient-purple-pink">Events</span>
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-normal">
            Stay up to date with student milestones, incoming technical workshops, guest lectures, and campus hackathons.
          </p>
        </div>
      </section>

      {/* Main split feed */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: News Articles Feed */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center justify-between border-b border-gray-200/80 pb-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900 flex items-center gap-2.5">
                <Newspaper className="h-6 w-6 text-purple-600" /> Department News
              </h2>
              <span className="font-mono text-xs font-semibold text-gray-500 uppercase tracking-wider">{newsItems.length} Articles</span>
            </div>

            <div className="space-y-6">
              {newsItems.map((news, index) => (
                <ScrollReveal
                  key={news.id}
                  delay={index * 0.05}
                  className="group bg-white rounded-3xl border border-gray-200/90 overflow-hidden shadow-lg hover:shadow-2xl hover:border-purple-300 transition-all duration-300 cursor-pointer grid grid-cols-1 md:grid-cols-12"
                >
                  {/* News Image */}
                  <div className="relative h-[200px] md:h-auto md:col-span-5 overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-w-768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider">
                      {news.category}
                    </span>
                  </div>

                  {/* News Info */}
                  <div className="p-6 md:col-span-7 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <span className="font-mono text-xs font-semibold text-gray-500 flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-purple-600" /> {news.date}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-gray-900 leading-snug group-hover:text-purple-700 transition-colors">
                        {news.title}
                      </h3>
                      <p className="font-sans text-sm leading-relaxed text-gray-600 line-clamp-3">
                        {news.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100">
                      <button
                        onClick={() => setActiveArticle(news)}
                        className="inline-flex items-center text-sm font-bold font-mono uppercase tracking-wider text-purple-600 hover:text-purple-800 group/btn cursor-pointer"
                      >
                        Read Full Article <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Column: Events Calendar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between border-b border-gray-200/80 pb-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900 flex items-center gap-2.5">
                <Calendar className="h-6 w-6 text-purple-600" /> Upcoming
              </h2>
              <span className="font-mono text-xs font-semibold text-gray-500 uppercase tracking-wider">{upcomingEvents.length} Events</span>
            </div>

            <div className="bg-white border border-gray-200/90 rounded-3xl shadow-xl overflow-hidden">
              {upcomingEvents.map((event, index) => (
                <ScrollReveal
                  key={event.id}
                  delay={index * 0.05}
                  className={`p-6 space-y-3 ${index < upcomingEvents.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-gray-50 transition-colors`}
                >
                  <div className="flex justify-between items-start gap-2">
                    <span className="bg-purple-50 border border-purple-200 text-purple-700 px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider">
                      {event.category}
                    </span>
                    <span className="text-purple-600 font-mono text-xs font-semibold flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" /> {event.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-extrabold text-gray-900 leading-snug">
                    {event.title}
                  </h3>

                  <p className="font-sans text-sm text-gray-600 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-x-5 gap-y-1.5 pt-1 font-mono text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-purple-600" /> {event.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-purple-600" /> {event.location}
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
              className="absolute inset-0 bg-gray-950/60 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 320, damping: 26 }}
              className="relative z-10 bg-white shadow-2xl rounded-3xl max-w-2xl w-full max-h-[88vh] overflow-y-auto border border-gray-200/90"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors shadow-sm active:scale-95 cursor-pointer"
                aria-label="Close reader"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Cover image */}
              <div className="relative h-[260px] w-full overflow-hidden rounded-t-3xl">
                <Image
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 flex items-center gap-3">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider">
                    {activeArticle.category}
                  </span>
                  <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full font-mono text-xs font-semibold">
                    {activeArticle.date}
                  </span>
                </div>
              </div>

              {/* Article content */}
              <div className="p-7 md:p-9 space-y-6">
                <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                  {activeArticle.title}
                </h2>

                <div className="border-t border-gray-100 pt-5 font-sans text-sm md:text-base leading-relaxed text-gray-600 whitespace-pre-line space-y-4">
                  {activeArticle.content}
                </div>

                <div className="border-t border-gray-100 pt-6 flex justify-end">
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="btn-gradient-lime inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold tracking-wide shadow-md cursor-pointer"
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
