import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const GalleryPage = () => {
  const products = [
    {
      id: 1,
      isNew: true,
      brand: "Fastrack",
      name: "Black Wayfarer Eyeglasses For Men",
      price: "$80",
      image:
        "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=400&fit=crop",
      color: "Black",
      shape: "Wayfarer",
      gender: "Men",
    },
    {
      id: 2,
      isNew: true,
      brand: "Fastrack",
      name: "Olive Wayfarer Eyeglasses For Men",
      price: "$80",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
      color: "Olive",
      shape: "Wayfarer",
      gender: "Men",
    },
    {
      id: 3,
      isNew: true,
      brand: "Fastrack",
      name: "Grey Round Eyeglasses For Men And Women",
      price: "$80",
      image:
        "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=400&fit=crop",
      color: "Grey",
      shape: "Round",
      gender: "Men & Women",
    },
    {
      id: 4,
      brand: "Titan",
      name: "Black Rectangle Eyeglasses For Men And Women",
      price: "$240",
      image:
        "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=400&h=400&fit=crop",
      color: "Black",
      shape: "Rectangle",
      gender: "Men & Women",
    },
    {
      id: 5,
      brand: "Fastrack",
      name: "Blue Aviator Eyeglasses For Women",
      price: "$90",
      image:
        "https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=400&fit=crop",
      color: "Blue",
      shape: "Aviator",
      gender: "Women",
    },
    {
      id: 6,
      isNew: true,
      brand: "Ray-Ban",
      name: "Brown Square Eyeglasses For Men",
      price: "$350",
      image:
        "https://images.unsplash.com/photo-1580635853828-1e3fd0bc0511?w=400&h=400&fit=crop",
      color: "Brown",
      shape: "Square",
      gender: "Men",
    },
    {
      id: 7,
      brand: "Oakley",
      name: "Sport Sunglasses For Men",
      price: "$420",
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      color: "Black",
      shape: "Sport",
      gender: "Men",
    },
    {
      id: 8,
      isNew: true,
      brand: "Prada",
      name: "Designer Cat Eye Eyeglasses For Women",
      price: "$580",
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
      color: "Gold",
      shape: "Cat Eye",
      gender: "Women",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 font-semibold mb-4 border border-teal-200 dark:border-teal-800">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Premium Collection</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Eyeglasses Collection
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Discover our curated selection of premium eyewear from
            world-renowned brands
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-2 border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 transition-colors duration-300 bg-white dark:bg-slate-900 overflow-hidden h-full">
                {/* Image Container */}
                <div className="relative h-56 bg-slate-50 dark:bg-slate-800/50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 to-transparent" />

                  {/* New Badge */}
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-linear-to-r from-teal-600 to-cyan-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      NEW
                    </span>
                  )}
                </div>

                <CardContent className="p-4">
                  {/* Brand */}
                  <div className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2">
                    {product.brand}
                  </div>

                  {/* Product Name */}
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 line-clamp-2 leading-tight min-h-10">
                    {product.name}
                  </h3>

                  {/* Details */}
                  <div className="flex flex-wrap gap-2 mb-3 text-xs text-slate-600 dark:text-slate-400">
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">
                      {product.color}
                    </span>
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">
                      {product.shape}
                    </span>
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">
                      {product.gender}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                      {product.price}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-500">
                      Inclusive of all taxes
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    size="sm"
                    className="w-full bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white transition-all duration-200"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
