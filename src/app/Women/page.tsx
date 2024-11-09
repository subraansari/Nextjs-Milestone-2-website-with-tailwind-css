import React from "react";

const WomensPage = () => {
  const womensItems = [
    { name: 'Dresses', image: '/women.avif' },
    { name: 'Footwear', image: '/women-footwear.jpeg' },
    { name: 'Handbags', image: '/handbag.webp' },
    { name: 'Jewelry', image: '/jewelry.jpg' },
    { name: 'Beauty Products', image: '/beauty-products.webp' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-50 py-10">
      
        <title>Women's Collection</title>
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-pink-800 mb-10">Women's Collection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {womensItems.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-64 object-cover object-center transition-opacity duration-300 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-pink-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white">{item.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomensPage;
