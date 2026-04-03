import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import Magnetic from '@/components/ui/Magnetic';
import { useRef } from 'react';

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 400]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="w-full bg-dark">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden bg-dark">
        {/* Background Image with Parallax */}
        <motion.div 
          style={{ y: heroY }} 
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://instagram.fdac3-2.fna.fbcdn.net/v/t51.75761-15/508330774_17951957213986580_5877227516971550605_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=103&ig_cache_key=MzY1NTgzNTI2MDcwNjI0NDIyMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=YCEEVqNtq7MQ7kNvwFCB_45&_nc_oc=Adr4hyJJiujPOsrZ9irfISQYmKN86GKUnOLcPOTRjQDj0HZF1XIR1LK-1CeKNKCW9h4&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=HXa6x4hXZKjVlrwCX6JcBA&_nc_ss=7a32e&oh=00_Af2igZSMNMc45tULadOqbF24OQsqFzEeYQBxyC7Ais-9-Q&oe=69D53A94" 
            alt="Luxury car detailing" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/50 to-dark"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-white/90 text-sm font-medium mb-8">
              <Star className="w-4 h-4 text-primary" fill="currentColor" />
              <span className="tracking-wide uppercase text-xs">Palm Beach County's Premier Detailers</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6 md:mb-8 tracking-tighter">
              Top-Tier Mobile Detailing in <span className="text-primary italic pr-2 md:pr-4">Palm Beach</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 md:mb-12 max-w-2xl leading-relaxed font-light">
              We bring professional, high-end car care directly to you. Experience the pinnacle of automotive detailing.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Magnetic strength={0.2}>
                <Link 
                  to="/contact" 
                  className="bg-primary hover:bg-primary-dark text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-lg font-medium transition-all shadow-2xl shadow-primary/20 text-center flex items-center justify-center gap-3 group w-full sm:w-auto"
                >
                  Book Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Link 
                  to="/services" 
                  className="glass-dark hover:bg-white/10 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-lg font-medium transition-all text-center flex items-center justify-center w-full sm:w-auto"
                >
                  Explore Services
                </Link>
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-1/2 bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-32 bg-white rounded-t-[2rem] md:rounded-t-[3rem] relative z-20 -mt-6 md:-mt-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tighter"
            >
              Premium Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-light"
            >
              Tailored detailing packages designed to restore, protect, and maintain your vehicle's pristine condition.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Interior Detailing',
                desc: 'Deep cleaning, conditioning, and sanitization of all interior surfaces.',
                img: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/532434213_17958806840986580_2803028115350245392_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=111&ig_cache_key=MzY5OTMyNDQ2ODgwODQ5MjExMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=yzViV086rmkQ7kNvwH3q9M0&_nc_oc=AdpD052cWcuvxsDbn180kHU6cEIPMo1bUiTsYgOWnUiG2lbF_hklG59_YMcoGQoftts&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=HXa6x4hXZKjVlrwCX6JcBA&_nc_ss=7a32e&oh=00_Af2JQ2fRGyRX1WokQgVsp6rt59b9qqRzBy9Arekx0tyiow&oe=69D52A8E'
              },
              {
                title: 'Exterior Detailing',
                desc: 'Meticulous hand wash, decontamination, and paint protection.',
                img: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t51.75761-15/504266885_17951449679986580_5321791257206736337_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=108&ig_cache_key=MzY1MjcyOTc2MDA4NzM0OTk4Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHg5NjAuc2RyLkMzIn0%3D&_nc_ohc=THYGXzWIZ1oQ7kNvwEqeB5r&_nc_oc=Ado3pbx5_NpQnbqZkGrRSEqQ7uIGS_90a5phGVIhECQIMvqG53ct9yeS48CKwIbcDiE&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=HXa6x4hXZKjVlrwCX6JcBA&_nc_ss=7a32e&oh=00_Af3bGlZXNBwT5lJ6_mUm6vw95TuyT6kf0nK6kbAedaCshA&oe=69D5359E'
              },
              {
                title: 'Wash & Wax',
                desc: 'Premium wash followed by a high-grade carnauba wax application.',
                img: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/532496596_17958676367986580_5332226936443589645_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=MzY5ODQ4MzQxNTgyMjAyMjkyOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHg5NjAuc2RyLkMzIn0%3D&_nc_ohc=vJ0UtaHENQIQ7kNvwEQF6YR&_nc_oc=AdoCNCLenJtS5Us0DR7RZhjPc3XnyI7M-b2X8upVAr3b2oINCji7Kisa5f57GnAYAuM&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=HXa6x4hXZKjVlrwCX6JcBA&_nc_ss=7a32e&oh=00_Af2SAfDsDnn3tX-AtO5A30iH0zNLkEcb6gPaWrHYJZmKjA&oe=69D53F19'
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer"
              >
                <div className="h-[300px] md:h-[400px] overflow-hidden rounded-2xl md:rounded-3xl mb-6 md:mb-8 relative">
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-gray-500 mb-6 font-light leading-relaxed">{service.desc}</p>
                  <Link to="/services" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <section className="py-20 md:py-32 bg-light-gray">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 tracking-tighter">The Difference is in the Details</h2>
              <p className="text-gray-500 mb-8 md:mb-10 text-lg md:text-xl leading-relaxed font-light">
                We don't just wash cars; we restore them. Our meticulous process removes years of wear, revealing the true beauty of your vehicle's finish. Slide to see the transformation.
              </p>
              <ul className="space-y-4 md:space-y-6 mb-10 md:mb-12">
                {['Swirl mark removal', 'Deep stain extraction', 'Ceramic coating protection'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 md:gap-4 text-dark font-medium text-base md:text-lg">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Magnetic strength={0.1}>
                <Link 
                  to="/gallery" 
                  className="inline-flex items-center gap-3 text-dark font-semibold border-b-2 border-dark pb-2 hover:text-primary hover:border-primary transition-colors text-base md:text-lg"
                >
                  View Full Gallery <ArrowRight className="w-5 h-5" />
                </Link>
              </Magnetic>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <BeforeAfterSlider 
                beforeImage="https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&q=80&w=1000" // Dirty car
                afterImage="https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=1000" // Clean car
                className="h-[350px] md:h-[600px] shadow-2xl rounded-2xl md:rounded-[2rem]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-[#0a0a0a]"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tighter"
            >
              Why Top Notch?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 max-w-2xl mx-auto text-xl font-light"
            >
              We set the standard for mobile detailing in South Florida.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-10 h-10 text-primary" />,
                title: 'Mobile Convenience',
                desc: 'We come to your home, office, or condo. Fully equipped with water and power.'
              },
              {
                icon: <Shield className="w-10 h-10 text-primary" />,
                title: 'Attention to Detail',
                desc: 'We treat every vehicle like an exotic. No corners cut, only premium products used.'
              },
              {
                icon: <Star className="w-10 h-10 text-primary" />,
                title: 'Reliable Service',
                desc: 'On-time, professional, and consistent results every single time you book.'
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-center p-12 rounded-[2rem] glass-dark hover:bg-white/5 transition-colors duration-500"
              >
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-8">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light text-lg">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tighter"
            >
              Client Experiences
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 max-w-2xl mx-auto text-xl font-light"
            >
              Don't just take our word for it. See what our clients have to say about our premium detailing services.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael R.",
                vehicle: "Porsche 911 Carrera",
                text: "Absolutely incredible service. They came to my office, and when I came out, the car looked better than the day I bought it. The ceramic coating is flawless."
              },
              {
                name: "Sarah J.",
                vehicle: "Range Rover Autobiography",
                text: "Top Notch is exactly what they are. The interior detailing removed stains I thought were permanent. Professional, punctual, and highly recommended."
              },
              {
                name: "David L.",
                vehicle: "Tesla Model S Plaid",
                text: "I'm extremely particular about my cars, and these guys exceeded my expectations. The attention to detail on the wheels and trim is unmatched in Palm Beach."
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="bg-light-gray p-10 rounded-[2rem] relative hover:shadow-xl transition-shadow duration-500"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 mb-10 italic leading-relaxed text-lg font-light">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-dark text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">{testimonial.vehicle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://instagram.fdac3-2.fna.fbcdn.net/v/t51.75761-15/508330774_17951957213986580_5877227516971550605_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=103&ig_cache_key=MzY1NTgzNTI2MDcwNjI0NDIyMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=YCEEVqNtq7MQ7kNvwFCB_45&_nc_oc=Adr4hyJJiujPOsrZ9irfISQYmKN86GKUnOLcPOTRjQDj0HZF1XIR1LK-1CeKNKCW9h4&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=HXa6x4hXZKjVlrwCX6JcBA&_nc_ss=7a32e&oh=00_Af2igZSMNMc45tULadOqbF24OQsqFzEeYQBxyC7Ais-9-Q&oe=69D53A94')] opacity-20 mix-blend-overlay object-cover"></div>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tighter"
          >
            Ready to Experience Top-Tier Detailing?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-lg sm:text-xl md:text-2xl mb-10 md:mb-12 max-w-2xl mx-auto font-light"
          >
            Book your appointment today and let us restore your vehicle's showroom shine.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
          >
            <Magnetic strength={0.2}>
              <Link 
                to="/contact" 
                className="bg-white text-primary px-8 md:px-10 py-4 md:py-5 rounded-full text-lg font-bold transition-all shadow-2xl hover:scale-105 flex items-center justify-center w-full sm:w-auto"
              >
                Book Your Detail
              </Link>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a 
                href="tel:5614017209" 
                className="bg-transparent border-2 border-white text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-lg font-bold transition-all hover:bg-white/10 flex items-center justify-center w-full sm:w-auto"
              >
                Call (561) 401-7209
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
