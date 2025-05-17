import SectionTitle from "./SectionTitle";
import Full_Stack_Cert from "../assets/certificates/Full_Stack.jpg";
import MERN_CERT from "../assets/certificates/MERN.jpg";
import WEB_INT_CERT from "../assets/certificates/WebDev_internship.jpg";
import FRONTEND_SUM_INT from "../assets/certificates/Frontend_Internship.jpg";
import MONGODB from "../assets/certificates/mongoDB.jpg";

const Certifications = () => {
  return (
    <section className=" py-10 mx-auto max-w-7xl px-8 " id="certifications">
      <SectionTitle text="📜 My Certificates" />
      <div class="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* <!-- Certificate Card --> */}
        <div class="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
          <a href={Full_Stack_Cert} target="_blank">
            <img
              src={Full_Stack_Cert}
              alt="Front-End Developer Certificate"
              class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </a>
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800">
              IBM Full Stack Software Development
            </h3>
            <p class="text-sm text-gray-500">IBM via Coursera</p>
          </div>
        </div>

        {/* <!-- Certificate Card --> */}
        <div class="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
          <a href={MERN_CERT} target="_blank">
            <img
              src={MERN_CERT}
              alt="Responsive Web Design"
              class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </a>
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800">
              MERN Stack Development
            </h3>
            <p class="text-sm text-gray-500">Udemy</p>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
          <a href={WEB_INT_CERT} target="_blank">
            <img
              src={WEB_INT_CERT}
              alt="JavaScript Essentials Certificate"
              class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </a>
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800">
              Wev Development Intership
            </h3>
            <p class="text-sm text-gray-500">Corizo</p>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
          <a href={FRONTEND_SUM_INT} target="_blank">
            <img
              src={FRONTEND_SUM_INT}
              alt="JavaScript Essentials Certificate"
              class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </a>
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800">
              IBM SkillsBuild Summer Internship
            </h3>
            <p class="text-sm text-gray-500">IBM via CSRBOX</p>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
          <a href={MONGODB} target="_blank">
            <img
              src={MONGODB}
              alt="JavaScript Essentials Certificate"
              class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </a>
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800">MongoDB</h3>
            <p class="text-sm text-gray-500">GeeksForGeeks</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
