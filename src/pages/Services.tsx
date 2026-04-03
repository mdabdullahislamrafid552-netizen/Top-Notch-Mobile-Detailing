import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import Magnetic from '@/components/ui/Magnetic';

const services = [
  {
    id: 'interior',
    title: 'Interior Detailing',
    subtitle: 'Deep clean, restored feel',
    price: 'From $150',
    image: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/532434213_17958806840986580_2803028115350245392_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=111&ig_cache_key=MzY5OTMyNDQ2ODgwODQ5MjExMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=yzViV086rmkQ7kNvwH3q9M0&_nc_oc=AdpD052cWcuvxsDbn180kHU6cEIPMo1bUiTsYgOWnUiG2lbF_hklG59_YMcoGQoftts&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=HXa6x4hXZKjVlrwCX6JcBA&_nc_ss=7a32e&oh=00_Af2JQ2fRGyRX1WokQgVsp6rt59b9qqRzBy9Arekx0tyiow&oe=69D52A8E',
    description: 'A comprehensive deep clean of your vehicle\'s interior. We meticulously clean, condition, and protect every surface, from leather seats to intricate dashboard crevices.',
    features: [
      'Deep vacuuming of seats, carpets, and mats',
      'Steam cleaning and stain extraction',
      'Leather cleaning and conditioning',
      'Dashboard, console, and door panel detailing',
      'Interior glass cleaning',
      'Odor neutralization'
    ]
  },
  {
    id: 'exterior',
    title: 'Exterior Detailing',
    subtitle: 'Restored shine, ultimate protection',
    price: 'From $175',
    image: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t51.75761-15/504266885_17951449679986580_5321791257206736337_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=108&ig_cache_key=MzY1MjcyOTc2MDA4NzM0OTk4Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHg5NjAuc2RyLkMzIn0%3D&_nc_ohc=THYGXzWIZ1oQ7kNvwEqeB5r&_nc_oc=Ado3pbx5_NpQnbqZkGrRSEqQ7uIGS_90a5phGVIhECQIMvqG53ct9yeS48CKwIbcDiE&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=HXa6x4hXZKjVlrwCX6JcBA&_nc_ss=7a32e&oh=00_Af3bGlZXNBwT5lJ6_mUm6vw95TuyT6kf0nK6kbAedaCshA&oe=69D5359E',
    description: 'More than just a wash. We decontaminate the paint, remove embedded dirt, and apply high-grade protection to ensure your vehicle looks stunning and stays protected from the Florida sun.',
    features: [
      'Foam cannon hand wash',
      'Clay bar paint decontamination',
      'Wheel and tire deep cleaning',
      'Tire dressing (no-sling formula)',
      'Exterior trim restoration',
      'Premium sealant application (6-month protection)'
    ]
  },
  {
    id: 'wash-wax',
    title: 'Wash & Wax',
    subtitle: 'Maintenance clean, brilliant gloss',
    price: 'From $95',
    image: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/532496596_17958676367986580_5332226936443589645_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=MzY5ODQ4MzQxNTgyMjAyMjkyOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHg5NjAuc2RyLkMzIn0%3D&_nc_ohc=vJ0UtaHENQIQ7kNvwEQF6YR&_nc_oc=AdoCNCLenJtS5Us0DR7RZhjPc3XnyI7M-b2X8upVAr3b2oINCji7Kisa5f57GnAYAuM&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=HXa6x4hXZKjVlrwCX6JcBA&_nc_ss=7a32e&oh=00_Af2SAfDsDnn3tX-AtO5A30iH0zNLkEcb6gPaWrHYJZmKjA&oe=69D53F19',
    description: 'The perfect maintenance service for vehicles that are already in good condition. A thorough wash followed by a high-quality carnauba wax for a brilliant, warm gloss.',
    features: [
      'Thorough hand wash',
      'Wheel face cleaning',
      'Tire shine application',
      'Exterior glass cleaning',
      'Premium carnauba wax application',
      'Light interior vacuum'
    ]
  }
];

export default function Services() {
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="relative pt-40 pb-20 bg-dark text-white overflow-hidden">
        <motion.div 
          style={{ y: headerY }}
          className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-gray-400 max-w-2xl mx-auto font-light"
          >
            Comprehensive detailing solutions tailored to meet the highest standards of automotive care.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                
                {/* Image */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] group">
                    <div className="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full font-bold text-dark z-20 shadow-lg">
                      {service.price}
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full lg:w-1/2"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4 tracking-tighter">{service.title}</h2>
                  <p className="text-primary font-medium text-xl mb-6 tracking-tight">{service.subtitle}</p>
                  <p className="text-gray-500 text-lg mb-10 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <ul className="space-y-4 mb-12">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-4 text-dark font-medium text-lg">
                        <div className="mt-1 bg-primary/10 p-2 rounded-full shrink-0">
                          <Check className="w-5 h-5 text-primary" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Magnetic strength={0.1}>
                    <Link 
                      to={`/contact?service=${service.id}`}
                      className="inline-flex items-center gap-3 bg-dark hover:bg-dark-gray text-white px-8 py-5 rounded-full font-medium transition-all hover:scale-105 group text-lg"
                    >
                      Book This Service <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Magnetic>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
