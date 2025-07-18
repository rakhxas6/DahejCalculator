// src/components/ResultCard.jsx
import React, { useEffect } from "react";
import sevenKarodSound from "../assets/meme_sounds/SevenKarod.mpeg";
import paisaHiPaisaSound from "../assets/meme_sounds/WhatsApp Audio 2025-07-18 at 14.09.13.mpeg";

const ResultCard = ({ amount, onReset }) => {
  useEffect(() => {
    if (amount) {
      const audio =
        amount <= 7000000
          ? new Audio(sevenKarodSound)
          : new Audio(paisaHiPaisaSound);
      audio.play().catch((e) => console.warn("Audio play failed:", e));
    }
  }, [amount]);

  const toNepaliDigit = (num) => {
    if (num === undefined || num === null) return "";
    return num.toLocaleString("ne-NP", {
      maximumFractionDigits: 0,
    });
  };

  if (amount === undefined || amount === null) return null;

  const funnyMessage =
    amount >= 7000000
      ? "🤑 7 Karod! Dulha imported hai kya?"
      : "🤣 Paisa hi paisa hoga, but thoda kam hai.";

  return (
    <div className="bg-gradient-to-br from-green-100 via-yellow-100 to-pink-100 min-h-screen flex flex-col justify-center items-center px-4 py-10 text-center">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md sm:max-w-lg animate-fade-in border border-green-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4 flex items-center justify-center gap-2">
          💸 Dahej Estimated!
        </h2>

        <p className="text-4xl sm:text-5xl font-extrabold text-green-900">
          रु {toNepaliDigit(amount)}
        </p>

        <p className="mt-4 text-base sm:text-lg italic text-gray-700">
          {funnyMessage}
        </p>

        <button
          onClick={onReset}
          className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all duration-200 shadow-md text-sm sm:text-base"
        >
          🔁 Try Again
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
