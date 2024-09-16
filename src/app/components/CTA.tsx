"use client";
import React from 'react';
import { Button } from '@chakra-ui/react';
import { motion } from 'framer-motion'; // Importing framer-motion for animations

function CTA() {
  return (
    <div>
      <section className="bg-black py-12 text-white text-center">
        {/* Animated Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Start Your Journey with RideShare!
        </motion.h2>

        {/* Animated Description */}
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Download our app and book your first ride today.
        </motion.p>

        {/* Button with Enhanced 3D Effect */}
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }} // 3D scaling effect
          whileTap={{ scale: 0.95 }}  // 3D press effect
          transition={{ duration: 0.3 }}
        >
          <Button
            colorScheme="teal"
            size="lg"
            className="bg-teal-500 text-white font-bold py-4 px-8 rounded-lg shadow-2xl transform transition duration-300 hover:shadow-3xl hover:translate-y-[-4px] focus:outline-none focus:ring-4 focus:ring-teal-300"
            _hover={{ bg: 'teal.600', shadow: 'xl', transform: 'translateY(-4px)' }}
            _focus={{ boxShadow: '0 0 0 4px rgba(20, 184, 166, 0.5)' }}
          >
            Download App
          </Button>
        </motion.div>
      </section>
    </div>
  );
}

export default CTA;
