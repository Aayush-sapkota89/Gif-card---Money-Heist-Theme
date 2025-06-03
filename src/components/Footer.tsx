import React from 'react';
import { DollarSign } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#141414] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <DollarSign className="h-8 w-8 text-[#E50914]" />
            <span className="ml-2 text-xl font-bold">La Casa Digital</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            "In this world, everything is governed by balance. Every action has consequences." - The Professor
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;