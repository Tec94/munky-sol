import React from 'react';
import { Flame, Share2, TrendingUp } from 'lucide-react';

export const Tokenomics: React.FC = () => {
  return (
    <div className="py-20 px-4" id="tokenomics">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Tokenomics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-amber-900/30 to-amber-950/30 p-8 rounded-2xl backdrop-blur-sm border border-amber-400/10 hover:border-amber-400/30 transition-colors">
            <Flame className="h-12 w-12 text-amber-400 mb-4" />
            <h3 className="text-xl font-bold mb-4">Burn Mechanism</h3>
            <p className="text-amber-100/60">2% of every transaction is automatically burned, reducing supply over time</p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-900/30 to-amber-950/30 p-8 rounded-2xl backdrop-blur-sm border border-amber-400/10 hover:border-amber-400/30 transition-colors">
            <Share2 className="h-12 w-12 text-amber-400 mb-4" />
            <h3 className="text-xl font-bold mb-4">Redistribution</h3>
            <p className="text-amber-100/60">3% of transactions redistributed to holders, rewarding long-term investors</p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-900/30 to-amber-950/30 p-8 rounded-2xl backdrop-blur-sm border border-amber-400/10 hover:border-amber-400/30 transition-colors">
            <TrendingUp className="h-12 w-12 text-amber-400 mb-4" />
            <h3 className="text-xl font-bold mb-4">Marketing</h3>
            <p className="text-amber-100/60">2% allocated to marketing wallet for continuous growth and development</p>
          </div>
        </div>
      </div>
    </div>
  );
};