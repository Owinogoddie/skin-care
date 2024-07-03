import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
interface StatItemProps {
    number: string;
    label: string;
}  
const StatItem = ({ number, label }:StatItemProps) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.span
        className="text-4xl font-bold text-purple-700 block"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
      >
        {number}
      </motion.span>
      <span className="text-lg text-gray-600">{label}</span>
    </motion.div>
  );
};

export const StatisticsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-16">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <StatItem number="10,000+" label="Happy Clients" />
          <StatItem number="50+" label="Skincare Experts" />
          <StatItem number="98%" label="Satisfaction Rate" />
        </div>
      </div>
    </section>
  );
};