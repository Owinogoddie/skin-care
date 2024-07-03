import React from 'react';
import Image from 'next/image';
import { BentoGrid, BentoItem, FloatingImage, RotatingImage } from './bento-grid';

export const Grid = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-2">
      <BentoGrid>
        <BentoItem className="col-span-2 row-span-2" height="h-96">
          <Image src="https://images.pexels.com/photos/3427769/pexels-photo-3427769.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Skincare routine" layout="fill" objectFit="cover" className="rounded-lg" />
        </BentoItem>
        <BentoItem rotate={-5} animate={{ rotate: 0 }} transition={{ duration: 1 }}>
          <Image src="https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Skincare product" layout="fill" objectFit="cover" className="rounded-lg" />
        </BentoItem>
        <BentoItem className="row-span-2" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 3 }} height="h-128">
          <Image src="https://images.pexels.com/photos/3618606/pexels-photo-3618606.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Spa treatment" layout="fill" objectFit="cover" className="rounded-lg" />
        </BentoItem>
        <BentoItem className="col-span-2">
          <FloatingImage src="https://images.pexels.com/photos/3059398/pexels-photo-3059398.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Floating skincare products" />
        </BentoItem>
        <BentoItem rotate={5} height="h-64">
          <RotatingImage src="https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Rotating skincare expert" />
        </BentoItem>
        <BentoItem parallax height="h-96">
          <Image src="https://images.pexels.com/photos/3851905/pexels-photo-3851905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Parallax skincare routine" layout="fill" objectFit="cover" className="rounded-lg" />
        </BentoItem>
        <BentoItem animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 3 }}>
          <Image src="https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Pulsing skincare product" layout="fill" objectFit="cover" className="rounded-lg" />
        </BentoItem>
      </BentoGrid>
    </div>
  );
}