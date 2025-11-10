import React from "react";
import SectionTitle from "./SectionTitle";
import { FaLocationArrow } from "react-icons/fa";

const Qualifications = () => {
  return (
    <section className="py-10 mx-auto max-w-7xl px-8" id="qualifications">
      <SectionTitle text="🎓 My Qualifications" />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
        {/* Qualification Card */}
        <div className="bg-gray-50 rounded-xl shadow p-6 hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-800">
            M.Tech in Computer Science & Engineering
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            National Institute of Technology Puducherry | 2025 – 2027
          </p>
          <p className="text-sm text-gray-500">CGPA: --</p>
        </div>

        {/* Qualification Card */}
        <div className="bg-gray-50 rounded-xl shadow p-6 hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-800">
            B.Tech in Computer Science & Engineering
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Government College of Engineering, Keonjhar | 2021 – 2025
          </p>
          <p className="text-sm text-gray-500">CGPA: 8.6/10</p>
        </div>

        {/* Qualification Card */}
        <div className="bg-gray-50 rounded-xl shadow p-6 hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-800">
            Higher Secondary (Class 12th)
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Sri Aurobindo Science College, Madhupatna, Cuttack | 2019 – 2021
          </p>
          <p className="text-sm text-gray-500">Percentage: 86%</p>
        </div>

        {/* Qualification Card */}
        <div className="bg-gray-50 rounded-xl shadow p-6 hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-800">
            Matriculation (Class 10th)
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Sri Aurobindo Integral Center of Education, Matrubhaban, Barada,
            Dhenkanal | 2018 – 2019
          </p>
          <p className="text-sm text-gray-500">Percentage: 84%</p>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
