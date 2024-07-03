import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TeamMember = ({ name, role, imageUrl }: any) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="text-center bg-white rounded-lg shadow-lg overflow-hidden p-6"
  >
    <div className="relative w-48 h-48 rounded-full mx-auto mb-4 overflow-hidden">
      <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
    </div>
    <h3 className="text-xl font-semibold text-purple-800">{name}</h3>
    <p className="text-pink-600">{role}</p>
  </motion.div>
);

export const TeamSection = () => (
  <section
    className="py-20 bg-gradient-to-r from-purple-100 to-pink-100"
    id="team"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">
        Our Expert Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <TeamMember
          name="Dr. Jane Smith"
          role="Lead Dermatologist"
          imageUrl="https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <TeamMember
          name="John Doe"
          role="Skincare Specialist"
          imageUrl="https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <TeamMember
          name="Emma Johnson"
          role="Esthetician"
          imageUrl="https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
    </div>
  </section>
);
