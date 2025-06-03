import React from 'react';
import { DollarSign, Menu, X } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <DollarSign className="h-8 w-8 text-[#E50914]" />
            <span className="ml-2 text-xl font-bold">La Casa Digital</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#cards" className="text-gray-300 hover:text-white transition-colors">
                Gift Cards
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                How It Works
              </a>
              <button className="bg-[#E50914] px-4 py-2 rounded-md hover:bg-[#FF0F1A] transition-colors">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;