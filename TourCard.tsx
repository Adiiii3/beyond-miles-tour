import { motion } from 'framer-motion';
import { Clock, IndianRupee, Sun } from 'lucide-react';
import { type TourPackage, getWhatsAppLink } from '../lib/data';

interface TourCardProps {
  tour: TourPackage;
  index: number;
}

export default function TourCard({ tour, index }: TourCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-earth-800/60 rounded-2xl overflow-hidden border border-earth-700/50 hover:border-moss-600/50 transition-all duration-500 hover:shadow-xl hover:shadow-moss-900/10"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="bg-moss-600/90 backdrop-blur-sm text-cream text-xs font-medium px-3 py-1 rounded-full">
            {tour.destination}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif text-xl font-semibold text-cream mb-2 group-hover:text-moss-300 transition-colors">
          {tour.name}
        </h3>
        <p className="text-earth-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {tour.description}
        </p>

        {/* Details */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-5">
          <div className="flex items-center gap-1.5 text-earth-300 text-xs">
            <Clock className="w-3.5 h-3.5 text-moss-400" />
            {tour.duration}
          </div>
          <div className="flex items-center gap-1.5 text-earth-300 text-xs">
            <IndianRupee className="w-3.5 h-3.5 text-moss-400" />
            Starting {tour.price}
          </div>
          <div className="flex items-center gap-1.5 text-earth-300 text-xs">
            <Sun className="w-3.5 h-3.5 text-moss-400" />
            {tour.bestSeason}
          </div>
        </div>

        {/* CTA */}
        <a
          href={getWhatsAppLink(tour.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-moss-600 hover:bg-moss-500 text-cream font-medium text-sm py-2.5 rounded-xl transition-colors"
        >
          Inquire Now
        </a>
      </div>
    </motion.div>
  );
}
