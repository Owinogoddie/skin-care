import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Product } from '../types';

interface ProductCarouselProps {
  products: Product[];
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">Our Products</h2>
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: [0, -1000, 0] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {products.concat(products).map((product, index) => (
              <motion.div
                key={`${product.id}-${index}`}
                className="flex-shrink-0 w-64 mx-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-purple-800 mb-2">{product.name}</h3>
                    <p className="text-gray-600">{"product.description"}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};