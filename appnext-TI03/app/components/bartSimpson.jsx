// components/HeroSection.js

import React from 'react';

const BartSonriendo = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="https://i.pinimg.com/564x/72/d2/1c/72d21c5719428e4389039a78db528f73.jpg"
        alt="Bart"
        className="w-96 h-96 object-cover mb-4"
      />
      <p className="text-lg text-center">Bart, es un personaje de "Los Simpson"</p>
    </div>
  );
};

export default BartSonriendo;
