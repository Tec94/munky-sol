import React from 'react';
import { Squirrel } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full backdrop-blur-md bg-purple-950/30 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Squirrel className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold text-purple-400">$MUNKY</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-purple-50 hover:text-purple-400 transition-colors">About</a>
            <a href="#tokenomics" className="text-purple-50 hover:text-purple-400 transition-colors">Tokenomics</a>
            <a href="#converter" className="text-purple-50 hover:text-purple-400 transition-colors">Convert</a>
          </div>
          
          <button className="bg-purple-400 text-purple-950 px-6 py-2 rounded-full font-semibold hover:bg-purple-300 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </nav>
  );
};