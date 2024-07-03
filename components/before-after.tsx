import React, { useState } from 'react';
import Image from 'next/image';

export const BeforeAfterComparison = () => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">See the Difference</h2>
        <div className="relative w-full aspect-w-16 aspect-h-9 mb-6">
          <Image
            src={showAfter 
              ? "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600"
              : "https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt={showAfter ? "After treatment" : "Before treatment"}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => setShowAfter(!showAfter)}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            {showAfter ? 'Show Before' : 'Show After'}
          </button>
        </div>
      </div>
    </section>
  );
};