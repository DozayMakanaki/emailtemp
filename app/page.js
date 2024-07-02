"use client"

import  { useState } from 'react';

const EmailTemplate = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen p-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-3xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 sm:p-10">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">Welcome to Our Luxury Property Service</h1>
          <p className="mb-6">
            We are delighted to offer you the best properties with unmatched luxury and comfort. Explore our exclusive listings and find your dream home with us.
          </p>
          <button
            className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${darkMode ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'} hover:bg-opacity-75`}
            onClick={toggleDarkMode}
          >
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;
