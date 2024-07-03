import React from 'react';
import Link from 'next/link';

export const Footer = () => (
  <footer className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">SkinCare Experts</h3>
          <p>Providing expert skincare solutions since 2020.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
            <li><Link href="#services" className="hover:text-gray-200">Services</Link></li>
            <li><Link href="#products" className="hover:text-gray-200">Products</Link></li>
            <li><Link href="#book"className="hover:text-gray-200">Book Appointment</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p>123 Skincare Street</p>
          <p>Beauty City, BC 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@skincareexperts.com</p>
        </div>
      </div>
      <div className="mt-8 border-t border-white pt-8 text-center">
        <p>&copy; 2023 SkinCare Experts. All rights reserved.</p>
      </div>
    </div>
  </footer>
);