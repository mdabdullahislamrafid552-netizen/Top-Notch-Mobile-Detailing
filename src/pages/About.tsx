import { motion } from 'motion/react';
import { ShieldCheck, Award, ThumbsUp } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Built on Quality, Consistency, and Attention to Detail.</h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Top Notch Mobile Detailing was founded with a single goal: to provide Palm Beach County with a level of automotive care that exceeds expectations. We understand that your vehicle is an investment, and we treat it with the utmost respect.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We don't believe in rushed jobs or cutting corners. Our process is meticulous, utilizing only premium products and proven techniques to ensure a flawless finish every time. Whether you drive a daily commuter or an exotic sports car, you receive the same top-tier treatment.
            </p>

            <div className="space-y-6">
              {[
                { icon: <ShieldCheck className="w-6 h-6 text-primary" />, title: 'Fully Insured & Professional', desc: 'Peace of mind knowing your vehicle is in safe hands.' },
                { icon: <Award className="w-6 h-6 text-primary" />, title: 'Premium Products Only', desc: 'We never use cheap chemicals that can damage your paint or interior.' },
                { icon: <ThumbsUp className="w-6 h-6 text-primary" />, title: '100% Satisfaction Guarantee', desc: 'We aren\'t finished until you are completely thrilled with the results.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-light-gray p-3 rounded-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1000" 
                alt="Detailer working on a car" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
              <p className="text-4xl font-bold text-primary mb-2">5+</p>
              <p className="font-medium text-dark">Years of professional detailing experience in South Florida.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
