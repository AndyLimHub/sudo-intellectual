// src/components/TopBar.tsx
import React from 'react';

const TopBar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-[#1e1e1e] text-white shadow-md">
      {/* Left: traffic lights */}
      <div className="flex items-center space-x-2 w-16">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      {/* Center: title */}
      <div className="flex-1 text-center text-sm font-medium text-gray-300">
        My anything
      </div>

      {/* Right: empty spacer for symmetry */}
      <div className="w-16" />
    </div>
  );
};

export default TopBar;
