import React from "react";
import about from "../../../assets/images/About us page-cuate.png";

import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <section
      className="relative py-16 w-full bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${about})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative w-11/12 mx-auto flex justify-center dark:text-black  items-center">
        <div className="grid sm:grid-cols-2 gap-10 bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg max-w-4xl">
          <div className="text-center max-w-md p-6 bg-white shadow-md rounded-xl">
            <div className="text-blue-400 mb-4 text-4xl">🌟</div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">
              Our Mission
            </h3>
            <p className=" text-sm">
              To deliver high-quality solutions that solve real-world problems
              and enhance the customer experience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="text-center max-w-md p-6 bg-white shadow-md rounded-xl">
            <div className="text-blue-400 mb-4 text-4xl">🚀</div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">
              Our Vision
            </h3>
            <p className=" text-sm">
              To be a leading provider of innovative products and services that
              exceed customer expectations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="text-center max-w-md p-6 bg-white shadow-md rounded-xl">
            <div className="text-blue-400 mb-4 text-4xl">💡</div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">
              Our Values
            </h3>
            <p className=" text-sm">
              Integrity, innovation, customer satisfaction, and excellence drive
              everything we do.
            </p>
          </div>

          {/* Card 4 */}
          <div className="text-center max-w-md p-6 bg-white shadow-md rounded-xl">
            <div className="text-blue-400 mb-4 text-4xl">🌱</div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">
              Our Commitment
            </h3>
            <p className=" text-sm">
              We are dedicated to sustainability and creating a positive impact
              on society and the environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
