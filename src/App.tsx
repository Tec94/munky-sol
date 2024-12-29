import React from 'react';
import { Navbar } from './components/Navbar';
import { TokenStats } from './components/TokenStats';
import { Tokenomics } from './components/Tokenomics';
import { Hero } from './components/Hero';
import { PriceConverter } from './components/PriceConverter';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-950 to-black text-purple-50">
      <Navbar />
      <Hero />
      <TokenStats />
      <Tokenomics />
      <PriceConverter />
      <Footer />
    </div>
  );
}

export default App;