import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center z-50">
          <img 
            src="https://i.imgur.com/fYxrrLd.png" 
            alt="Top Notch Logo" 
            className="h-16 md:h-24 w-auto object-contain drop-shadow-md transition-transform hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                location.pathname === link.path
                  ? 'text-primary'
                  : isScrolled ? 'text-dark/70' : 'text-white/80 hover:text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:5614017209" className={cn("flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary", isScrolled ? "text-dark" : "text-white")}>
            <Phone className="w-4 h-4" />
            (561) 401-7209
          </a>
          <Link
            to="/contact"
            className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn("lg:hidden z-50 p-2 -mr-2 transition-colors", isScrolled || mobileMenuOpen ? "text-dark" : "text-white")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl shadow-2xl border-t border-gray-100 lg:hidden h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="flex flex-col px-8 py-10 gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      'text-4xl font-bold tracking-tighter block py-2 transition-colors',
                      location.pathname === link.path ? 'text-primary' : 'text-dark hover:text-primary'
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-4 mt-8 pt-8 border-t border-gray-100"
              >
                <a href="tel:5614017209" className="flex items-center justify-center gap-3 text-dark font-medium py-4 bg-light-gray rounded-2xl text-lg transition-transform active:scale-95">
                  <Phone className="w-5 h-5 text-primary" />
                  (561) 401-7209
                </a>
                <Link
                  to="/contact"
                  className="bg-primary text-white text-center py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 text-lg transition-transform active:scale-95"
                >
                  Book Your Detail
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
