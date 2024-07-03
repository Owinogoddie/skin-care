import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const OurApproach = () => (
  <section className="py-20 bg-gradient-to-r from-purple-100 to-pink-100" id="approach">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-purple-800 mb-16">Our Approach</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.pexels.com/photos/3851905/pexels-photo-3851905.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Our approach"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white text-4xl">✨</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          {[
            { title: "Personalized Care", icon: "👤" },
            { title: "Cutting-Edge Techniques", icon: "🔬" },
            { title: "Ongoing Support", icon: "🤝" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{item.icon}</span>
                <h3 className="text-2xl font-semibold text-purple-700">{item.title}</h3>
              </div>
              <p className="text-gray-700">
                {item.title === "Personalized Care" && "We analyze your skin's unique needs and develop a tailored treatment plan just for you."}
                {item.title === "Cutting-Edge Techniques" && "We utilize the latest technologies and methods to provide you with the best possible results."}
                {item.title === "Ongoing Support" && "Your skincare journey continues with our continuous support and adjustments for lasting results."}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);