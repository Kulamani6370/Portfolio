import React from "react";
import SectionTitle from "./SectionTitle";
import { FaLocationArrow } from "react-icons/fa";

const Qualifications = () => {
  return (
    <section className=" py-10 mx-auto max-w-7xl px-8 " id="qualifications">
      <SectionTitle text="🎓 My Qualifications" />
      <div class="space-y-6 py-10">
        {/* <!-- Qualification Card --> */}
        <div class="bg-gray-50 rounded-xl shadow p-6 hover:shadow-md transition">
          <h3 class="text-xl font-semibold text-gray-800">
            B.Tech in Computer Science & Engineering
          </h3>
          <p class="text-sm text-gray-600 mt-1 r">
            Government College of Engineering, Keonjhar | 2021 – 2025
          </p>

          <p class="text-sm text-gray-500">CGPA: 8.6/10</p>
        </div>

        {/* <!-- Qualification Card --> */}
        <div class="bg-gray-50 rounded-xl shadow p-6 hover:shadow-md transition">
          <h3 class="text-xl font-semibold text-gray-800">
            Higher Secondary (Class 12th)
          </h3>
          <p class="text-sm text-gray-600 mt-1">
            Sri Aurobindo Science College, Madhupatna, Cuttack | 2019 – 2021
          </p>
          <p class="text-sm text-gray-500">Percentage: 86%</p>
        </div>

        {/* <!-- Qualification Card --> */}
        <div class="bg-gray-50 rounded-xl shadow p-6 hover:shadow-md transition">
          <h3 class="text-xl font-semibold text-gray-800">
            Matriculation (Class 10th)
          </h3>
          <p class="text-sm text-gray-600 mt-1">
            Sri Aurobindo Integral Center of Education, Matrubhaban, Barada,
            Dhenkanal | 2018 – 2019
          </p>
          <p class="text-sm text-gray-500">Percentage: 84%</p>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
