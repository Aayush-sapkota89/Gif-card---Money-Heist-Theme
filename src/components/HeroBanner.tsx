import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroBanner = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-2xl">
            Digital Gift Cards for the <span className="text-[#E50914]">Perfect Heist</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-xl">
            Join the resistance with our exclusive Money Heist themed Google Play gift cards. 
            Every card tells a story of rebellion.
          </p>
          <button className="bg-[#E50914] px-8 py-4 rounded-md text-lg font-medium hover:bg-[#FF0F1A] transition-colors flex items-center">
            Get Your Card <ArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;