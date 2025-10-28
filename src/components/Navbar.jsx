import React from 'react';

/**
 * A basic, non-responsive Navbar component.
 */
function Navbar() {

  // Navigation links data
  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#", label: "About" },
    { href: "#", label: "Services" },
    { href: "#", label: "Contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* 1. Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Task Manager
            </a>
          </div>

          {/* 2. Navigation Links & CTA */}
          <div className="flex items-center space-x-8">
            {/* Navigation Links */}
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* CTA (Call to Action) Button */}
            <a
              href="#"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </a>
          </div>
          
        </div>
      </div>
    </nav>
  );
}

// The Navbar is now the default export.
export default Navbar;

