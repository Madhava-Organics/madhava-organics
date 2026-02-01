import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { COMPANY_PHONE } from '@/config';

const FloatingButtons = () => {
  const handleWhatsApp = () => {
    const phoneNumber = COMPANY_PHONE.replace(/\D/g, ''); // Remove non-digits for WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=Hi%2C%20I%20am%20interested%20in%20your%20products`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${COMPANY_PHONE}`;
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-colors"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
      
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        onClick={handleCall}
        className="fixed bottom-24 right-6 w-14 h-14 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-colors"
        aria-label="Call"
      >
        <Phone className="w-6 h-6" />
      </motion.button>
    </>
  );
};

export default FloatingButtons;