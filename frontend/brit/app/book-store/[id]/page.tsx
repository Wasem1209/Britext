"use client";

import Image from "next/image";
import { useState } from "react";
import { ShoppingCart, ArrowLeft, Star } from "lucide-react";
import Link from "next/link";
import SimilarPost from "@/app/Components/SimilarPost";

export default function BookDetails() {
  const [rating, setRating] = useState(2.5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const handleRatingClick = (value: number) => setRating(value);
  const handleMouseEnter = (value: number) => setHoverRating(value);
  const handleMouseLeave = () => setHoverRating(null);

  return (
    <section className="px-4 md:px-10 py-10 max-w-7xl mx-auto font-sans">
      {/* Top Section */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-500">
          Book &gt; Behavioural Science &gt; Marketing Psychology &gt; Consumer Decision Science
        </p>

        <Link
          href="/book-store"
          className="flex items-center gap-1 text-sky-600 hover:underline text-sm"
        >
          <ArrowLeft size={16} />
          Go Back
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* ✅ Book Cover Card */}
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <div
            className="flex justify-center items-center bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100
            h-auto md:h-[22rem] lg:h-[24rem] transition-all duration-300"
          >
            <div className="relative w-40 h-56 md:w-52 md:h-72 rounded-md shadow-md overflow-hidden border border-gray-200 bg-white">
              <Image
                src="/images/ssc.jpg"
                alt="Decoded book cover"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Book Details */}
        <div className="flex-1 space-y-5">
          <p className="text-gray-600 text-sm">
            Author: <span className="text-sky-700 font-semibold">by Phil Barden</span>
          </p>

          <h1 className="text-2xl md:text-3xl font-bold">
            Decoded : The Science Behind Why We Buy
          </h1>

          <p className="text-gray-500 text-sm">
            Edition : Paper & bak illustrated, November 2, 2023
          </p>

          {/* Ratings */}
          <div className="flex items-center gap-1 text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRatingClick(star)}
                onMouseEnter={() => handleMouseEnter(star)}
                onMouseLeave={handleMouseLeave}
                className="focus:outline-none"
              >
                <Star
                  size={20}
                  fill={(hoverRating || rating) >= star ? "currentColor" : "none"}
                  stroke="currentColor"
                  className="transition-transform duration-200 hover:scale-110"
                />
              </button>
            ))}
            <span className="text-gray-600 text-sm ml-2">
              {rating.toFixed(1)} <span className="text-gray-400">(Ratings)</span>
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-gray-400 line-through text-lg">$7500</span>
            <span className="text-2xl font-bold text-sky-700">$5000</span>
            <span className="bg-yellow-400 text-xs px-2 py-1 rounded-md font-semibold">
              Discount
            </span>
          </div>

          {/* Summary */}
          <div className="text-gray-700 text-sm space-y-2">
            <p>
              <strong>“Most Decisions Are Subconscious”</strong>
            </p>
            <p>
              Consumers often can’t fully explain why they choose one brand over another because
              their decisions are based on emotional and intuitive processes.
            </p>
            <p>
              We don’t buy products — we buy goals (e.g., convenience, status, pleasure, safety).
            </p>
            <p>
              Brands that clearly signal how they help achieve a goal are more likely to win in the
              customer’s mind.
            </p>
            <p>
              Decoded explores the hidden drivers behind consumer decisions, using insights from
              neuroscience, behavioral economics, and psychology. Phil Barden reveals that most
              buying choices are made subconsciously, guided by emotional and automatic processes
              rather than rational thinking.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button className="px-5 py-2 border border-sky-600 text-sky-600 rounded-full hover:bg-sky-50">
              Read summary
            </button>
            <button className="px-5 py-2 border border-sky-600 text-sky-600 rounded-full hover:bg-sky-50">
              Buy now
            </button>
            <button className="px-5 py-2 border border-gray-300 text-gray-600 rounded-full hover:bg-gray-100">
              Save for later
            </button>
          </div>

          {/* Add to Cart + Quantity */}
          <div className="flex flex-wrap items-center gap-4 pt-6">
            <button className="flex items-center gap-2 bg-sky-600 text-white px-6 py-2 rounded-full hover:bg-sky-700">
              <ShoppingCart size={18} />
              Add to cart
            </button>

            
          </div>

          {/* Extra Info */}
          <div className="pt-8 border-t mt-6 text-gray-700 text-sm grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="font-semibold">Print Length</p>
              <p>23 Pages</p>
            </div>
            <div>
              <p className="font-semibold">Language</p>
              <p>English</p>
            </div>
            <div>
              <p className="font-semibold">Publisher</p>
              <p>Chijiokwu Stanley Ngozi</p>
            </div>
            <div>
              <p className="font-semibold">Date of Publish</p>
              <p>Dec-3rd-2023</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 pt-2">
            Dimensions: 7 x 0.75 x 9.72 Inches
          </p>
        </div>
      </div>

      {/* Author Section */}
      <div className="flex items-center gap-3 pt-10 border-t mt-10">
        <Image
          src="/images/chigozie-removebg-preview (1).png"
          alt="Phil Barden"
          width={80}
          height={70}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-800">Chijiokwu Stanley Ngozi</p>
          <p className="text-gray-500 text-sm">Author</p>
        </div>
      </div>

      <SimilarPost />
    </section>
  );
}