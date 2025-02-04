import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="bg-[#331c3f] min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-yellow-500 text-6xl mb-4">404</h1>
      <h2 className="text-4xl mb-4">Page Not Found</h2>
      <p className="text-lg mb-8">
        Oops! It seems you've wandered off. But don't worry, you can always <br />
        <span className="text-yellow-500">find your way back!</span> 🧭
      </p>

      {/* Add animated emoji or image here */}
      <img
        src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif" // Link to an animated image or emoji
        alt="Confused emoji"
        className="w-64 h-64 mb-8 rounded-full"
      />

      {/* Link to Home */}
      <Link
        to="/"
        className="text-lg bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
      >
        Go Home 🏠
      </Link>
    </div>
  );
};

export default Error;
