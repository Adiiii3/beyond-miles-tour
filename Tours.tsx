import { useState } from 'react';
import { motion } from 'framer-motion';
import TourCard from '../components/TourCard';
import { tourPackages, destinations, treks } from '../lib/data';

export default function Tours() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const allFilters = ['All', ...destinations, ...treks];

  const filtered =
    activeFilter === 'All'
      ? tourPackages
      : tourPackages.filter((t) => t.tags.includes(activeFilter));

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/kuari-pass.jpg" alt="Mountain trek" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/40 to-earth-900" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-moss-300 tracking-[0.35em] uppercase text-xs sm:text-sm font-medium mb-4">Explore</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-cream">Tours & Packages</h1>
            <p className="text-earth-200 mt-4 max-w-lg mx-auto">
              Handcrafted itineraries for every kind of mountain soul
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Chips */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-12 justify-center"
        >
          {allFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === filter
                  ? 'bg-moss-600 border-moss-600 text-cream shadow-lg shadow-moss-900/20'
                  : 'bg-earth-800/50 border-earth-700/50 text-earth-300 hover:border-moss-600/50 hover:text-cream'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Tour Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tour, i) => (
            <TourCard key={tour.id} tour={tour} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-earth-400 text-lg">No packages found for this filter.</p>
          </div>
        )}
      </section>
    </div>
  );
}
