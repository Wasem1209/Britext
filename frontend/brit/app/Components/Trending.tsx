"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ShoppingCart, Heart } from "lucide-react";

interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  oldPrice?: number | null;
  newPrice: number;
  rating: number;
  img: string;
}

const TrendingPost = () => {
  const router = useRouter();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setBooks([
        {
          id: 1,
          title: "Decoded- Why Science Behind Why We Buy",
          author: "Rury Sutherland",
          category: "Fictional",
          oldPrice: 600,
          newPrice: 500,
          rating: 2.5,
          img: "/images/Dont.jpg",
        },
        {
          id: 2,
          title: "Great Economic Thinkers",
          author: "Jonathan Conlin",
          category: "Fictional",
          oldPrice: 900,
          newPrice: 670,
          rating: 3.6,
          img: "/images/f&p.jpg",
        },
        {
          id: 3,
          title: "The Business of Choice",
          author: "Mathew Willcox",
          category: "Fictional",
          oldPrice: 300,
          newPrice: 100,
          rating: 2.9,
          img: "/images/l&f.jpg",
        },
        {
          id: 4,
          title: "Secret of Power Negotiating",
          author: "Roger Dawson",
          category: "Fictional",
          oldPrice: 1000,
          newPrice: 750,
          rating: 4.8,
          img: "/images/r&g.jpg",
        },
        {
          id: 5,
          title: "Lessons from the Titans",
          author: "Scott Davis - Carter Copeland - Rob Wertheimer",
          category: "Fictional",
          oldPrice: 34000,
          newPrice: 2600,
          rating: 6.5,
          img: "/images/s&s.jpg",
        },
        {
          id: 6,
          title: "Military Strategy- A Global History",
          author: "Jeremy Black",
          category: "History",
          oldPrice: null,
          newPrice: 340,
          rating: 2.5,
          img: "/images/restore.jpg",
        },
        {
          id: 7,
          title: "Septuaginta",
          author: "Rahlfs Hanhart",
          category: "Holy Bible",
          oldPrice: 3500,
          newPrice: 200,
          rating: 4.3,
          img: "/images/spiritual.jpg",
        },
        {
          id: 8,
          title: "Negotiate Like a CEO",
          author: "Jonathan S. Stein",
          category: "Fictional",
          oldPrice: null,
          newPrice: 2000,
          rating: 2.5,
          img: "/images/ssc.jpg",
        },
      ]);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleBookClick = (id: number) => {
    router.push(`/book-store/${id}`); // Navigate to book details page
  };

  const handleViewAll = () => {
    router.push("/book-store"); // Navigate to book store
  };

  return (
    <section className="w-[90%] mx-auto mt-15 py-2">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Trending post</h2>
        <button
          onClick={handleViewAll}
          className="text-blue-600 hover:underline text-sm font-semibold"
        >
          View all →
        </button>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? // 🔷 Loading shimmer animation
            Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <div className="h-52 bg-gray-200 w-full"></div>
                <div className="p-3 space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-8 bg-gray-300 rounded mt-4"></div>
                </div>
              </div>
            ))
          : // 🔹 Loaded books
            books.map((book) => (
              <motion.div
                key={book.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden relative cursor-pointer border border-gray-100"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div onClick={() => handleBookClick(book.id)}>
                  {/* Book Image */}
                  <div className="relative w-full h-52">
                    <Image
                      src={book.img}
                      alt={book.title}
                      fill
                      className="object-cover"
                    />
                    {/* Favorite icon */}
                    <button
                      className="absolute top-2 right-2 bg-white/80 rounded-full p-1 hover:bg-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Heart
                        size={16}
                        className="text-gray-500 hover:text-red-500"
                      />
                    </button>
                  </div>

                  {/* Book Info */}
                  <div className="p-3">
                    <p className="text-xs text-gray-500 mb-1">
                      {book.category} –{" "}
                      <span className="text-gray-700">{book.author}</span>
                    </p>
                    <h3 className="text-sm font-semibold line-clamp-2">
                      {book.title}
                    </h3>

                    {/* Rating */}
                    <p className="text-yellow-500 text-xs mt-1">
                      ⭐ {book.rating}
                    </p>

                    {/* Price */}
                    <div className="flex items-center gap-2 mt-2">
                      {book.oldPrice && (
                        <span className="text-gray-400 line-through text-xs">
                          ${book.oldPrice}
                        </span>
                      )}
                      <span className="text-black font-semibold text-sm">
                        ${book.newPrice}
                      </span>
                    </div>

                    {/* Add to cart button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        alert(`Added "${book.title}" to cart`);
                      }}
                      className="mt-3 w-full flex items-center justify-center gap-2 bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Add to cart <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
      </div>
    </section>
  );
};

export default TrendingPost;