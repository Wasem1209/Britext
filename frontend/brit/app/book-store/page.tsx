"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { useRouter } from "next/navigation";

// Book data
const initialBooks = [
  {
    id: 1,
    title: "How to Adult",
    author: "Stephen Wildish",
    category: "Fiction",
    price: 400,
    rating: 3.1,
    image: "/images/unshakle.jpg",
  },
  {
    id: 2,
    title: "The Habit of Winning",
    author: "R. Golaakrishnan",
    category: "Fiction",
    price: 1500,
    rating: 2.5,
    image: "/images/Teens.jpg",
  },
  {
    id: 3,
    title: "An Anthology of Christian Mysticism",
    author: "John Rubysbreck",
    category: "Faith Based",
    price: 1500,
    rating: 2.5,
    image: "/images/zero.jpg",
  },
  {
    id: 4,
    title: "Build Your Family Bank",
    author: "David Rosen",
    category: "Lifestyle",
    price: 800,
    rating: 3.1,
    image: "/images/todler.jpg",
  },
  {
    id: 5,
    title: "The 80/20 Principles",
    author: "Richard Koch",
    category: "Educational",
    price: 800,
    rating: 3.1,
    image: "/books/80-20-principles.jpg",
  },
  {
    id: 6,
    title: "Never Split the Difference",
    author: "Chris Voss",
    category: "Professional & Technical",
    price: 2500,
    rating: 4.8,
    image: "/books/never-split-the-difference.jpg",
  },
  {
    id: 7,
    title: "Math Without Numbers",
    author: "M. Eazo",
    category: "Educational",
    price: 80,
    rating: 3.1,
    image: "/books/math-without-numbers.jpg",
    oldPrice: 100,
  },
  {
    id: 8,
    title: "Scam Me If You Can",
    author: "Frank W. Abagnale",
    category: "Non-Fiction",
    price: 253,
    oldPrice: 8000,
    rating: 2.5,
    image: "/books/scam-me-if-you-can.jpg",
  },
];

const categories = [
  "All Books",
  "Educational",
  "Fiction",
  "Non-Fiction",
  "Professional & Technical",
  "Faith Based",
  "Lifestyle",
  "Journal & Notes",
];

const BookStore = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All Books");
  const [books, setBooks] = useState(initialBooks);

  const handleAddToCart = (bookTitle: string) => {
    alert(`${bookTitle} added to cart 🛒`);
  };

  const handleWishlist = (bookTitle: string) => {
    alert(`${bookTitle} added to wishlist ❤`);
  };

  const handleViewDetails = (bookId: number) => {
    router.push(`/book-details?id=${bookId}`);
  };

  // ✅ Handle star click (update rating)
  const handleRating = (bookId: number, newRating: number) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === bookId ? { ...book, rating: newRating } : book
      )
    );
  };

  const filteredBooks =
    selectedCategory === "All Books"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  return (
    <div className="p-4 md:p-8 lg:p-12 bg-white">
      {/* Header */}
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">Book Store</h1>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border text-sm transition-all ${
              selectedCategory === category
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-transparent text-gray-700 border-gray-300 hover:bg-blue-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="border rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden bg-white relative"
          >
            {/* Wishlist Icon */}
            <button
              onClick={() => handleWishlist(book.title)}
              className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-gray-100 transition"
              title="Add to wishlist"
            >
              <Heart
                size={18}
                className="text-gray-600 hover:text-red-500 transition"
              />
            </button>

            {/* Image */}
            <div
              onClick={() => handleViewDetails(book.id)}
              className="relative w-full h-56 cursor-pointer"
            >
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover rounded-t-xl"
              />
            </div>

            {/* Book Details */}
            <div className="p-3">
              <p className="text-xs text-gray-500 mb-1">
                {book.category} •{" "}
                <span className="text-blue-500">{book.author}</span>
              </p>

              <h2
                onClick={() => handleViewDetails(book.id)}
                className="text-sm font-medium line-clamp-2 mb-2 cursor-pointer hover:text-blue-500 transition"
              >
                {book.title}
              </h2>

              {/* ⭐ Interactive Rating */}
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className={`cursor-pointer transition ${
                      star <= Math.round(book.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                    onClick={() => handleRating(book.id, star)}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-1">
                  ({book.rating.toFixed(1)})
                </span>
              </div>

              {/* Pricing */}
              <div className="flex items-center gap-2 mb-3">
                {book.oldPrice && (
                  <span className="text-gray-400 text-sm line-through">
                    ${book.oldPrice}
                  </span>
                )}
                <span className="text-black font-semibold text-sm">
                  ${book.price}
                </span>
              </div>

              {/* Add to Cart */}
              <button
                onClick={() => handleAddToCart(book.title)}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md px-4 py-2 transition"
              >
                Add to cart 🛒
              </button>

              {/* View Details */}
              <button
                onClick={() => handleViewDetails(book.id)}
                className="w-full mt-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm rounded-md px-4 py-2 transition"
              >
                View Details 👁
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookStore;