import React, { useState } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaMoneyBillWave,
  FaLandmark,
  FaHome,
  FaGem,
  FaUserTie,
  FaPassport,
  FaCar,
  FaHouseUser,
  FaPlaneDeparture,
  FaTools,
  FaCalculator,
} from "react-icons/fa";

const DahejForm = ({ onCalculate }) => {
  const [formData, setFormData] = useState({
    education: "",
    job: "",
    income: "",
    land: "",
    propertyValue: "",
    gold: "",
    ownsCar: false,
    ownsHouse: false,
    fatherOccupation: "",
    ownsForeignHome: false,
    worksInMiddleEast: false,
    hasPR: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto min-h-screen p-6 sm:p-10 my-10 bg-white/60 backdrop-blur rounded-xl shadow-lg space-y-8"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 flex items-center justify-center gap-2">
        <FaCalculator className="text-blue-600" />
        Dahej Calculator Form
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Education */}
        <InputSelect
          label="Education"
          icon={<FaGraduationCap className="text-indigo-500" />}
          name="education"
          value={formData.education}
          onChange={handleChange}
          options={[
            "None",
            "Primary",
            "High School",
            "Bachelors",
            "Masters",
            "PhD",
          ]}
        />

        {/* Job */}
        <InputSelect
          label="Job"
          icon={<FaBriefcase className="text-amber-600" />}
          name="job"
          value={formData.job}
          onChange={handleChange}
          options={[
            "Unemployed",
            "Private",
            "Government",
            "Abroad",
            "Entrepreneur",
            "Freelancer",
            "Military",
            "Engineer",
            "Doctor",
            "Teacher",
          ]}
        />

        {/* Income */}
        <InputNumber
          label="Income (annual)"
          icon={<FaMoneyBillWave className="text-green-600" />}
          name="income"
          value={formData.income}
          onChange={handleChange}
          placeholder="In NPR"
        />

        {/* Land */}
        <InputNumber
          label="Land Area (in ropani)"
          icon={<FaLandmark className="text-yellow-600" />}
          name="land"
          value={formData.land}
          onChange={handleChange}
          placeholder="e.g., 2.5"
        />

        {/* Property Value */}
        <InputNumber
          label="Property Value"
          icon={<FaHome className="text-rose-500" />}
          name="propertyValue"
          value={formData.propertyValue}
          onChange={handleChange}
          placeholder="In NPR"
        />

        {/* Gold */}
        <InputNumber
          label="Gold (in grams)"
          icon={<FaGem className="text-yellow-500" />}
          name="gold"
          value={formData.gold}
          onChange={handleChange}
          placeholder="e.g., 50"
        />

        {/* Father's Occupation */}
        <InputSelect
          label="Father's Occupation"
          icon={<FaUserTie className="text-gray-700" />}
          name="fatherOccupation"
          value={formData.fatherOccupation}
          onChange={handleChange}
          options={[
            "None",
            "Government",
            "Business",
            "Teacher",
            "Farmer",
            "Engineer",
            "Doctor",
            "Retired",
          ]}
        />

        {/* Permanent Residency */}
        <InputSelect
          label="Permanent Residency"
          icon={<FaPassport className="text-sky-600" />}
          name="hasPR"
          value={formData.hasPR}
          onChange={handleChange}
          options={[
            "None",
            "Canada",
            "Australia",
            "Germany",
            "USA",
            "UK",
            "New Zealand",
            "Japan",
            "South Korea",
            "Norway",
          ]}
        />
      </div>

      {/* Checkboxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
        <CheckboxGroup
          title="Assets"
          icon={<FaHouseUser className="text-purple-500" />}
          checkboxes={[
            {
              name: "ownsCar",
              label: "Owns Car",
              icon: <FaCar className="text-blue-500 inline" />,
            },
            {
              name: "ownsHouse",
              label: "Owns House",
              icon: <FaHome className="text-pink-500 inline" />,
            },
            {
              name: "ownsForeignHome",
              label: "Owns Foreign Home",
              icon: <FaPlaneDeparture className="text-red-500 inline" />,
            },
          ]}
          formData={formData}
          onChange={handleChange}
        />

        <CheckboxGroup
          title="Other Conditions"
          icon={<FaTools className="text-gray-700" />}
          checkboxes={[
            {
              name: "worksInMiddleEast",
              label: "Works in Middle East",
              icon: <FaBriefcase className="text-amber-600 inline" />,
            },
          ]}
          formData={formData}
          onChange={handleChange}
        />
      </div>

      <div className="text-center pt-8">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition w-full sm:w-auto"
        >
          💰 Calculate Dahej
        </button>
      </div>
    </form>
  );
};

// 🔧 Helper Components
const InputSelect = ({ label, icon, name, value, onChange, options }) => (
  <div>
    <label className="block mb-1 font-medium flex items-center gap-2">
      {icon} {label}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full border border-gray-300 rounded px-3 py-2"
    >
      <option value="">Select {label.toLowerCase()}</option>
      {options.map((opt) => (
        <option key={opt} value={opt.toLowerCase()}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const InputNumber = ({ label, icon, name, value, onChange, placeholder }) => (
  <div>
    <label className="block mb-1 font-medium flex items-center gap-2">
      {icon} {label}
    </label>
    <input
      type="number"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min="0"
      step="0.01"
      required
      className="w-full border border-gray-300 rounded px-3 py-2"
    />
  </div>
);

const CheckboxGroup = ({ title, icon, checkboxes, formData, onChange }) => (
  <div className="space-y-3">
    <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
      {icon} {title}:
    </h3>
    {checkboxes.map(({ name, label, icon }) => (
      <label key={name} className="flex items-center space-x-2">
        <input
          type="checkbox"
          name={name}
          checked={formData[name]}
          onChange={onChange}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span>
          {icon} {label}
        </span>
      </label>
    ))}
  </div>
);

export default DahejForm;
