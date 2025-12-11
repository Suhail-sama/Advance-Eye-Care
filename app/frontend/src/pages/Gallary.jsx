import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Gallary = () => {
  const products = [
    {
      id: 1,
      isNew: true,
      brand: "Fastrack",
      name: "Black Wayfarer Eyeglasses For Men",
      price: "¥800",
      image: "/img1.jpg",
      color: "Black",
      shape: "Wayfarer",
      gender: "Men",
    },
    {
      id: 2,
      isNew: true,
      brand: "Fastrack",
      name: "Olive Wayfarer Eyeglasses For Men",
      price: "¥800",
      image: "/img2.jpg",
      color: "Olive",
      shape: "Wayfarer",
      gender: "Men",
    },
    {
      id: 3,
      isNew: true,
      brand: "Fastrack",
      name: "Grey Round Eyeglasses For Men And Women",
      price: "¥800",
      image: "/img1.jpg",
      color: "Grey",
      shape: "Round",
      gender: "Men & Women",
    },
    {
      id: 4,
      brand: "Titan",
      name: "Black Rectangle Eyeglasses For Men And Women",
      price: "¥2,400",
      image: "/img2.jpg",
      color: "Black",
      shape: "Rectangle",
      gender: "Men & Women",
    },
    {
      id: 5,
      brand: "Fastrack",
      name: "Blue Aviator Eyeglasses For Women",
      price: "¥900",
      image: "/img1.jpg",
      color: "Blue",
      shape: "Aviator",
      gender: "Women",
    },
    {
      id: 6,
      isNew: true,
      brand: "Ray-Ban",
      name: "Brown Square Eyeglasses For Men",
      price: "¥3,500",
      image: "/img2.jpg",
      color: "Brown",
      shape: "Square",
      gender: "Men",
    },
    {
      id: 7,
      brand: "Oakley",
      name: "Sport Sunglasses For Men",
      price: "¥4,200",
      image: "/img1.jpg",
      color: "Black",
      shape: "Sport",
      gender: "Men",
    },
    {
      id: 8,
      isNew: true,
      brand: "Prada",
      name: "Designer Cat Eye Eyeglasses For Women",
      price: "¥5,800",
      image: "/img2.jpg",
      color: "Gold",
      shape: "Cat Eye",
      gender: "Women",
    },
  ];

  return (
    <div className="bg-white p-3">
      {/* Minimal Header - Improved visibility */}
      <h1 className="text-xl font-bold text-gray-900 mb-3">Eyeglasses Collection</h1>

      {/* Compact Grid - Even smaller */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {products.map((product) => (
          <Card key={product.id} className="border-gray-200 hover:border-gray-300 transition-colors">
            {/* Image - Ultra Compact */}
            <div className="relative h-32 bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-1"
              />
              {product.isNew && (
                <span className="absolute top-1 left-1 bg-black text-white text-xs px-1.5 py-0.5 font-medium">
                  New
                </span>
              )}
            </div>

            <CardContent className="p-2">
              {/* Brand - More visible */}
              <div className="text-xs font-semibold text-gray-900 mb-0.5">
                {product.brand}
              </div>

              {/* Product Name - Better visibility */}
              <div className="text-xs text-white mb-1 line-clamp-2 leading-tight font-medium">
                {product.name}
              </div>

              {/* Simple Details - More contrast */}
              <div className="text-xs text-white mb-1.5">
                {product.color} • {product.shape} • {product.gender}
              </div>

              {/* Price - Fixed and more prominent */}
              <div>
                <div className="text-sm font-bold text-white mb-0.5">
                  {product.price}
                </div>
                <div className="text-xs text-white">
                  Inclusive of all taxes
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Gallary;