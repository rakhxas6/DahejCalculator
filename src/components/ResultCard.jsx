import React, { useEffect } from "react";
import { FaRedo, FaLaughSquint, FaMoneyBillWave } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import sevenKarodSound from "../assets/meme_sounds/SevenKarod.mpeg";
import paisaHiPaisaSound from "../assets/meme_sounds/WhatsApp Audio 2025-07-18 at 14.09.13.mpeg";

const ResultCard = ({ amount, onReset }) => {
  useEffect(() => {
    if (amount) {
      const audio =
        amount >= 70000000
          ? new Audio(sevenKarodSound)
          : new Audio(paisaHiPaisaSound);

      audio.play().catch((e) => console.warn("Audio play failed:", e));

      return () => {
        audio.pause();
        audio.currentTime = 0;
      };
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
    amount >= 70000000
      ? "🤑 7 Crore! Dulha imported hai kya?"
      : "🤣 Paisa hi paisa hoga, but thoda kam hai.";

  return (
    <div className="bg-gradient-to-br from-green-100 via-yellow-100 to-pink-100 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-8 sm:py-10 text-center">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-xs sm:max-w-md md:max-w-lg p-6 sm:p-8 animate-fade-in border border-green-200">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-3 flex items-center justify-center gap-2">
          <GiMoneyStack className="text-2xl sm:text-3xl text-green-600" />
          Dahej Estimated!
        </h2>

        {/* Amount */}
        <p className="text-3xl sm:text-4xl font-extrabold text-green-900 flex items-center justify-center gap-2">
          <FaMoneyBillWave className="text-green-700" />
          रु {toNepaliDigit(amount)}
        </p>

        {/* Funny Message */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-base italic text-gray-700 flex items-center justify-center gap-2">
          <FaLaughSquint className="text-yellow-600" />
          {funnyMessage}
        </p>

        {/* Button */}
        <button
          onClick={onReset}
          className="mt-6 px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all duration-200 shadow-md text-sm sm:text-base flex items-center gap-2 justify-center"
        >
          <FaRedo /> Try Again
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
