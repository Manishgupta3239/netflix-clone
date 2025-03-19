// Loading.js
import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center absolute top-0 left-0 w-full h-screen bg-gray-800">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-gray-800"></div>
        <p className="mt-4 text-xl text-white">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
