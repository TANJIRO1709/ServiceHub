"use client";
import React from 'react';

function Page() {
  return (
    <div className="bg-black flex items-center justify-center h-screen">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Sign In</h2>
        <form>
          {/* Username input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-white text-sm font-bold mb-2">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-500" 
              placeholder="Enter your username" 
            />
          </div>

          {/* Email input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-500" 
              placeholder="Enter your email" 
            />
          </div>

          {/* Password input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-white text-sm font-bold mb-2">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-500" 
              placeholder="Enter your password" 
            />
          </div>

          {/* Sign In button */}
          <div className="flex items-center justify-between">
            <button 
              type="submit" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:shadow-outline w-full"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
