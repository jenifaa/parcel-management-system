import React from "react";
import Marquee from "react-fast-marquee";
import sund from '../../../assets/images/sundorban-courer.jpeg'
import redx from '../../../assets/images/unnamed.png'
import eCourier from '../../../assets/images/ecourier_limited.webp'
import fad from '../../../assets/images/channels4_profile.jpg'
import blue from '../../../assets/images/blue.jpg'
import aramex from '../../../assets/images/images.png'
import dash from '../../../assets/images/images (1).png'
import allCargo from '../../../assets/images/AllcargoGati-_logo-1.jpg'
const OurPartner = () => {
  return (
    <div className="py-10 font">
      <div className="text-center mb-12">
        <p className="text-xs text-blue-500 font-bold mb-3">Official Partner Across The Globe---</p>
        <h2 className="text-5xl font-bold ">Our Partners</h2>
      </div>
      <Marquee>
        <div>
          <div className="flex gap-14">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={sund}
                alt="Image 1"
                className="w-60 h-40 object-cover"
              />
              <div className="p-2">
                <h5 className="text-sm font-medium text-center">Sundarban Courier Service (SCS)</h5>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={redx}
                alt="Image 2"
                className="w-60 h-40 object-cover"
              />
              <div className="p-2">
                <h5 className="text-sm font-medium text-center">RedX</h5>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={eCourier}
                alt="Image 3"
                className="w-60 h-40 object-cover"
              />
              <div className="p-2">
                <h5 className="text-sm font-medium text-center">eCourier</h5>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={fad}
                alt="Image 4"
                className="w-60 h-40 object-cover"
              />
              <div className="p-2">
                <h5 className="text-sm font-medium text-center">FedEx Corp</h5>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={blue}
                alt="Image 5"
                className="w-60 h-40 "
              />
              <div className="p-2">
                <h5 className="text-sm font-medium text-center">Blue Dart Express</h5>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={aramex}
                alt="Image 6"
                className="w-60 h-40 object-cover"
              />
              <div className="p-2">
                <h5 className="text-sm font-medium text-center">Aramex</h5>
              </div>
            </div>

            {/* Card 7 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={dash}
                alt="Image 7"
                className="w-60 h-40 object-cover"
              />
              <div className="p-2">
                <h5 className="text-sm font-medium text-center">Dash Courier Services
                </h5>
              </div>
            </div>

            {/* Card 8 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mr-10">
              <img
                src={allCargo}
                alt="Image 8"
                className="w-60 h-40"
              />
              <div className="p-2">
                <h5 className="text-sm font-medium text-center">Allcargo Gati Ltd</h5>
              </div>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default OurPartner;
