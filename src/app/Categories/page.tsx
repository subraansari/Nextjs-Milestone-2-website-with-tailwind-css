
import React from "react";

const Categories = () => {
  const categories = [
    { name: 'Men', image: '/men.avif' },
    { name: 'Women', image: '/women.avif' },
    { name: 'Kids Collection', image: '/kids.avif' },
    { name: 'Jewelery', image: '/jewelry.jpg' },
    { name: 'Perfume', image: '/perfume.jpg' },
    { name: 'bags', image: '/bags.webp' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      
        <title>Categories</title>
      
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <h2 className="text-xl text-center font-semibold">{category.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;