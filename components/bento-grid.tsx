import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface BentoGridProps {
  children: React.ReactNode;
}

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  animate?: any;
  parallax?: boolean;
  height?: string;
  transition?: any;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 bg-gradient-to-r from-purple-100 to-pink-100">
    {children}
  </div>
);

export const BentoItem: React.FC<BentoItemProps> = ({
  children,
  className = "",
  rotate = 0,
  animate = {},
  parallax = false,
  height = "h-64",
  transition = {}
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  if (parallax) {
    return (
      <motion.div
        style={{ y }}
        className={`bg-white rounded-lg shadow-lg overflow-hidden ${height} ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${height} ${className}`}
      whileHover={{ scale: 1.05 }}
      initial={{ rotate: rotate }}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export const FloatingImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <motion.img
    src={src}
    alt={alt}
    className="w-full h-full object-cover rounded-lg"
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 3 }}
  />
);

export const RotatingImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <motion.img
    src={src}
    alt={alt}
    className="w-full h-full object-cover rounded-lg"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
  />
);