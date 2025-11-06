"use client";

import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const Payment = ({
  onNext,
  onBack,
}: {
  onNext?: () => void;
  onBack?: () => void;
}) => {
  const [method, setMethod] = useState<"paypal" | "credit">("credit");

  return (
    <div className="min-h-screen bg-white py-8 px-4 md:px-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Checkout</h1>
        <button
          onClick={onBack}
          className="flex items-center text-sm text-[#035b77] hover:underline"
        >
          <ArrowLeft size={16} className="mr-1" />
          Go Back
        </button>
      </div>

      {/* Step Navigation */}
      <div className="flex items-center gap-2 text-gray-500 text-sm mb-10">
        <span>My Cart</span>
        <span>–</span>
        <span className="font-semibold text-black">Payment</span>
        <span>–</span>
        <span>Confirmation</span>
      </div>

      {/* Payment Method Section */}
      <h2 className="text-lg font-semibold mb-6">
        Choose your preferred payment method
      </h2>

      <div className="space-y-5">
        {/* Paypal */}
        <div
          className={`border rounded-2xl p-5 flex justify-between items-center cursor-pointer transition ${
            method === "paypal"
              ? "border-[#035b77] bg-[#f7fbfc]"
              : "border-gray-200"
          }`}
          onClick={() => setMethod("paypal")}
        >
          <div>
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <input
                type="radio"
                checked={method === "paypal"}
                readOnly
                className="accent-[#035b77]"
              />
              Paypal
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Safe payment online. Credit card needed.
              <br />
              Paypal account is not necessary.
            </p>
          </div>
          <Image
                      src="/paypal-logo.png"
                      width={30}
                      height={30}
            alt="PayPal"
            className="w-16 h-auto object-contain"
          />
        </div>

        {/* Credit Card */}
        <div
          className={`border rounded-2xl p-5 cursor-pointer transition ${
            method === "credit"
              ? "border-[#035b77] bg-[#f7fbfc]"
              : "border-gray-200"
          }`}
          onClick={() => setMethod("credit")}
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <input
                  type="radio"
                  checked={method === "credit"}
                  readOnly
                  className="accent-[#035b77]"
                />
                Credit Card
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Safe money transfer using your bank account. Visa, MasterCard or
                Verve.
              </p>
            </div>
            <div className="flex gap-2">
                          <Image src=""
                              alt="Visa" className="w-10 h-auto" />
                          <Image src="/mastercard.png"
                              width={30} height={30} alt="MasterCard" className="w-10 h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Card Form */}
      {method === "credit" && (
        <form className="mt-8 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-gray-700">Card Name</label>
              <input
                type="text"
                placeholder="Card Name"
                className="w-full mt-2 border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#035b77]"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Credit Card Number
              </label>
              <input
                type="text"
                placeholder="Enter card number"
                className="w-full mt-2 border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#035b77]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-gray-700">CVV</label>
              <input
                type="text"
                placeholder="CVV Code"
                className="w-full mt-2 border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#035b77]"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Expiry Date</label>
              <input
                type="text"
                placeholder="DD/MM/YY"
                className="w-full mt-2 border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#035b77]"
              />
            </div>
          </div>
        </form>
      )}

      {/* Pay Button */}
      <div className="mt-10 flex justify-end">
        <button
          onClick={onNext}
          className="bg-[#035b77] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#02485d] transition"
        >
          Pay Now →
        </button>
      </div>
    </div>
  );
};

export default Payment;