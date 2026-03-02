import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Compass, Users, Award, Heart, Instagram } from 'lucide-react';
import TourCard from '../components/TourCard';
import { tourPackages, instagramPosts } from '../lib/data';

const featuredTours = tourPackages.filter(
  (t) => t.destination === 'Manali' || t.destination === 'Kedarnath'
);

const stats = [
  { value: '50+', label: 'Treks Led' },
  { value: '2000+', label: 'Happy Trekkers' },
  { value: '15+', label: 'Destinations' },
  { value: '5★', label: 'Avg. Rating' },
];

const reasons = [
  {
    icon: Shield,
    title: 'NIM Certified Leader',
    desc: 'Adii holds a Basic Mountaineering Course (BMC) certification from the prestigious Nehru Institute of Mountaineering.',
  },
  {
    icon: Compass,
    title: 'Expert Route Planning',
    desc: 'Every trek is meticulously planned with safety checkpoints, acclimatization schedules, and backup routes.',
  },
  {
    icon: Users,
    title: 'Small Group Experiences',
    desc: 'We keep groups intimate to ensure personalized attention, deeper connections, and minimal environmental impact.',
  },
  {
    icon: Award,
    title: 'Professional Equipment',
    desc: 'Top-grade trekking gear, first-aid kits, and satellite communication devices on every expedition.',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-mountain.jpg"
            alt="Dramatic mountain landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-earth-900/50 via-earth-900/30 to-earth-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-earth-900/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-moss-300 tracking-[0.35em] uppercase text-xs sm:text-sm font-medium mb-4">
              Adventure Awaits Beyond the Miles
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream leading-[0.95] mb-6">
              Beyond Miles
              <br />
              <span className="text-moss-400">Stories</span>
            </h1>
            <p className="text-earth-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Curating cinematic mountain journeys across the Indian Himalayas.
              Every trail has a story — let us help you write yours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/tours"
              className="bg-moss-600 hover:bg-moss-500 text-cream font-medium px-8 py-3.5 rounded-xl flex items-center gap-2 transition-colors text-sm"
            >
              Explore Tours
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="border border-earth-400/40 hover:border-cream/60 text-cream font-medium px-8 py-3.5 rounded-xl transition-colors text-sm"
            >
              Plan Your Trip
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 border-2 border-earth-400/50 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-earth-400/70 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-earth-800/50 border-y border-earth-700/50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-serif text-3xl sm:text-4xl font-bold text-moss-400">{stat.value}</div>
                <div className="text-earth-400 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-moss-400 tracking-[0.3em] uppercase text-xs font-medium mb-3">Featured</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream">Signature Expeditions</h2>
          <p className="text-earth-400 mt-4 max-w-xl mx-auto">
            Our most sought-after journeys, handcrafted for those who seek the extraordinary.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {featuredTours.map((tour, i) => (
            <TourCard key={tour.id} tour={tour} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 text-moss-400 hover:text-moss-300 font-medium text-sm transition-colors"
          >
            View All Tours
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* Meet Your Trek Leader */}
      <section className="bg-earth-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-md mx-auto lg:mx-0">
                <img
                  src="/images/trek-leader.jpg"
                  alt="Adii - Trek Leader"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-earth-900/80 backdrop-blur-sm rounded-xl p-4 border border-earth-700/50">
                    <div className="flex items-center gap-3">
                      <Award className="w-8 h-8 text-moss-400 shrink-0" />
                      <div>
                        <p className="text-cream font-semibold text-sm">BMC Certified</p>
                        <p className="text-earth-400 text-xs">Nehru Institute of Mountaineering</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-moss-400 tracking-[0.3em] uppercase text-xs font-medium mb-3">
                Meet Your Trek Leader
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-6">
                Led by Adii — Mountains
                <br />Are His Second Home
              </h2>
              <div className="space-y-4 text-earth-300 text-sm leading-relaxed">
                <p>
                  With an official <strong className="text-cream">Basic Mountaineering Course (BMC) certification</strong> from the
                  renowned <strong className="text-cream">Nehru Institute of Mountaineering (NIM)</strong>, Nanda Devi East Base Camp,
                  Adii brings professional-grade expertise to every expedition.
                </p>
                <p>
                  Having led over 50 treks across the Indian Himalayas — from the frozen passes of Ladakh
                  to the lush valleys of Arunachal — Adii doesn't just guide treks, he curates transformative
                  mountain experiences that stay with you forever.
                </p>
                <p>
                  His philosophy is simple: <em className="text-moss-300">"The mountains don't care about your resume.
                  They only care about your courage, your respect, and your willingness to be humbled."</em>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-moss-400 tracking-[0.3em] uppercase text-xs font-medium mb-3">Why Us</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream">
            Why Choose Beyond Miles Stories
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-earth-800/40 border border-earth-700/40 rounded-2xl p-6 hover:border-moss-600/40 transition-colors group"
            >
              <div className="w-12 h-12 bg-moss-700/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-moss-600/30 transition-colors">
                <reason.icon className="w-6 h-6 text-moss-400" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-cream mb-2">{reason.title}</h3>
              <p className="text-earth-400 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="bg-earth-800/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <Instagram className="w-5 h-5 text-moss-400" />
              <p className="text-moss-400 tracking-[0.3em] uppercase text-xs font-medium">Instagram</p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">
              @beyondmilesstories
            </h2>
            <p className="text-earth-400 mt-3">Follow our cinematic journey through the Himalayas</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {instagramPosts.map((post, i) => (
              <motion.a
                key={i}
                href="https://instagram.com/beyondmilesstories"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={post.src}
                  alt="Instagram post"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-earth-900/0 group-hover:bg-earth-900/60 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-cream text-sm">
                    <Heart className="w-4 h-4" fill="white" />
                    {post.likes}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/gallery-4.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-earth-900/80 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-6">
              Ready to Write Your Mountain Story?
            </h2>
            <p className="text-earth-200 mb-8 max-w-lg mx-auto">
              Join our next expedition and discover why every trail has a story worth telling.
            </p>
            <Link
              to="/tours"
              className="inline-flex items-center gap-2 bg-moss-600 hover:bg-moss-500 text-cream font-medium px-8 py-3.5 rounded-xl transition-colors text-sm"
            >
              Browse All Packages
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
