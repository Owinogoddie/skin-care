import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <motion.a
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold text-white"
          >
            SkinCare Experts
          </motion.a>
        </Link>
        <div className="hidden md:flex space-x-6">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#products">Products</NavLink>
          <NavLink href="#book">Book Appointment</NavLink>
        </div>
        <motion.button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-pink-200 text-center rounded-lg shadow-lg overflow-hidden"
          >
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#book">Book Appointment</NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href}>
    <motion.a
      whileHover={{ scale: 1.1 }}
      className="text-purple-600 md:text-white hover:text-pink-600 md:hover:text-pink-200 block py-2 px-4 transition duration-300"
    >
      {children}
    </motion.a>
  </Link>
);