import React, { useState } from 'react';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Search Page</h1>
      <div className="relative w-64 mx-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full py-2 pl-10 pr-4 rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Search..."
        />
        <span className="absolute left-3 top-2 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7h7m0 0l-7 7m0-7L6 7M20 14H7m0 0l7-7m0 7l7 7"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default HomePage;