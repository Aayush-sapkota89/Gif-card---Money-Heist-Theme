import React from 'react';
import NavBar from './components/NavBar';
import HeroBanner from './components/HeroBanner';
import GiftCardSection from './components/GiftCardSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main>
        <HeroBanner />
        <GiftCardSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;