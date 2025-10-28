import React from 'react';

// A simple, reusable Footer component
export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-300 py-8 px-4 sm:px-6 lg:px-8 mt-auto rounded-t-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        
        {/* Copyright Notice */}
        <div className="mb-4 sm:mb-0">
          <p>&copy; {new Date().getFullYear()} Task Mananger. All rights reserved.</p>
        </div>
        
        {/* Footer Links */}
        <nav className="flex gap-4 sm:gap-6">
          <a 
            href="#home" 
            className="text-sm hover:text-white transition-colors duration-200"
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-sm hover:text-white transition-colors duration-200"
          >
            About Us
          </a>
          <a 
            href="#contact" 
            className="text-sm hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
          <a 
            href="#privacy" 
            className="text-sm hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </a>
        </nav>

      </div>
    </footer>
  );
}
