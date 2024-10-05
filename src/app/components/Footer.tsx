"use client";
import React from 'react';
import { Box, Text, Link, HStack, IconButton, Flex, Stack } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Importing framer-motion for animations
import { chakra } from '@chakra-ui/system'; // Importing chakra for Chakra UI compatibility

// Wrapping Chakra UI components with motion.custom
const MotionBox = motion(chakra(Box));
const MotionText = motion(chakra(Text));
const MotionLink = motion(chakra(Link));

function Footer() {
  return (
    <Box
      as="footer"
      bg="black"
      color="white"
      py={{ base: '6', md: '12' }}
      px={{ base: '4', sm: '6', md: '12' }}
      textAlign="center"
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'flex-start' }}
        mb="8"
      >
        {/* Contact Information */}
        <MotionBox
          flex="1"
          mb={{ base: '6', md: '0' }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MotionText
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight="bold"
            mb="4"
            whileHover={{ scale: 1.1 }} // 3D effect on hover
            transition={{ duration: 0.3 }}
          >
            RideShare
          </MotionText>
          <MotionText
            fontSize="sm"
            mb="2"
            whileHover={{ scale: 1.05 }} // Slight 3D effect
            transition={{ duration: 0.3 }}
          >
            123 RideShare Lane
          </MotionText>
          <MotionText
            fontSize="sm"
            mb="2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            RideCity, RC 12345
          </MotionText>
          <MotionText
            fontSize="sm"
            mb="2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Email: <MotionLink href="mailto:support@rideshare.com" color="teal.400" whileHover={{ textDecoration: 'underline' }}>support@rideshare.com</MotionLink>
          </MotionText>
          <MotionText
            fontSize="sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Phone: <MotionLink href="tel:+1234567890" color="teal.400" whileHover={{ textDecoration: 'underline' }}>+1 (234) 567-890</MotionLink>
          </MotionText>
        </MotionBox>

        {/* Quick Links */}
        <MotionBox
          flex="1"
          textAlign={{ base: 'center', md: 'right' }}
          mb={{ base: '6', md: '0' }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MotionText
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight="bold"
            mb="4"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Quick Links
          </MotionText>
          <Stack spacing="2" align={{ base: 'center', md: 'flex-end' }}>
            <MotionLink
              href="#"
              color="teal.400"
              whileHover={{ scale: 1.05, textDecoration: 'underline' }}
              transition={{ duration: 0.3 }}
            >
              Home
            </MotionLink>
            <MotionLink
              href="#"
              color="teal.400"
              whileHover={{ scale: 1.05, textDecoration: 'underline' }}
              transition={{ duration: 0.3 }}
            >
              Features
            </MotionLink>
            <MotionLink
              href="#"
              color="teal.400"
              whileHover={{ scale: 1.05, textDecoration: 'underline' }}
              transition={{ duration: 0.3 }}
            >
              Pricing
            </MotionLink>
            <MotionLink
              href="#"
              color="teal.400"
              whileHover={{ scale: 1.05, textDecoration: 'underline' }}
              transition={{ duration: 0.3 }}
            >
              Contact
            </MotionLink>
          </Stack>
        </MotionBox>
      </Flex>

      {/* Social Media */}
      <HStack spacing="4" justify="center" mb="6">
        <IconButton
          icon={<FaFacebookF />}
          aria-label="Facebook"
          variant="ghost"
          colorScheme="whiteAlpha"
          fontSize="lg"
        />
        <IconButton
          icon={<FaTwitter />}
          aria-label="Twitter"
          variant="ghost"
          colorScheme="whiteAlpha"
          fontSize="lg"
        />
        <IconButton
          icon={<FaInstagram />}
          aria-label="Instagram"
          variant="ghost"
          colorScheme="whiteAlpha"
          fontSize="lg"
        />
        <IconButton
          icon={<FaLinkedinIn />}
          aria-label="LinkedIn"
          variant="ghost"
          colorScheme="whiteAlpha"
          fontSize="lg"
        />
      </HStack>

      {/* Copyright */}
      <Text fontSize="sm">
        &copy; {new Date().getFullYear()} RideShare. All rights reserved.
      </Text>
    </Box>
  );
}

export default Footer;
