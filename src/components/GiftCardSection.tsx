import React from 'react';
import { ShieldCheck, Sparkles, Clock } from 'lucide-react';

const GiftCard = ({ value, image }: { value: string; image: string }) => (
  <div className="bg-[#1F1F1F] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
    <div className="relative aspect-[4/3]">
      <img src={image} alt={`${value} Gift Card`} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
        <div>
          <div className="text-sm text-gray-300">Google Play Gift Card</div>
          <div className="text-2xl font-bold">{value}</div>
        </div>
      </div>
    </div>
    <div className="p-4">
      <button className="w-full bg-[#E50914] py-2 rounded hover:bg-[#FF0F1A] transition-colors">
        Select Card
      </button>
    </div>
  </div>
);

const GiftCardSection = () => {
  const cards = [
    { value: "$25", image: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg" },
    { value: "$50", image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg" },
    { value: "$100", image: "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg" }
  ];

  return (
    <section className="py-20 bg-black" id="cards">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Choose Your <span className="text-[#E50914]">Weapon</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {cards.map((card) => (
            <GiftCard key={card.value} {...card} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center" id="how-it-works">
          <div className="p-6">
            <ShieldCheck className="w-12 h-12 text-[#E50914] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Transaction</h3>
            <p className="text-gray-400">Every purchase is protected with bank-level security</p>
          </div>
          <div className="p-6">
            <Sparkles className="w-12 h-12 text-[#E50914] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Delivery</h3>
            <p className="text-gray-400">Get your code immediately after purchase</p>
          </div>
          <div className="p-6">
            <Clock className="w-12 h-12 text-[#E50914] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-400">Our team is always here to help you</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GiftCardSection;