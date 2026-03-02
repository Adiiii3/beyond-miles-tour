import { motion } from 'framer-motion';
import { Award, Mountain, Heart, Shield, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    desc: 'Every expedition follows strict safety protocols with certified leaders, emergency equipment, and real-time weather monitoring.',
  },
  {
    icon: Heart,
    title: 'Authentic Experiences',
    desc: 'We go beyond tourist trails to create genuine connections with local communities, cultures, and the raw beauty of nature.',
  },
  {
    icon: Mountain,
    title: 'Respect for Nature',
    desc: 'Leave-no-trace principles guide every trek. We actively participate in mountain cleanup drives and sustainable tourism.',
  },
  {
    icon: Users,
    title: 'Community Spirit',
    desc: 'Our trekking family spans across India. We foster bonds that last beyond the mountains through shared experiences.',
  },
  {
    icon: Target,
    title: 'Attention to Detail',
    desc: 'From campsite selection to meal planning, every detail is carefully curated to ensure a seamless, memorable experience.',
  },
  {
    icon: Award,
    title: 'Professional Excellence',
    desc: 'NIM-certified leadership, professional-grade equipment, and years of Himalayan experience back every expedition.',
  },
];

const timeline = [
  { year: '2019', title: 'The First Steps', desc: 'Adii completes his BMC from the Nehru Institute of Mountaineering, igniting a passion to share the mountains with others.' },
  { year: '2020', title: 'Born from Passion', desc: 'Beyond Miles Stories is founded with a simple mission: make the Himalayas accessible to every aspiring adventurer.' },
  { year: '2021', title: 'Growing Trails', desc: 'Expanded to 8+ destinations across Himachal, Uttarakhand, and Kashmir. Our trekking community crosses 500 members.' },
  { year: '2023', title: 'Northeast Frontier', desc: 'Launched Arunachal Pradesh and Northeast India expeditions, bringing untouched frontiers to our travelers.' },
  { year: '2024', title: 'The Story Continues', desc: 'Over 2000 happy trekkers, 50+ expeditions led, and a reputation as one of India\'s most trusted adventure outfits.' },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/about-team.jpg" alt="Mountain village" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/40 to-earth-900" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-moss-300 tracking-[0.35em] uppercase text-xs sm:text-sm font-medium mb-4">Our Story</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-cream">About Us</h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-8">The Story Behind the Name</h2>
          <div className="space-y-5 text-earth-300 leading-relaxed">
            <p>
              Beyond Miles Stories was born from a simple belief: <em className="text-moss-300">the best stories are written on mountain trails.</em> Founded by Adii, a NIM-certified mountaineer with an insatiable love for the Himalayas, our journey began with a backpack, a dream, and the conviction that adventure should be accessible to everyone.
            </p>
            <p>
              We're not just another travel agency. We're a collective of mountain lovers, storytellers, and certified professionals who believe that every trek is a chapter in your life's greatest adventure. From the snow-laden passes of Kedarnath to the pristine meadows of Dayara Bugyal, we curate experiences that transform travelers into storytellers.
            </p>
            <p>
              The name "Beyond Miles" represents our philosophy — that the real journey begins where the road ends, and the stories you carry back are worth more than the miles you cover.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Trek Leader */}
      <section className="bg-earth-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-md mx-auto lg:mx-0">
                <img src="/images/trek-leader.jpg" alt="Adii" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/70 via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-moss-400 tracking-[0.3em] uppercase text-xs font-medium mb-3">Founder & Lead</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-2">Adii</h2>
              <p className="text-moss-300 text-sm mb-6">Certified Mountaineer & Trek Leader</p>

              <div className="bg-earth-800/60 border border-earth-700/50 rounded-xl p-5 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-8 h-8 text-moss-400" />
                  <div>
                    <p className="text-cream font-semibold">Basic Mountaineering Course (BMC)</p>
                    <p className="text-earth-400 text-sm">Nehru Institute of Mountaineering (NIM)</p>
                  </div>
                </div>
                <p className="text-earth-300 text-sm leading-relaxed">
                  The BMC from NIM is one of India's most prestigious mountaineering certifications, covering technical climbing, high-altitude survival, rescue operations, and expedition planning.
                </p>
              </div>

              <div className="space-y-4 text-earth-300 text-sm leading-relaxed">
                <p>
                  With over 50 professionally led treks across the Indian Himalayas, Adii brings a rare combination of technical expertise, local knowledge, and an infectious passion for the outdoors.
                </p>
                <p>
                  His approach to trekking goes beyond reaching summits — it's about the conversations around campfires, the silence of snow-covered peaks at dawn, and the stories that emerge when you push beyond your comfort zone.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-moss-400 tracking-[0.3em] uppercase text-xs font-medium mb-3">Our Journey</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">Milestones</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-earth-700" />
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className={`hidden md:block flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className="bg-earth-800/50 border border-earth-700/40 rounded-xl p-5">
                  <h3 className="font-serif text-lg font-semibold text-cream mb-1">{item.title}</h3>
                  <p className="text-earth-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="relative z-10 w-8 h-8 bg-moss-600 rounded-full flex items-center justify-center shrink-0 border-4 border-earth-900">
                <div className="w-2 h-2 bg-cream rounded-full" />
              </div>
              <div className="flex-1">
                <span className="text-moss-400 font-serif text-2xl font-bold">{item.year}</span>
                <div className="md:hidden mt-2 bg-earth-800/50 border border-earth-700/40 rounded-xl p-5">
                  <h3 className="font-serif text-lg font-semibold text-cream mb-1">{item.title}</h3>
                  <p className="text-earth-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-earth-800/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-moss-400 tracking-[0.3em] uppercase text-xs font-medium mb-3">What We Stand For</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">Our Values</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-earth-800/40 border border-earth-700/40 rounded-2xl p-6 hover:border-moss-600/40 transition-colors"
              >
                <v.icon className="w-8 h-8 text-moss-400 mb-4" />
                <h3 className="font-serif text-lg font-semibold text-cream mb-2">{v.title}</h3>
                <p className="text-earth-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-6">
            Join the Beyond Miles Family
          </h2>
          <p className="text-earth-300 mb-8">
            Whether it's your first trek or your fiftieth, there's always a new story waiting in the mountains.
          </p>
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 bg-moss-600 hover:bg-moss-500 text-cream font-medium px-8 py-3.5 rounded-xl transition-colors text-sm"
          >
            Explore Our Tours
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
