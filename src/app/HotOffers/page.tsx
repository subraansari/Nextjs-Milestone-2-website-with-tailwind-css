import React from "react";
const HotOffersPage = () => {
  const offers = [
    {
      title: '50% Off on Women\'s Fashion',
      image: '/fashion.jpg',
      description: 'Get half-price deals on the latest women\'s styles!',
      oldPrice: '$100',
      newPrice: '$50',
      link: '#'
    },
    {
      title: 'Men\'s Accessories Sale',
      image: '/menaccessories.jpg',
      description: 'Up to 30% off on all men\'s accessories!',
      oldPrice: '$80',
      newPrice: '$56',
      link: '#'
    },
    {
      title: 'Buy 1 Get 1 Free on Perfumes',
      image: '/buy one.webp',
      description: 'Limited time offer on selected fragrances.',
      oldPrice: '$60',
      newPrice: 'Buy 1 Get 1',
      link: '#'
    },
    {
      title: 'Jewelry Clearance Sale',
      image: '/simplejewelry.webp',
      description: 'Massive discounts on our premium jewelry collection.',
      oldPrice: '$200',
      newPrice: '$120',
      link: '#'
    },
    {
      title: 'Exclusive Footwear Deals',
      image: '/sneakers.webp',
      description: 'Grab the best offers on shoes and more!',
      oldPrice: '$150',
      newPrice: '$90',
      link: '#'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-10">
     
        <title>Hot Offers</title>
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-red-600 mb-10">Hot Offers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg bg-white transform transition-transform duration-300 hover:scale-105">
              <img 
                src={offer.image} 
                alt={offer.title} 
                className="w-full h-48 object-cover object-center transition-opacity duration-300 group-hover:opacity-80"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2 text-gray-700">{offer.title}</h2>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="text-red-500 font-bold mb-2">
                  <span className="line-through mr-2 text-gray-400">{offer.oldPrice}</span>
                  <span>{offer.newPrice}</span>
                </div>
                <a href={offer.link} className="text-indigo-600 font-bold hover:underline">
                  Shop Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotOffersPage;
