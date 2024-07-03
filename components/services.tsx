import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon }: any) => (
  <motion.div
    whileHover={{ scale: 1.05, rotateY: 5 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden p-8 transform transition-all duration-300 ease-in-out hover:shadow-2xl"
    style={{
      background: 'linear-gradient(135deg, #ffffff 0%, #f3e7ff 100%)',
    }}
  >
    <div className="text-6xl mb-6 text-purple-600">{icon}</div>
    <h3 className="text-2xl font-semibold mb-4 text-purple-800">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </motion.div>
);

export const ServicesShowcase = () => (
  <section className="py-20 bg-gradient-to-r from-purple-100 to-pink-100" id="services">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-purple-800 mb-16">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <ServiceCard
          title="Skin Analysis"
          description="In-depth analysis of your skin type and concerns using advanced technology."
          icon="🔬"
        />
        <ServiceCard
          title="Custom Treatments"
          description="Tailored skincare routines and treatments designed for your unique needs and goals."
          icon="✨"
        />
        <ServiceCard
          title="Anti-Aging Solutions"
          description="Cutting-edge techniques and products to maintain youthful, radiant skin."
          icon="⏳"
        />
      </div>
    </div>
  </section>
);