import { Link } from 'react-router-dom';
import { Mountain, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-earth-900 border-t border-earth-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <Mountain className="w-6 h-6 text-moss-400" />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-xl font-semibold text-cream">Beyond Miles</span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-earth-500">Stories</span>
              </div>
            </Link>
            <p className="text-earth-400 text-sm leading-relaxed">
              Curating unforgettable mountain experiences across the Indian Himalayas. Led by certified professionals who live and breathe the mountains.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-4">Explore</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Tours & Packages', path: '/tours' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-earth-400 hover:text-moss-300 text-sm transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-4">Popular Tours</h4>
            <div className="flex flex-col gap-2">
              {['Manali Winter Escape', 'Kedarnath Sacred Trek', 'Kashmir Paradise', 'Kedarkantha Trek', 'Chardham Yatra'].map((tour) => (
                <Link
                  key={tour}
                  to="/tours"
                  className="text-earth-400 hover:text-moss-300 text-sm transition-colors w-fit"
                >
                  {tour}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+918208354452" className="flex items-center gap-2.5 text-earth-400 hover:text-moss-300 text-sm transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                +91 82083 54452
              </a>
              <a href="mailto:hello@beyondmilesstories.com" className="flex items-center gap-2.5 text-earth-400 hover:text-moss-300 text-sm transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                hello@beyondmilesstories.com
              </a>
              <div className="flex items-start gap-2.5 text-earth-400 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Himachal Pradesh, India</span>
              </div>
              <a
                href="https://instagram.com/beyondmilesstories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-earth-400 hover:text-moss-300 text-sm transition-colors"
              >
                <Instagram className="w-4 h-4 shrink-0" />
                @beyondmilesstories
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-earth-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-earth-500 text-xs">
            © {new Date().getFullYear()} Beyond Miles Stories. All rights reserved.
          </p>
          <p className="text-earth-600 text-xs">
            Crafted with ❤️ for the mountains
          </p>
        </div>
      </div>
    </footer>
  );
}
