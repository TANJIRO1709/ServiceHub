"use client";
import React from 'react';
import { Button } from '@chakra-ui/react';

function Hero() {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        {/* Text Content */}
        <div className="max-w-lg text-center md:text-left md:pr-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeIn tracking-tight leading-tight">
            Find Your Ride, Anytime, Anywhere!
          </h1>
          <p className="mb-6 text-lg md:text-xl opacity-90">
            Quick, easy, and affordable ride-sharing service.
          </p>

          {/* Button with 3D effect */}
          <Button
            size="lg"
            className="bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 hover:scale-105"
            _hover={{ bg: 'teal.500' }}
          >
            Get Started
          </Button>
        </div>

        {/* Image with subtle shadow */}
        <img
          className="w-full md:w-1/2 h-auto mt-8 md:mt-0 shadow-lg transform transition duration-300 hover:scale-105"
          src="https://www.mobindustry.net/wp-content/uploads/2023/03/ridesharing.png"
          alt="Ride sharing app demo"
        />
      </section>
    </div>
  );
}

export default Hero;
