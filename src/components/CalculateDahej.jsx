// src/utils/calculateDahej.js
export const calculateDahej = (data) => {
  let total = 0;

  const educationMap = {
    none: 0,
    primary: 50000,
    highschool: 100000,
    bachelors: 300000,
    masters: 600000,
    phd: 1000000,
  };

  const jobMap = {
    unemployed: 0,
    private: 200000,
    government: 500000,
    abroad: 600000,
    entrepreneur: 400000,
  };

  const fatherMap = {
    none: 0,
    govt: 300000,
    business: 400000,
  };

  const prMap = {
    none: 0,
    canada: 500000,
    australia: 600000,
    germany: 700000,
    usa: 1000000,
  };

  total += educationMap[data.education] || 0;
  total += jobMap[data.job] || 0;
  total += Number(data.income) * 10;
  total += Number(data.land) * 100000;
  total += Number(data.propertyValue) * 0.2;
  total += (Number(data.gold) / 10) * 100000;

  if (data.ownsCar) total += 300000;
  if (data.ownsHouse) total += 500000;
  total += fatherMap[data.fatherOccupation] || 0;
  if (data.ownsForeignHome) total += 800000;
  if (data.worksInMiddleEast) total += 300000;
  total += prMap[data.hasPR] || 0;

  return Math.floor(total);
};
