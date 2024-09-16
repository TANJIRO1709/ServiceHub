"use client";
import React from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { FaCar, FaMapMarkerAlt, FaUserFriends } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Importing framer-motion for animation

// Feature data
const features = [
  { icon: FaCar, title: 'Easy Rides', description: 'Seamless booking experience with reliable rides.' },
  { icon: FaMapMarkerAlt, title: 'Real-time Tracking', description: 'Track your ride’s location in real-time.' },
  { icon: FaUserFriends, title: 'Share with Friends', description: 'Share your rides and split the cost easily.' },
];

function Features() {
  return (
    <div>
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Title */}
          <h2 className="text-4xl font-bold text-teal-300 mb-8 animate-fadeIn">
            Why Choose Us?
          </h2>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }} // Hover effect to slightly scale
                whileInView={{ opacity: [0, 1], y: [20, 0] }} // Fade-in and move up animation
                transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation delay
              >
                <Box
                  className="bg-gray-900 p-6 rounded-lg shadow-lg transition duration-300 transform hover:shadow-2xl"
                >
                  {/* Icon with animation */}
                  <Icon
                    as={feature.icon}
                    boxSize={12}
                    color="teal.300"
                    mb={4}
                    className="transition-transform duration-300 hover:scale-110"
                  />
                  {/* Feature Title */}
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  {/* Feature Description */}
                  <p className="text-gray-400">{feature.description}</p>
                </Box>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
