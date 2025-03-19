import React from 'react';

export const Hello = () => {
  return (
    <footer className="bg-blue-300 py-4 text-center sticky top-[100vh] w-full">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-blue-800">
          Decentralized AuthX
        </h2>
        <p className="text-lg text-blue-700">The Smartest and Secure Way</p>
        <hr className="border-blue-900 my-2" />
        <p className="text-center text-blue-700 text-base">
          Copyright © 2024 AuthX. All rights reserved
        </p>
      </div>
    </footer>
  );
};
