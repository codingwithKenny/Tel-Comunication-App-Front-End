import React from 'react';

const Info = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-xs mx-auto">
        <h1 className="text-yellow-500 text-lg font-bold mb-2">Info Section</h1>
        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="text-gray-600 text-sm mb-2">Must include Country code</p>
          <p className="text-gray-600 text-sm mb-4">Format: 2348106114218</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Info;
