"use client";

import React, { useState } from "react";
import MyCart from "./Components/MyCart";
import Payment from "./Components/Payment";
import Confirmation from "./Components/Confirmation";

const CartPage = () => {
  const [step, setStep] = useState<"cart" | "payment" | "confirmation">("cart");

  const renderStep = () => {
    switch (step) {
      case "cart":
        return <MyCart onNext={() => setStep("payment")} />;
      case "payment":
        return <Payment onNext={() => setStep("confirmation")} onBack={() => setStep("cart")} />;
      case "confirmation":
        return <Confirmation onBack={() => setStep("payment")} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4 md:px-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Checkout</h1>
      </div>

      {/* Step Navigation */}
      <div className="flex items-center gap-3 text-sm font-medium mb-10">
        <button
          onClick={() => setStep("cart")}
          className={`transition ${
            step === "cart" ? "text-black font-semibold" : "text-gray-500 hover:text-black"
          }`}
        >
          My Cart
        </button>

        <span>–</span>

        <button
          onClick={() => step !== "cart" && setStep("payment")}
          disabled={step === "cart"}
          className={`transition ${
            step === "payment" ? "text-black font-semibold" : "text-gray-500 hover:text-black"
          } ${step === "cart" && "cursor-not-allowed opacity-40"}`}
        >
          Payment
        </button>

        <span>–</span>

        <button
          onClick={() => step === "confirmation" && setStep("confirmation")}
          disabled={step !== "confirmation"}
          className={`transition ${
            step === "confirmation"
              ? "text-black font-semibold"
              : "text-gray-400 cursor-not-allowed opacity-40"
          }`}
        >
          Confirmation
        </button>
      </div>

      {/* Render the active section */}
      <div>{renderStep()}</div>
    </div>
  );
};

export default CartPage;