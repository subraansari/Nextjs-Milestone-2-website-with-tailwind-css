import React from "react";
const JewelryPage = () => {
  const jewelryItems = [
    { name: 'Rings', image: '/rings.jpg' },
    { name: 'Necklaces', image: '/necklace.webp' },
    { name: 'Bracelets', image: '/bracelet.jpg' },
    { name: 'Earrings', image: '/earings.avif' },
    { name: 'Watches', image: '/watches.webp' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-50 py-10">
      
        <title>Jewelry Collection</title>
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-yellow-800 mb-10">Jewelry Collection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jewelryItems.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-64 object-cover object-center transition-opacity duration-300 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-yellow-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white">{item.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JewelryPage;
