import React from "react";
const PerfumePage = () => {
  const perfumeItems = [
    { name: 'Classic Perfume', image: '/classic.webp' },
    { name: 'Luxury Perfume', image: '/luxury.webp' },
    { name: 'Floral Scent', image: 'floral.jpg' },
    { name: 'Citrus Delight', image: '/cit.webp' },
    { name: 'Oriental Touch', image: '/oriental.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-50 py-10">
     
        <title>Perfume Collection</title>
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-purple-800 mb-10">Perfume Collection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {perfumeItems.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-64 object-cover object-center transition-opacity duration-300 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-purple-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white">{item.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerfumePage;
