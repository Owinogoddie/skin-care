import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Hero = () => (
  <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 overflow-hidden"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center">
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
        >
          Expert Skincare Solutions
        </motion.h1>
        <motion.p 
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 120 }}
          className="text-xl text-white mb-8"
        >
          Personalized treatments for your unique skin
        </motion.p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          Book a Consultation
        </motion.button>
      </div>
    </div>
    <div className="absolute inset-0 z-0">
      <Image
        src="https://images.pexels.com/photos/3851905/pexels-photo-3851905.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Skincare Product 2"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  </motion.section>
);