import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Calculator } from 'lucide-react';

const SERVICE_PRICES: Record<string, number> = {
  'interior': 150,
  'exterior': 175,
  'wash-wax': 95,
  'ceramic': 800,
  'other': 0
};

const VEHICLE_MULTIPLIERS: Record<string, number> = {
  'sedan': 1,
  'suv': 1.2,
  'truck': 1.3,
  'van': 1.4
};

export default function Contact() {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState('');
  const [vehicleType, setVehicleType] = useState('sedan');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [estimatedQuote, setEstimatedQuote] = useState<number | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      setSelectedService(serviceParam);
    }
  }, [location]);

  useEffect(() => {
    if (selectedService && selectedService !== 'other') {
      const basePrice = SERVICE_PRICES[selectedService] || 0;
      const multiplier = VEHICLE_MULTIPLIERS[vehicleType] || 1;
      setEstimatedQuote(Math.round(basePrice * multiplier));
    } else {
      setEstimatedQuote(null);
    }
  }, [selectedService, vehicleType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full pt-28 pb-24 bg-light-gray min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Detail</h1>
          <p className="text-lg text-gray-600">
            Ready for a pristine vehicle? Fill out the form below or give us a call to schedule your premium mobile detailing service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <a href="tel:5614017209" className="flex items-start gap-4 group">
                  <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Call or Text</p>
                    <p className="text-lg font-bold text-dark">(561) 401-7209</p>
                  </div>
                </a>

                <a href="mailto:info@topnotchdetailing.com" className="flex items-start gap-4 group">
                  <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Email Us</p>
                    <p className="text-lg font-bold text-dark">info@topnotchdetailing.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Service Area</p>
                    <p className="text-lg font-bold text-dark">Palm Beach County, FL</p>
                    <p className="text-gray-500 text-sm mt-1">We come to your home or office.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-dark rounded-2xl text-white">
                <h4 className="font-semibold mb-2">Business Hours</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between"><span>Mon - Fri:</span> <span>8:00 AM - 6:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturday:</span> <span>9:00 AM - 4:00 PM</span></div>
                  <div className="flex justify-between"><span>Sunday:</span> <span>Closed</span></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">
              {isSubmitted ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-dark">Request Received!</h3>
                  <p className="text-gray-600 max-w-md">
                    Thank you for choosing Top Notch Mobile Detailing. We will contact you shortly to confirm your appointment date and time.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-primary font-medium hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-dark">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-light-gray focus:bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-dark">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-light-gray focus:bg-white"
                        placeholder="(561) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="vehicleSize" className="text-sm font-medium text-dark">Vehicle Size</label>
                      <select 
                        id="vehicleSize" 
                        value={vehicleType}
                        onChange={(e) => setVehicleType(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-light-gray focus:bg-white appearance-none"
                      >
                        <option value="sedan">Coupe / Sedan</option>
                        <option value="suv">Small SUV / Crossover</option>
                        <option value="truck">Large SUV / Truck</option>
                        <option value="van">Minivan / Oversized</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-dark">Interested Service</label>
                      <select 
                        id="service" 
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-light-gray focus:bg-white appearance-none"
                      >
                        <option value="">Select a service...</option>
                        <option value="interior">Interior Detailing</option>
                        <option value="exterior">Exterior Detailing</option>
                        <option value="wash-wax">Wash & Wax</option>
                        <option value="ceramic">Ceramic Coating</option>
                        <option value="other">Other / Custom Package</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="vehicleModel" className="text-sm font-medium text-dark">Vehicle Make & Model</label>
                    <input 
                      type="text" 
                      id="vehicleModel" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-light-gray focus:bg-white"
                      placeholder="e.g. 2023 Porsche 911"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-medium text-dark">Preferred Date (Optional)</label>
                    <input 
                      type="date" 
                      id="date" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-light-gray focus:bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-dark">Additional Details</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-light-gray focus:bg-white resize-none"
                      placeholder="Any specific areas of concern? (e.g. pet hair, stains, scratches)"
                    ></textarea>
                  </div>

                  {estimatedQuote !== null && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-center gap-4"
                    >
                      <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <Calculator className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium">Estimated Starting Price</p>
                        <p className="text-2xl font-bold text-dark">${estimatedQuote}</p>
                        <p className="text-xs text-gray-500 mt-1">Final price may vary based on vehicle condition.</p>
                      </div>
                    </motion.div>
                  )}

                  <button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 flex items-center justify-center gap-2"
                  >
                    Request Appointment <Send className="w-5 h-5" />
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-4">
                    No payment required to book. We will confirm your quote before service begins.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
