"use client";
import React, { useState } from 'react';
import { Button, Avatar, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex justify-between items-center p-6 bg-black shadow-lg">
        {/* Logo with subtle text shadow */}
        <h1 className="text-3xl md:text-4xl font-bold text-white text-shadow-lg">
          RideShare
        </h1>

        {/* Hamburger Icon for small screens */}
        <div className="md:hidden">
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={toggleMenu}
            variant="outline"
            aria-label="Toggle Navigation"
            colorScheme="whiteAlpha"
            size="lg"
          />
        </div>

        {/* Buttons and Profile Section */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex space-x-4 items-center w-full md:w-auto mt-4 md:mt-0`}
        >
          <Button
            colorScheme="whiteAlpha"
            variant="outline"
            size="2xl"
            fontSize="2xl"
            className="text-white border-white hover:shadow-lg shadow-xl transform transition duration-300 hover:translate-y-[-3px]"
            _hover={{ bg: 'whiteAlpha.300' }}
            _focus={{ boxShadow: 'none' }}
          >
            Sign In
          </Button>

          <Button
            size="2xl"
            fontSize="2xl"
            className="bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold shadow-xl transform transition duration-300 hover:shadow-2xl hover:translate-y-[-3px] rounded-lg"
            _hover={{ bg: 'teal.500' }}
            _focus={{ boxShadow: 'none' }}
          >
            Sign Up
          </Button>

          {/* Profile Button */}
          <Button
            size="2xl"
            fontSize="2xl"
            className="bg-gradient-to-r from-green-400 to-blue-600 text-white font-bold shadow-xl transform transition duration-300 hover:shadow-2xl hover:translate-y-[-3px] rounded-lg"
            _hover={{ bg: 'green.500', boxShadow: '0 0 15px rgba(0, 255, 255, 0.6)' }}
            _active={{ transform: 'translateY(3px)' }}
            _focus={{ boxShadow: 'none' }}
          >
            Profile
          </Button>

          {/* Profile Avatar */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
