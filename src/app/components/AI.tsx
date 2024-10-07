"use client"
import React from 'react'

function AI() {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-16 px-4 md:px-12 lg:px-24">
        {/* Responsive Section Container */}
        <div className="max-w-7xl mx-auto text-center space-y-6">
          {/* Heading and Description */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Need Help with Your Ride?
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Ask SujalAI, your smart assistant, for ride recommendations, tracking info, and traffic updates for a smoother journey!
          </p>

          {/* Animated Ask SujalAI Button */}
          <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg 
                             transform transition duration-500 hover:scale-105 hover:bg-blue-600 hover:text-white 
                             focus:ring-4 focus:ring-blue-300 animate-bounce mt-6">
            <a href='/Gemini'>Ask SujalAI</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AI
