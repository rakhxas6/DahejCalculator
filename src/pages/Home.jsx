import React, { useState } from "react";
import ResultCard from "../components/ResultCard";
import InfoModal from "../components/InfoModal";
import Header from "./Header";
import { calculateDahej as calculateDahejUtil } from "../components/CalculateDahej";
import DahejForm from "../components/DahejForm";

const Home = () => {
  const [amount, setAmount] = useState(null);

  const calculateDahej = (data) => {
    const result = calculateDahejUtil(data);
    setAmount(result);
  };

  return (
    <>
      <Header />
      {amount === null ? (
        <DahejForm onCalculate={calculateDahej} />
      ) : (
        <ResultCard amount={amount} onReset={() => setAmount(null)} />
      )}
      <InfoModal />
    </>
  );
};

export default Home;
