import React from 'react';
import { Squirrel, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-6xl font-bold mb-6">
              The Most Based <span className="text-purple-400">Memecoin</span> on Solana
            </h1>
            <p className="text-xl mb-4 text-purple-100/80">
              Join the wildest ride in crypto with $MUNKY - where memes meet massive gains!
            </p>
            <div className="bg-purple-900/50 p-4 rounded-lg mb-8">
              <p className="text-sm font-mono text-purple-300">Contract Address:</p>
              <p className="text-xs font-mono text-purple-400 break-all">65wwCdZaHvWLXKh7bZQDaRsY7yRj97sX9VDyGXMXpump</p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-purple-400 text-purple-950 px-8 py-3 rounded-full font-semibold hover:bg-purple-300 transition-colors flex items-center">
                Buy $MUNKY
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-400/10 transition-colors">
                Chart
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-purple-400/20 rounded-full animate-pulse"></div>
              <Squirrel className="w-full h-full text-purple-400 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};