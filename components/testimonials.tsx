import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Sarah J.",
    text: "The personalized skincare routine changed my life!",
  },
  { name: "Mike T.", text: "I've never felt more confident about my skin." },
  {
    name: "Emma L.",
    text: "The expert team really knows their stuff. Highly recommended!",
  },
];

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-purple-200 to-pink-200">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">
          What Our Clients Say
        </h2>
        <div className="relative h-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <p className="text-xl text-gray-700 mb-4 italic">
                &quot;{testimonials[currentIndex].text}&quot;
              </p>
              <p className="text-lg font-semibold text-purple-700">
                - {testimonials[currentIndex].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
