import { Outlet, useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { CalendarDays, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import CustomCursor from '../ui/CustomCursor';
import PageTransition from '../ui/PageTransition';
import Magnetic from '../ui/Magnetic';

export default function Layout() {
  const location = useLocation();
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col relative bg-dark selection:bg-primary selection:text-white">
      <div className="noise-overlay"></div>
      <CustomCursor />
      <Navbar />
      <main className="flex-grow bg-white relative z-10">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        
        {/* Live Chat Window */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="bg-white rounded-3xl shadow-2xl border border-gray-100 w-80 overflow-hidden flex flex-col mb-2 origin-bottom-right"
            >
              <div className="bg-dark text-white p-5 flex justify-between items-center">
                <div>
                  <h4 className="font-bold tracking-tight">Top Notch Support</h4>
                  <p className="text-xs text-gray-400 flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span>
                    Typically replies in minutes
                  </p>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-5 h-64 bg-light-gray overflow-y-auto flex flex-col gap-3">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-dark self-start max-w-[85%] leading-relaxed">
                  Hi there! 👋 Looking to book a detail or have questions about our services?
                </div>
              </div>
              <div className="p-4 bg-white border-t border-gray-100">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Type your message..." 
                    className="w-full bg-light-gray rounded-full px-5 py-3 text-sm outline-none focus:ring-1 focus:ring-primary transition-all"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary font-semibold text-sm hover:text-primary-dark transition-colors">
                    Send
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-3">
          {/* Chat Toggle Button */}
          <Magnetic strength={0.3}>
            <button 
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="bg-dark hover:bg-dark-gray text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-105 border border-white/10"
              aria-label="Open live chat"
            >
              {isChatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
            </button>
          </Magnetic>

          {/* Floating Book Now Button - Hidden on contact page */}
          {location.pathname !== '/contact' && (
            <Magnetic strength={0.3}>
              <Link 
                to="/contact"
                className="bg-primary hover:bg-primary-dark text-white px-7 py-4 rounded-full shadow-2xl shadow-primary/30 flex items-center gap-3 transition-transform hover:scale-105 group h-14"
              >
                <CalendarDays className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span className="font-bold hidden sm:inline tracking-tight">Book Now</span>
              </Link>
            </Magnetic>
          )}
        </div>
      </div>
    </div>
  );
}


